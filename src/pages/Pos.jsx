"use client";

import React, { useState } from "react";
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
import no_image from "../../public/assets/no-image.jpg"
export default function POS() {
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
    removeItemCart,
    removeProductsCart,
  } = useCartStore();

  const [selectedProduct, setSelectedProduct] = useState(null);

  const clients = [
    { id: 1, name: "احمد رجب", phone: "0000" },
    { id: 2, name: "محمد خالد1", phone: "1111" },
    { id: 3, name: "عميل نقدي", phone: "111" },
    { id: 4, name: "عميل نقدي", phone: "01" },
    { id: 5, name: "عميل نقدي", phone: "011" },
    { id: 6, name: "عميل نقدي", phone: "166546" },
    { id: 7, name: "تجريبي", phone: "012012012" },
  ];
  const categories = ["الكل", "شوكولاتة", "حلوى"];
  const navigate = useNavigate();

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
                {categories.map((cat) => (
                  <div
                    key={cat}
                    className={`category-chip ${
                      selectedCategory === cat ? "active" : ""
                    }`}
                    onClick={() => setCategory(cat)}
                  >
                    {cat}
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
                          style={{boxShadow:"1px 1px 5px #ccc"}}
                          onClick={() => {
                            addToCart(product);
                            setSelectedProduct(product);
                          }}
                        >
                          <div className="card-body text-center d-flex flex-column justify-content-center">
                            {product.image ? (
                              <img
                                src={product.image}
                                alt={product.name}
                                className="mb-2"
                                style={{
                                  width: "50px",
                                  height: "50px",
                                  objectFit: "cover",
                                }}
                              />
                            ) : (
                              <img
                              src={no_image}
                              alt={product.name}
                              className="mb-2"
                              style={{
                                width: "100px",
                                height: "50px",
                                objectFit: "cover",
                                margin: "0 auto",

                              }}
                            />
                            )}
                            <h6 className="card-title mb-2">{product.name}</h6>
                            <span
                              className="badge arabic-number"
                              style={{ backgroundColor: "rgb(9, 173, 206)" }}
                            >
                              ر.س{product.price.toFixed(2)}
                            </span>
                            <span className="badge bg-secondary mt-2 arabic-number">
                              الكمية: {product.qty || "غير محددة"}
                            </span>

                            {/* Show quantity controls when product is in cart */}
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
            {/* Cart Items */}

            {/* Cart Footer ثابت */}
            <div className="cart-footer">
              {/* Total Section */}
              <div className="total-section mb-3">
                <div className="d-flex justify-content-between mb-2">
                  <span className="arabic-number">
                    {total().toFixed(2)} ج.م
                  </span>
                  <span>المجموع الفرعي:</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <h5 className="text-primary arabic-number">
                    {total().toFixed(2)} ج.م
                  </h5>
                  <h5>الإجمالي:</h5>
                </div>
              </div>

              {/* Payment Section */}
              <div className="payment-section">
                <h6>
                  <MdPayment /> الدفع
                </h6>
                <div className="mb-3">
                  <label className="form-label">طريقة الدفع:</label>
                  <select className="form-select form-select-sm">
                    <option value="">اختر الطريقة...</option>
                    <option value="1">نقدا</option>
                    <option value="2">تحويل بنكي</option>
                    <option value="3">شبكة</option>
                    <option value="4">قيمة غير محددة</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">المبلغ المدفوع:</label>
                  <input
                    type="number"
                    className="form-control"
                    step="0.01"
                    min="0"
                  />
                </div>
                <div className="d-grid gap-2">
                  <button className="btn btn-success" disabled>
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
