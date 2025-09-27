import { create } from "zustand";
import { toast } from "sonner";

const productsData = [
  {
    id: 1,
    name: "شكلاته مي ستوري 22 جرام",
    barcode: "12345",
    price: 1.5,
    category: "شوكولاتة",

  },
  {
    id: 2,
    name: "شكلاته مي ستوري شد 12",
    barcode: "23456",
    price: 17,
    category: "شوكولاتة",

  },
  {
    id: 3,
    name: "حلوى جالكسي 50 جرام",
    barcode: "34567",
    price: 3.5,
    category: "حلوى",

  },
  {
    id: 4,
    name: "شوكولاتة نوتيلا 100 جرام",
    barcode: "45678",
    price: 12,
    category: "شوكولاتة",

  },
];

export const useCartStore = create((set, get) => ({
  products: productsData,
  searchTerm: "",
  cart: [],
  selectedClient: null,
  selectedCategory: "الكل",

  setSearchTerm: (term) => set({ searchTerm: term }),
  setCategory: (category) => set({ selectedCategory: category }),

  filteredProducts: () => {
    const term = get().searchTerm.toLowerCase();
    const category = get().selectedCategory;
    return get().products.filter(
      (p) =>
        (p.name.toLowerCase().includes(term) || p.barcode.includes(term)) &&
        (category === "الكل" || p.category === category)
    );
  },

  addToCart: (product) => {
    const cart = [...get().cart];
    const index = cart.findIndex((item) => item.id === product.id);
    if (index >= 0) {
      cart[index].qty += 1;
      set({ cart });
      toast.success(`تم زيادة الكمية: ${product.name} إلى ${cart[index].qty}`);
    } else {
      cart.push({ ...product, qty: 1 });
      set({ cart });
      toast.success(`تم إضافة المنتج: ${product.name}`);
    }
  },

  removeFromCart: (product) => {
    const cart = [...get().cart];
    const index = cart.findIndex((item) => item.id === product.id);

    if (index >= 0) {
      if (product.qty && product.qty < 0) {
        if (cart[index].qty > 1) {
          cart[index].qty += product.qty; 
          set({ cart });
          toast(`تم تقليل الكمية: ${cart[index].name} إلى ${cart[index].qty}`);
        } else {
          cart.splice(index, 1);
          set({ cart });
          toast.error(`تم إزالة المنتج: ${product.name}`);
        }
      } else {
        cart.splice(index, 1);
        set({ cart });
        toast.error(`تم إزالة المنتج: ${product.name}`);
      }
    }
  },
  removeItemCart: (id) => {
    const cart = [...get().cart];
    const index = cart.findIndex((item) => item.id === id);
    if (index >= 0) {
      const productName = cart[index].name;
      cart.splice(index, 1);
      set({ cart });
      toast.error(`تم إزالة المنتج: ${productName}`);
    }
  },

  removeProductsCart: () => {
    set({ cart: [] });
    toast.error(`تم مسح السلة`);
  },

  total: () => get().cart.reduce((sum, item) => sum + item.price * item.qty, 0),

  setClient: (client) => {
    set({ selectedClient: client });
    if (client) toast(`تم اختيار العميل: ${client.name}`);
  },
}));
