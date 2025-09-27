import { Button, Table, Modal, Form, InputGroup } from "react-bootstrap";
import "../Style/expenses_category.css";
import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaTrash,
  FaEdit,
  FaEye,
  FaPrint,
  FaFileExcel,
  FaAngleLeft,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function ExpenseCategories() {
  const [showAddEdit, setShowAddEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [search, setSearch] = useState("");
  const [suppliers, setsuppliers] = useState([
    {
      id: 1,
      name: "قسم مصروفات فرعى",
      exccedof: "مصروفات رئيسية",
    },
    {
      id: 1,
      name: "قسم مصروفات فرعى",
      exccedof: "مصروفات رئيسية",
    },
  ]);

  // فتح المودالات
  const handleOpenAdd = () => setShowAddEdit(true);
  const handleCloseAdd = () => setShowAddEdit(false);

  const handleOpenDelete = () => setShowDelete(true);
  const handleCloseDelete = () => setShowDelete(false);
  return (
    <div className="secContainer">
      <div className="sechead">
        <h3 className="fw-bold">أقسام المصروفات</h3>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Button className="addbtn" onClick={handleOpenAdd}>
          إضافة مصروف +
        </Button>
        <NavLink to="/expenses">
          <Button
            href="https://cashir26.const-tech.in/ar/expenses"
            className="addbtn"
          >
            <FaAngleLeft />
          </Button>
        </NavLink>
      </div>
      <div className="contentContainer container py-4">
        {/* جدول المصروفات */}
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>الاسم</th>
              <th>فرعي من </th>
              <th>التحكم</th>
            </tr>
          </thead>
          <tbody>
            {suppliers
              .filter((c) => c.name.includes(search))
              .map((c, i) => (
                <tr className="tablebodytext" key={c.id}>
                  <td>{i + 1}</td>
                  <td>{c.name}</td>
                  <td>{c.exccedof}</td>
                  <td>
                    <Button
                      size="sm"
                      variant="info"
                      className="ms-2"
                      onClick={handleOpenAdd}
                    >
                      <FaEdit color="white" size="1rem" />
                    </Button>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={handleOpenDelete}
                    >
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>

      {/* المودال (إضافة / تعديل) */}
      <Modal
        show={showAddEdit}
        onHide={handleCloseAdd}
        size="lg"
        centered
        dir="rtl"
      >
        <Modal.Header closeButton>
          <Modal.Title className="fs-5">إضافة قسم</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row row-gap-24">
            <div className="col-sm-6">
              <Form.Group className="mb-3">
                <Form.Label className="small-label">الاسم</Form.Label>
                <Form.Control type="text" placeholder="أدخل الاسم" />
              </Form.Group>
            </div>

            <div className="col-sm-6">
              <Form.Group className="mb-3">
                <Form.Label className="small-label">فرعي من</Form.Label>
                <Form.Select>
                  <option value="">رئيسي</option>
                  <option value="1">مصروفات رئيسية</option>
                  <option value="2">قسم مصروفات فرعى</option>
                </Form.Select>
              </Form.Group>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAdd}>
            إلغاء
          </Button>
          <Button variant="primary" onClick={handleCloseAdd}>
            حفظ
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
