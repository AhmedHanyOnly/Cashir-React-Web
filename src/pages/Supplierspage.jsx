import React, { useState } from "react";
import { Button, Table, Modal, Form, InputGroup } from "react-bootstrap";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useSuppliers } from "../hooks/useSuppliers";
import "../Style/table.css";
import { Loader } from "../components/Loader";
import { toast } from "sonner";
import { Pagination } from "../components/Pagination";
import { usePaymentMethods } from "../hooks/usePaymentMethods";

export function SuppliersPage() {
  const [page, setPage] = useState(1);
  const { suppliersQuery, createMutation, updateMutation, deleteMutation } =
    useSuppliers(page);
  const { PaymentMethodsQuery } = usePaymentMethods();
  const [showAddEdit, setShowAddEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    tax_number: "",
    commercial_register_number: "",
    email: "",
    phone: "",
    notes: "",
    default_payment_method_id: [],
  });

  const handleOpenAdd = (supplier = null) => {
    setSelectedSupplier(supplier);
    if (supplier) {
      setFormData({
        name: supplier.name || "",
        code: supplier.code || "",
        tax_number: supplier.tax_number || "",
        commercial_register_number: supplier.commercial_register_number || "",
        email: supplier.email || "",
        phone: supplier.phone || "",
        notes: supplier.notes || "",
        default_payment_method_id: supplier.default_payment_method?.id || [],
      });
    } else {
      setFormData({
        name: "",
        code: "",
        tax_number: "",
        commercial_register_number: "",
        email: "",
        phone: "",
        notes: "",
        default_payment_method_id: [],
      });
    }
    setShowAddEdit(true);
  };

  const handleCloseAdd = () => setShowAddEdit(false);

  const handleDelete = (supplier) => {
    setSelectedSupplier(supplier);
    setShowDelete(true);
  };

  const handleCloseDelete = () => setShowDelete(false);

  const confirmDelete = () => {
    deleteMutation.mutate(selectedSupplier.id, {
      onSuccess: () => {
        toast.success("تم حذف المورد بنجاح");
        setShowDelete(false);
      },
      onError: () => toast.error("حدث خطأ أثناء الحذف"),
    });
  };

  const handleSave = () => {
    if (selectedSupplier) {
      updateMutation.mutate(
        { id: selectedSupplier.id, data: formData },
        {
          onSuccess: () => toast.success("تم تعديل المورد بنجاح"),
          onError: (error) =>
            toast.error("حدث خطأ أثناء التعديل: " + error.message),
        }
      );
    } else {
      createMutation.mutate(formData, {
        onSuccess: () => toast.success("تم إضافة المورد بنجاح"),
        onError: (error) =>
          toast.error("حدث خطأ أثناء الإضافة: " + error.response?.data?.msg),
      });
    }
    setShowAddEdit(false);
  };

  const suppliersData = Array.isArray(suppliersQuery.data?.data)
    ? suppliersQuery.data.data
    : [];
  const PaymentMethodsData = Array.isArray(PaymentMethodsQuery.data?.data)
    ? PaymentMethodsQuery.data.data
    : [];
  const pagination = suppliersQuery.data?.pagination || {};

  const filteredSuppliers = suppliersData.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.phone.includes(search)
  );

  if (suppliersQuery.isLoading) return <Loader />;
  if (suppliersQuery.isError)
    return <p>حدث خطأ: {suppliersQuery.error?.message}</p>;

  return (
    <div className="secContainer">
      <h3 className="main-heading">الموردين</h3>
      <div className="contentContainer container py-4">
        <div className="d-flex justify-content-between align-items-center mb-1">
          <InputGroup style={{ width: "30%" }} className="mb-3">
            <Form.Control
              placeholder="ابحث بالاسم أو الجوال..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
          <Button className="addbtn" onClick={() => handleOpenAdd()}>
            إضافة مورد +
          </Button>
        </div>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>الاسم</th>
              <th>الكود</th>
              <th>الجوال</th>
              <th>البريد</th>
              <th>رقم الضريبة</th>
              <th>السجل التجاري</th>
              <th>ملاحظات</th>
              <th>طرق الدفع</th>
              <th>التحكم</th>
            </tr>
          </thead>
          <tbody>
            {filteredSuppliers.length > 0 ? (
              filteredSuppliers.map((s, i) => (
                <tr key={s.id}>
                  <td>
                    {i +
                      1 +
                      (pagination.per_page || 0) *
                        ((pagination.current_page || 1) - 1)}
                  </td>
                  <td>{s.name}</td>
                  <td>{s.code}</td>
                  <td>{s.phone}</td>
                  <td>{s.email}</td>
                  <td>{s.tax_number}</td>
                  <td>{s.commercial_register_number}</td>
                  <td>{s.notes}</td>
                  <td>{s.default_payment_method?.name || "-"}</td>
                  <td>
                    <Button
                      size="sm"
                      variant="info"
                      className="ms-2"
                      onClick={() => handleOpenAdd(s)}
                    >
                      <FaEdit color="white" size="1rem" />
                    </Button>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => handleDelete(s)}
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

        <Pagination
          currentPage={pagination.current_page}
          lastPage={pagination.last_page}
          onPageChange={(page) => setPage(page)}
        />

        {/* مودال إضافة/تعديل */}
        <Modal show={showAddEdit} onHide={handleCloseAdd} size="lg" centered>
          <Modal.Header>
            <Modal.Title>
              {selectedSupplier ? "تعديل مورد" : "إضافة مورد"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <div className="row">
                <div className="col-md-4">
                  <Form.Group className="mb-3">
                    <Form.Label>الاسم</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </Form.Group>
                </div>
                <div className="col-md-4">
                  <Form.Group className="mb-3">
                    <Form.Label>الكود</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.code}
                      onChange={(e) =>
                        setFormData({ ...formData, code: e.target.value })
                      }
                    />
                  </Form.Group>
                </div>
                <div className="col-md-4">
                  <Form.Group className="mb-3">
                    <Form.Label>الجوال</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </Form.Group>
                </div>

                <div className="col-md-4">
                  <Form.Group className="mb-3">
                    <Form.Label>البريد الإلكتروني</Form.Label>
                    <Form.Control
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </Form.Group>
                </div>

                <div className="col-md-4">
                  <Form.Group className="mb-3">
                    <Form.Label>رقم الضريبة</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.tax_number}
                      onChange={(e) =>
                        setFormData({ ...formData, tax_number: e.target.value })
                      }
                    />
                  </Form.Group>
                </div>

                <div className="col-md-4">
                  <Form.Group className="mb-3">
                    <Form.Label>السجل التجاري</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.commercial_register_number}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          commercial_register_number: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </div>

                <div className="col-md-4">
                  <Form.Group className="mb-3">
                    <Form.Label>ملاحظات</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                    />
                  </Form.Group>
                </div>

                <div className="col-md-4">
                  <Form.Group className="mb-3">
                    <Form.Label>طرق الدفع</Form.Label>
                    <Form.Select
                      value={formData.default_payment_method_id}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          default_payment_method_id: parseInt(e.target.value),
                        })
                      }
                    >
                      <option value="">اختر طريقة الدفع</option>
                      {PaymentMethodsData.map((method) => (
                        <option key={method.id} value={method.id}>
                          {method.name}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAdd}>
              إلغاء
            </Button>
            <Button variant="primary" onClick={handleSave}>
              حفظ
            </Button>
          </Modal.Footer>
        </Modal>

        {/* مودال الحذف */}
        <Modal show={showDelete} onHide={handleCloseDelete} centered>
          <Modal.Header>
            <Modal.Title>تأكيد الحذف</Modal.Title>
          </Modal.Header>
          <Modal.Body>هل أنت متأكد أنك تريد حذف هذا المورد؟</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseDelete}>
              إلغاء
            </Button>
            <Button variant="danger" onClick={confirmDelete}>
              حذف
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
