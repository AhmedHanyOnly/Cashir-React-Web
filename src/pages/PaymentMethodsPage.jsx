import { useState } from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";
import { FaTrash, FaEdit } from "react-icons/fa";
import { usePaymentMethods } from "../hooks/usePaymentMethods";
import { toast } from "sonner";
import { Loader } from "../components/Loader";

export function PaymentMethodsPage() {
  const {
    PaymentMethodsQuery,
    createMutation,
    updateMutation,
    deleteMutation,
  } = usePaymentMethods();

  const [showForm, setShowForm] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [editingMethod, setEditingMethod] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    is_cash: false,
    is_active: true,
    is_default: false,
  });

  if (PaymentMethodsQuery.isLoading) return <Loader />;
  if (PaymentMethodsQuery.isError) return <p>حدث خطأ أثناء تحميل طرق الدفع</p>;

  const data = PaymentMethodsQuery.data.data || [];

  const handleShowForm = (method = null) => {
    setEditingMethod(method);
    setFormData(
      method
        ? {
            name: method.name,
            type: method.type,
            is_cash: method.is_cash,
            is_active: method.is_active ?? true,
            is_default: method.is_default ?? false,
          }
        : {
            name: "",
            type: "",
            is_cash: false,
            is_active: true,
            is_default: false,
          }
    );
    setShowForm(true);
  };

  const handleSave = async () => {
    try {
      const payload = {
        name: formData.name,
        type: formData.type,
        is_cash: formData.is_cash,
        is_active: formData.is_active,
        is_default: formData.is_default,
      };

      if (editingMethod) {
        await updateMutation.mutateAsync({
          id: editingMethod.id,
          data: payload,
        });
        toast.success("تم تعديل طريقة الدفع بنجاح");
      } else {
        await createMutation.mutateAsync(payload);
        toast.success("تمت إضافة طريقة دفع جديدة");
      }
      setShowForm(false);
    } catch (error) {
      toast.error(error.response?.data?.msg || "حدث خطأ");
    }
  };

  const handleShowDelete = (id) => {
    setDeletingId(id);
    setShowDelete(true);
  };

  const handleDelete = async () => {
    try {
      await deleteMutation.mutateAsync(deletingId);
      toast.success("تم حذف طريقة الدفع");
      setShowDelete(false);
    } catch {
      toast.error("حصل خطأ أثناء الحذف");
    }
  };

  return (
    <div className="">
      <h3 className="main-heading">طرق الدفع</h3>

      <div className="contentContainer container py-4">
        <div className="d-flex justify-content-end mb-3">
          <Button
            className="addbtn btn btn-primary"
            onClick={() => handleShowForm()}
          >
            إضافة طريقة دفع
          </Button>
        </div>
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>الاسم</th>
              <th>النوع</th>
              <th>كاش؟</th>
              <th>افتراضي؟</th>
              <th>الحالة</th>
              <th>إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((method) => (
                <tr key={method.id}>
                  <td>{method.name}</td>
                  <td>{method.type}</td>
                  <td>{method.is_cash ? "نعم" : "لا"}</td>
                  <td>{method.is_default ? "نعم" : "لا"}</td>
                  <td>{method.is_active ? "مفعل" : "غير مفعل"}</td>
                  <td>
                    <Button
                      size="sm"
                      variant="info"
                      onClick={() => handleShowForm(method)}
                      className="me-2"
                    >
                      <FaEdit color="white" size="1rem" />
                    </Button>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => handleShowDelete(method.id)}
                    >
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center">
                  لا توجد طرق دفع
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>

      {/* Form Modal */}
      <Modal show={showForm} onHide={() => setShowForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editingMethod ? "تعديل طريقة دفع" : "إضافة طريقة دفع"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>الاسم</Form.Label>
              <Form.Control
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>النوع</Form.Label>
              <Form.Select
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
              >
                <option value="">اختر النوع</option>
                <option value="cash">كاش</option>
                <option value="bank">حساب بنكي</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="كاش"
                checked={formData.is_cash}
                onChange={(e) =>
                  setFormData({ ...formData, is_cash: e.target.checked })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="افتراضي"
                checked={formData.is_default}
                onChange={(e) =>
                  setFormData({ ...formData, is_default: e.target.checked })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowForm(false)}>
            إلغاء
          </Button>
          <Button variant="primary" onClick={handleSave}>
            {editingMethod ? "تعديل" : "إضافة"}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Modal */}
      <Modal show={showDelete} onHide={() => setShowDelete(false)}>
        <Modal.Header closeButton>
          <Modal.Title>تأكيد الحذف</Modal.Title>
        </Modal.Header>
        <Modal.Body>هل أنت متأكد من حذف طريقة الدفع؟</Modal.Body>
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
