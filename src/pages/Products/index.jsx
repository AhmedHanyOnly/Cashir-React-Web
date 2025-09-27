import React, { useState } from "react";
import { Button, Table, Form } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts"; // الhook الجديد
import { Loader } from "../../components/Loader";
import { toast } from "sonner";
import { PrinterCheck } from "lucide-react";

export function Products() {
  const navigate = useNavigate();
  const { productsQuery, deleteMutation } = useProducts();

  const [showDelete, setShowDelete] = useState(false);
  const [deleteProduct, setDeleteProduct] = useState(null);

  const [searchName, setSearchName] = useState("");
  const [searchBarcode, setSearchBarcode] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  if (productsQuery.isLoading) return <Loader />;
  if (productsQuery.isError)
    return <p>حدث خطأ: {productsQuery.error?.message}</p>;

  const products = productsQuery.data?.data || [];
  console.log(products);
  // فلترة المنتجات
  const filteredProducts = products.filter((p) => {
    const matchesName = searchName
      ? p.name.toLowerCase().includes(searchName.toLowerCase())
      : true;

    const matchesBarcode = searchBarcode
      ? p.barcode?.includes(searchBarcode)
      : true;

    const matchesCategory = filterCategory
      ? p.category?.name === filterCategory
      : true;

    return matchesName && matchesBarcode && matchesCategory;
  });

  const handleOpenAdd = () => navigate("/products/create");
  const handleOpenEdit = (product) =>
    navigate(`/products/edit/${product.id}`, { state: product });

  const handleOpenDelete = (product) => {
    setDeleteProduct(product);
    setShowDelete(true);
  };
  const handleCloseDelete = () => setShowDelete(false);

  const handleDeleteConfirm = () => {
    deleteMutation.mutate(deleteProduct.id, {
      onSuccess: () => {
        toast.success("تم حذف المنتج بنجاح");
        setShowDelete(false);
      },
      onError: () => toast.error("حدث خطأ أثناء الحذف"),
    });
  };

  // استخراج كل الأقسام للفلتر
  const categories = [
    ...new Set(products.map((p) => p.category?.name).filter(Boolean)),
  ];


  return (
    <div className="secContainer">
      <h3 className="main-heading">المنتجات</h3>

      <div className="contentContainer container py-4">
        <div className="d-flex align-items-center gap-3 justify-content-between flex-wrap mb-3">
          <div className="d-flex align-items-center gap-2">
            <Form.Select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="main-select"
            >
              <option value="">بحث بالقسم</option>
              {categories.map((c, idx) => (
                <option key={idx} value={c}>
                  {c}
                </option>
              ))}
            </Form.Select>

            <div
              className="d-flex align-items-center gap-2"
              style={{ margin: "0 150px" }}
            >
              <span
                className="text-white bg-primary p-1 rounded"
                style={{ width: "170px" }}
              >
                منتجات منتهية الكمية : 8056
              </span>
              <span
                className="text-white bg-warning p-1 rounded"
                style={{ width: "170px" }}
              >
                منتجات منتهية الصلاحية : 0
              </span>
            </div>
          </div>

          <div className="d-flex gap-2 grow">
            <Form.Control
              type="text"
              placeholder="بحث بالاسم"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
            <Form.Control
              type="text"
              placeholder="بحث بالباركود"
              value={searchBarcode}
              onChange={(e) => setSearchBarcode(e.target.value)}
            />
          </div>
        </div>
        <div className="d-flex gap-2 mb-3">
          <button className="btn btn-warning text-white">
            {" "}
            <PrinterCheck size={20} />
          </button>
          <button
            className="btn btn-success text-white"
            style={{ fontSize: "12px" }}
          >
            تصدير اكسيل
          </button>
          <button
            className="btn text-white"
            style={{ fontSize: "12px", background: "#8e44ad" }}
          >
            صانع ملصقات
          </button>
          <button
            className="btn btn-primary text-white"
            style={{ fontSize: "12px" }}
          >
            الوحدات
          </button>
          <button
            className="btn btn-info text-white"
            onClick={() => navigate("/products/create")}
            style={{ fontSize: "12px" }}
          >
            اضف منتج جديد +
          </button>
        </div>
        {/* جدول المنتجات */}
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>صورة المنتج</th>
              <th>اسم المنتج</th>
              <th>القسم</th>
              <th>السعر</th>
              <th>تفعيل الكمية</th>
              <th>الكمية</th>
              <th>باركود</th>
              <th>الوحدة</th>
              <th>التحكم</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length ? (
              filteredProducts.map((p) => (
                <tr key={p.id}>
                  <td>
                    <img
                      src={p.image ?? "/assets/no-image.jpg"}
                      alt={p.name}
                      style={{ width: 100, objectFit: "cover" }}
                    />
                  </td>
                  <td>{p.name}</td>
                  <td>{p.category?.name}</td>
                  <td>{p.price}</td>
                  <td>
                    <Form.Check
                      type="switch"
                      checked={p.allow_quantity}
                      readOnly
                    />
                  </td>
                  <td>{p.quantity}</td>
                  <td>{p.barcode}</td>
                  <td>{p.unit?.name}</td>
                  <td>
                    <Button
                      size="sm"
                      variant="info"
                      className="ms-2"
                      onClick={() => handleOpenEdit(p)}
                    >
                      <FaEdit color="white" size="1rem" />
                    </Button>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => handleOpenDelete(p)}
                    >
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={10} className="text-center">
                  لا توجد بيانات
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>

      {/* مودال حذف */}
      {showDelete && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">تأكيد الحذف</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseDelete}
                ></button>
              </div>
              <div className="modal-body">
                هل أنت متأكد أنك تريد حذف المنتج{" "}
                <strong>{deleteProduct?.name}</strong> ؟
              </div>
              <div className="modal-footer">
                <Button variant="secondary" onClick={handleCloseDelete}>
                  إلغاء
                </Button>
                <Button variant="danger" onClick={handleDeleteConfirm}>
                  حذف
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
