"use client";

import React, { useEffect, useState } from "react";
import "../Style/pos.css";
import { useCartStore } from "../store/usePosStore";
import {
  Box,
  FileText,
  Home,
  Minus,
  Plus,
  ShoppingCart,
  Trash,
  User,
  Users,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MdPayment } from "react-icons/md";
import no_image from "/assets/no-image.jpg";
import { Loader } from "../components/Loader";
import { useSelector } from "../hooks/useSelector";
import { useProducts } from "../hooks/useProducts";
import { useInvoices } from "../hooks/useInvoices";
import { toast } from "sonner";
import { useSettings } from "../hooks/useSettings";

export default function POS() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paidAmount, setPaidAmount] = useState(0);

  const {
    cart,
    filteredProducts,
    searchTerm,
    setSearchTerm,
    addToCart,
    removeFromCart,
    total,
    selectedClient,
    setClient,
    selectedCategory,
    setCategory,
    removeProductsCart,
    setProducts,
  } = useCartStore();

  const navigate = useNavigate();
  const { createMutation } = useInvoices();

  const { clientsQuery, categoriesQuery, paymentMethodsQuery } = useSelector();
  const { productsQuery } = useProducts();
  const { data: taxData, isLoading: loadingTax } = useSettings();

  const clients = clientsQuery.data?.data || [];
  const categories = [{ name: "الكل" }, ...(categoriesQuery.data?.data || [])];

  // const products = productsQuery.data?.data || [];
  const paymentMethods = paymentMethodsQuery.data?.data || [];
  const taxItem = taxData?.data?.find((item) => item.key === "tax");
  const taxValue = taxItem ? taxItem.value : 0;

  useEffect(() => {
    if (productsQuery.data) {
      setProducts(productsQuery.data.data);
      console.log(productsQuery.data.data);
    }
  }, [productsQuery.data]);

  const handlePayment = async () => {
    if (!selectedClient) return toast.error("اختر عميل أولاً");
    if (!paymentMethod) return toast.error("اختر طريقة الدفع");
    if (cart.length === 0) return toast.error("السلة فارغة");

    try {
      const subtotal = total(); 
      const taxRate = taxValue ?? 0; 
      const taxAmount = (subtotal * taxRate) / 100; 
      const totalAmount = subtotal + taxAmount; 

      const invoicePayload = {
        client_id: selectedClient.id,
        subtotal,
        tax: taxAmount,
        discount_type: "fixed",
        discount_value: 0,
        total: totalAmount,
        date: new Date().toISOString().split("T")[0],
        notes: "",
        items: cart.map((item) => ({
          item_id: item.id,
          qty: item.qty,
          unit_price: item.price,
          line_total: item.qty * item.price,
        })),
        payments: [
          {
            payment_method_id: paymentMethod,
            amount: paidAmount || totalAmount,
          },
        ],
      };

      console.log("Invoice Payload:", invoicePayload);
      await createMutation.mutateAsync(invoicePayload);
      toast.success("تم إنشاء الفاتورة بنجاح");
      // removeProductsCart();
      // setPaymentMethod("");
      // setPaidAmount(0);
    } catch (error) {
      toast.error(error.response?.data?.message);
      console.error(error);
    }
  };

  if (
    clientsQuery.isLoading ||
    categoriesQuery.isLoading ||
    productsQuery.isLoading ||
    paymentMethodsQuery.isLoading ||
    loadingTax
  )
    return <Loader />;

  return (
    <div>
      {/* Top Navigation */}
      <div className="top-navigation">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="mb-0">
              <ShoppingCart size={32} className="mb-3" />
              نظام نقاط البيع المتطور
            </h4>
            <div className="d-flex">
              <button
                className="nav-btn d-flex align-items-center me-2"
                onClick={() => navigate("/")}
              >
                <Home size={16} className="me-1" />
                الرئيسية
              </button>

              <button
                className="nav-btn d-flex align-items-center me-2"
                onClick={() => navigate("/clients")}
              >
                <Users size={16} className="me-1" />
                العملاء
              </button>

              <button
                className="nav-btn d-flex align-items-center"
                onClick={() => navigate("/invoices")}
              >
                <FileText size={16} className="me-1" />
                الفواتير
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Container */}
      <div className="container-fluid pos-container">
        <div className="row h-100">
          {/* Left: Products & Search */}
          <div className="col-md-10">
            {/* Client Section */}
            <div className="client-section mb-3">
              <h6>
                <User /> العميل
              </h6>
              <div className="row">
                <div className="col-8">
                  <select
                    className="form-select form-select-sm"
                    value={selectedClient?.id || ""}
                    onChange={(e) => {
                      const client = clients.find(
                        (c) => c.id === parseInt(e.target.value)
                      );
                      setClient(client);
                    }}
                  >
                    <option value="">اختر عميل...</option>
                    {clients.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name} - {c.phone}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-4">
                  <button className="btn btn-sm btn-outline-primary w-100">
                    <Plus /> جديد
                  </button>
                </div>
              </div>
            </div>

            {/* Search */}
            <div className="mt-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="ابحث عن منتج بالاسم أو الباركود..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="input-group-text">
                  <i className="fas fa-search"></i>
                </span>
              </div>
            </div>

            {/* Categories Bar */}
            <div className="categories-bar">
              <div className="d-flex align-items-center flex-wrap">
                <h6 className="me-3 mb-0">
                  <i className="fas fa-tags ms-2"></i>الفئات:
                </h6>
                {categories.map((cat, index) => (
                  <div
                    key={index}
                    className={`category-chip ${
                      selectedCategory === cat.name ? "active" : ""
                    }`}
                    onClick={() => setCategory(cat)}
                  >
                    {cat.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Products Section */}
            <div className="products-section p-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5>
                  <i className="fas fa-box ms-2"></i>المنتجات
                </h5>
                <span className="badge bg-primary">
                  {filteredProducts().length} عنصر
                </span>
              </div>

              <div className="row g-3 wrap justify-content-center">
                {filteredProducts().length > 0 ? (
                  filteredProducts().map((product) => {
                    const cartItem = cart.find(
                      (item) => item.id === product.id
                    );
                    const quantity = cartItem ? cartItem.qty : 0;

                    return (
                      <div key={product.id} style={{ width: "250px" }}>
                        <div
                          className={`card product-card h-100 cursor-pointer ${
                            cartItem ? "border-primary" : ""
                          }`}
                          style={{ boxShadow: "1px 1px 5px #ccc" }}
                          onClick={() => addToCart(product)}
                        >
                          <div className="card-body text-center d-flex flex-column justify-content-center">
                            {product.image ? (
                              <img
                                src={product.image}
                                alt={product.name}
                                className="mb-2"
                                style={{
                                  width: "100%",
                                  height: "150px",
                                  objectFit: "cover",
                                }}
                              />
                            ) : (
                              <img
                                src={no_image}
                                alt={product.name}
                                className="mb-2"
                                style={{
                                  width: "100%",
                                  height: "150px",
                                  objectFit: "cover",
                                  margin: "0 auto",
                                }}
                              />
                            )}
                            <h6 className="card-title mb-2">{product.name}</h6>
                            <h6 className="card-title mb-2">{product.category.name}</h6>
                            <span
                              className="badge arabic-number"
                              style={{
                                backgroundColor: "rgb(9, 173, 206)",
                              }}
                            >
                              ر.س{(product.price ?? 0).toFixed(2)}
                            </span>
                            <span className="badge bg-secondary mt-2 arabic-number">
                              الكمية: {product.qty ?? "غير محددة"}
                            </span>

                            {cartItem && (
                              <div
                                className="quantity-controls mt-8"
                                style={{ justifyContent: "end" }}
                              >
                                <button
                                  className="btn btn-sm btn-outline-secondary"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeFromCart({ ...product, qty: -1 });
                                  }}
                                >
                                  <Minus size={16} />
                                </button>
                                <span className="mx-2 arabic-number">
                                  {quantity}
                                </span>
                                <button
                                  className="btn btn-sm btn-outline-secondary"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    addToCart(product);
                                  }}
                                >
                                  <Plus size={16} />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-center text-muted">
                    لا يوجد منتجات مطابقة
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right: Cart */}
          <div className="col-md-4 cart-section">
            <div className="cart-footer">
              <div className="total-section mb-3">
                <div className="total-section mb-3">
                  {/** حساب الضريبة */}
                  {(() => {
                    const subtotal = total() ?? 0;
                    const taxAmount = (subtotal * taxValue) / 100;
                    const totalAmount = subtotal + taxAmount;
                    return (
                      <>
                        <div className="d-flex justify-content-between mb-2">
                          <span className="arabic-number">
                            {subtotal.toFixed(2)} ج.م
                          </span>
                          <span>المجموع الفرعي:</span>
                        </div>

                        <div className="d-flex justify-content-between mb-2">
                          <span className="arabic-number">
                            {taxAmount.toFixed(2)} ج.م
                          </span>
                          <span>الضريبة ({taxValue}%) :</span>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                          <h5 className="text-primary arabic-number">
                            {totalAmount.toFixed(2)} ج.م
                          </h5>
                          <h5>الإجمالي:</h5>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>

              <div className="payment-section">
                <h6>
                  <MdPayment /> الدفع
                </h6>
                <div className="mb-3">
                  <label className="form-label">طريقة الدفع:</label>
                  <select
                    className="form-select form-select-sm"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  >
                    <option value="">اختر الطريقة...</option>
                    {paymentMethods.map((method) => (
                      <option key={method.id} value={method.id}>
                        {method.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">المبلغ المدفوع:</label>
                  <input
                    type="number"
                    className="form-control"
                    min="0"
                    value={(total() ?? 0).toFixed(2)}
                    onChange={(e) => setPaidAmount(parseFloat(e.target.value))}
                  />
                </div>
                <div className="d-grid gap-2">
                  <button className="btn btn-success" onClick={handlePayment}>
                    <i className="fas fa-check ms-2" />
                    معالجة الدفع
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={removeProductsCart}
                  >
                    <Trash /> مسح السلة
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
