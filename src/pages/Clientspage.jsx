import React, { useState } from "react";
import { Button, Table, Modal, Form, InputGroup } from "react-bootstrap";
import { FaTrash, FaEdit, FaEye } from "react-icons/fa";
import { useClients } from "../hooks/useClients";
import "../Style/table.css";
import { Loader } from "../components/Loader";
import { toast } from "sonner";
import { Pagination } from "../components/Pagination";

export function ClientsPage() {
  const [page, setPage] = useState(1);
  const { clientsQuery, createMutation, updateMutation, deleteMutation } =
    useClients(page);

  const [showAddEdit, setShowAddEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedClient, setSelectedClient] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    tax_no: "",
  });

  const handleOpenAdd = (client = null) => {
    setSelectedClient(client);
    if (client) {
      setFormData({
        name: client.name || "",
        phone: client.phone || "",
        email: client.email || "",
        address: client.address || "",
        tax_no: client.tax_no || "",
      });
    } else {
      setFormData({ name: "", phone: "", email: "", address: "", tax_no: "" });
    }
    setShowAddEdit(true);
  };
  const handleCloseAdd = () => setShowAddEdit(false);

  const handleDelete = (client) => {
    setSelectedClient(client);
    setShowDelete(true);
  };
  const handleCloseDelete = () => setShowDelete(false);
  const confirmDelete = () => {
    deleteMutation.mutate(selectedClient.id, {
      onSuccess: () => {
        toast.success("تم حذف العميل بنجاح");
        setShowDelete(false);
      },
      onError: () => toast.error("حدث خطأ أثناء الحذف"),
    });
  };

  const handleSave = () => {
    if (selectedClient) {
      updateMutation.mutate(
        { id: selectedClient.id, data: formData },
        {
          onSuccess: () => toast.success("تم تعديل العميل بنجاح"),
          onError: (error) =>
            toast.error("حدث خطأ أثناء التعديل: " + error.message),
        }
      );
    } else {
      createMutation.mutate(formData, {
        onSuccess: () => toast.success("تم إضافة العميل بنجاح"),
        onError: (error) =>
          toast.error("حدث خطأ أثناء الإضافة: " + error.response?.data?.msg),
      });
    }
    setShowAddEdit(false);
  };

  const clientsData = Array.isArray(clientsQuery.data?.data)
    ? clientsQuery.data.data
    : [];
  const pagination = clientsQuery.data?.pagination || {};
  const filteredClients = clientsData.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search)
  );

  if (clientsQuery.isLoading) return <Loader />;
  if (clientsQuery.isError)
    return <p>حدث خطأ: {clientsQuery.error?.message}</p>;

  return (
    <div className="secContainer">
      <h3 className="main-heading">العملاء</h3>
      <div className="contentContainer container py-4">
        <div className="d-flex justify-content-between align-items-center mb-1">
          <InputGroup style={{ width: "30%" }} className="mb-3">
            <Form.Control
              placeholder="ابحث برقم الجوال  ....."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
          <Button className="addbtn" onClick={() => handleOpenAdd()}>
            إضافة عميل +
          </Button>
        </div>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>الاسم</th>
              <th>الجوال</th>
              <th>البريد</th>
              <th>العنوان</th>
              <th>رقم الضريبة</th>
              <th>الفواتير</th>
              <th>التحكم</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.length > 0 ? (
              filteredClients.map((c, i) => (
                <tr key={c.id}>
                  <td>
                    {i +
                      1 +
                      pagination.per_page * (pagination.current_page - 1)}
                  </td>
                  <td>{c.name}</td>
                  <td>{c.phone}</td>
                  <td>{c.email}</td>
                  <td>{c.address}</td>
                  <td>{c.tax_no}</td>
                  <td>
                    <Button
                      href={`https://cashir26.const-tech.in/ar/clients/invocie/${c.id}`}
                      size="sm"
                      style={{
                        backgroundColor: "#8e44ad",
                        borderColor: "#8e44ad",
                      }}
                    >
                      <FaEye className="ms-1" /> 1
                    </Button>
                  </td>
                  <td>
                    <Button
                      size="sm"
                      variant="info"
                      className="me-2"
                      onClick={() => handleOpenAdd(c)}
                    >
                      <FaEdit color="white" size="1rem" />
                    </Button>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => handleDelete(c)}
                    >
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center">
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
              {selectedClient ? "تعديل عميل" : "إضافة عميل"}
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
                    <Form.Label>رقم الجوال</Form.Label>
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
              </div>
              <div className="row">
                <div className="col-md-4">
                  <Form.Group className="mb-3">
                    <Form.Label>العنوان</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                    />
                  </Form.Group>
                </div>
                <div className="col-md-4">
                  <Form.Group className="mb-3">
                    <Form.Label>رقم الضريبة</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.tax_no}
                      onChange={(e) =>
                        setFormData({ ...formData, tax_no: e.target.value })
                      }
                    />
                  </Form.Group>
                </div>
                <div className="col-md-4"></div>
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

        {/* مودال حذف */}
        <Modal show={showDelete} onHide={handleCloseDelete} centered>
          <Modal.Header>
            <Modal.Title>تأكيد الحذف</Modal.Title>
          </Modal.Header>
          <Modal.Body>هل أنت متأكد أنك تريد حذف هذا العميل؟</Modal.Body>
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
