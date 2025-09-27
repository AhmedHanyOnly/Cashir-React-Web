import { Button, Table, Modal, Form } from "react-bootstrap";
import React, { useState } from "react";
import { FaTrash, FaEdit, FaPrint, FaFileExcel } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import "../../Style/Purchases.css";
import { usePurchases } from "../../hooks/usePurchases";
import { Loader } from "../../components/Loader";
import { toast } from "sonner";

export default function Purchases() {
  
  const { purchasesQuery, deleteMutation } = usePurchases();
  const [showDelete, setShowDelete] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const navigate = useNavigate();

  if (purchasesQuery.isLoading) return <Loader />;
  if (purchasesQuery.isError) return <p>حصل خطأ في تحميل البيانات</p>;

  const purchases = purchasesQuery.data.data || [];

  const handleShowDelete = (id) => {
    setDeletingId(id);
    setShowDelete(true);
  };

  const handleDelete = async () => {
    try {
      await deleteMutation.mutateAsync(deletingId);
      toast.success("تم حذف الفاتورة");
      setShowDelete(false);
    } catch(err) {
      toast.error(err.response?.data?.msg);
    }
  };

  return (
    <div className="secContainer">
      <div className="sechead">
        <h3 className="fw-bold">المشتريات</h3>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <Button
            onClick={() => navigate("/accounting")}
            variant="info"
            style={{ color: "white" }}
          >
            المحاسبة
          </Button>
          <Button
            onClick={() => navigate("/expenses")}
            variant="info"
            style={{ color: "white" }}
          >
            المصروفات
          </Button>
        </div>
      </div>

      <div className="contentContainer container py-4">
        <div className="d-flex justify-content-between align-items-center mb-1">
          <NavLink to="create">
            <Button className="addbtn">إضافة فاتورة شراء +</Button>
          </NavLink>
          <div className="d-flex gap-2">
            <Button
              variant="outline-warning"
              size="sm"
              id="btn-prt-content"
              className="ms-2 d-flex align-items-center gap-1"
            >
              <FaPrint />
              <span>طباعه</span>
            </Button>
            <Button
              variant="outline-info"
              size="sm"
              id="export-btn"
              className="d-flex align-items-center gap-1"
            >
              <FaFileExcel />
              <span>تصدير Excel</span>
            </Button>
          </div>
        </div>

        {/* جدول المشتريات */}
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>الكود</th>
              <th>المورد</th>
              <th>المبلغ</th>
              <th>الضريبة</th>
              <th>الإجمالي</th>
              <th>تاريخ الإنشاء</th>
              <th>التحكم</th>
            </tr>
          </thead>
          <tbody>
            {purchases.length > 0 ? (
              purchases.map((p, i) => (
                <tr key={p.id}>
                  <td>{i + 1}</td>
                  <td>{p.code}</td>
                  <td>{p.supplier?.name}</td>
                  <td>{p.amount}</td>
                  <td>{p.tax}</td>
                  <td>{p.total}</td>
                  <td>{p.date}</td>
                  <td>
                    <Button
                      size="sm"
                      variant="info"
                      className="ms-2"
                      onClick={() => navigate(`/purchases/edit/${p.id}`, {state: p})}
                    >
                      <FaEdit color="white" size="1rem" />
                    </Button>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => handleShowDelete(p.id)}
                    >
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center">
                  لا توجد مشتريات
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>

      {/* مودال الحذف */}
      <Modal show={showDelete} onHide={() => setShowDelete(false)} centered>
        <Modal.Header >
          <Modal.Title>تأكيد الحذف</Modal.Title>
        </Modal.Header>
        <Modal.Body>هل أنت متأكد من حذف هذه الفاتورة؟</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDelete(false)}>
            إلغاء
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
