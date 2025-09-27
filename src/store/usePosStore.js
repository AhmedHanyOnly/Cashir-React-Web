import { create } from "zustand";
import { toast } from "sonner";

export const useCartStore = create((set, get) => ({
  products: [],
  searchTerm: "",
  cart: [],
  selectedClient: null,
  selectedCategory: "الكل",

  setProducts: (products) => {
    // تأكد إن كل منتج له price
    const fixedProducts = products.map((p) => ({
      ...p,
      price: typeof p.price === "number" ? p.price : parseFloat(p.price) || 0,
      category: p.category || { id: 0, name: "بدون فئة" }, // للتأكد من 
      
    }));
    set({ products: fixedProducts });
  },

  setSearchTerm: (term) => set({ searchTerm: term }),
  setCategory: (category) => set({ selectedCategory: category.name }),

  filteredProducts: () => {
    const term = get().searchTerm.toLowerCase();
    const category = get().selectedCategory;
    return get().products.filter(
      (p) =>
        (p.name.toLowerCase().includes(term) || p.barcode.includes(term)) &&
        (category === "الكل" || p.category.name === category)
    );
  },

  addToCart: (product) => {
    const cart = [...get().cart];
    const index = cart.findIndex((item) => item.id === product.id);
    const price = typeof product.price === "number" ? product.price : 0;

    if (index >= 0) {
      cart[index].qty += 1;
      set({ cart });
      toast.success(`تم زيادة الكمية: ${product.name} إلى ${cart[index].qty}`);
    } else {
      cart.push({ ...product, qty: 1, price });
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

  removeProductsCart: () => {
    set({ cart: [] });
    toast.error(`تم مسح السلة`);
  },

  total: () =>
    get().cart.reduce(
      (sum, item) => sum + (item.price ?? 0) * (item.qty ?? 0),
      0
    ),

  setClient: (client) => {
    set({ selectedClient: client });
    if (client) toast(`تم اختيار العميل: ${client.name}`);
  },
}));
