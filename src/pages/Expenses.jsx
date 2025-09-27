import { Button, Table, Modal, Form, InputGroup } from "react-bootstrap";
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
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import "../Style/expenses.css";

export default function Expenses() {
  const [showAddEdit, setShowAddEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [suppliers, setsuppliers] = useState([
    {
      id: 1,
      name: "أحمد محمد",
      type: "دائن",
      amount: "5550",
      section: "مصروفات رئيسية",
    },
    {
      id: 1,
      name: "أحمد محمد",
      type: "دائن",
      amount: "5550",
      section: "مصروفات رئيسية",
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
        <h3 className="fw-bold">المصروفات</h3>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <Button
            onClick={() => navigate("/accounting")}
            variant="info"
            style={{ color: "white" }}
          >
            المحاسبة
          </Button>

          <Button
            onClick={() => navigate("/purchases")}
            variant="info"
            style={{ color: "white" }}
          >
            المشتريات
          </Button>
        </div>
      </div>

      <div className="contentContainer container py-4">
        <div className="d-flex justify-content-between align-items-center mb-1">
          <div className="d-flex">
            <NavLink to="/expense_categories">
              <Button
                as="a"
                href="https://cashir26.const-tech.in/ar/expense_categories"
                variant="primary"
                size="sm"
                className="ms-2"
              >
                أقسام المصروفات
              </Button>
            </NavLink>
            <Button
              variant="outline-warning"
              size="sm"
              id="btn-prt-content"
              className="ms-2"
            >
              <FaPrint className="ms-2" />
              طباعه
            </Button>

            <Button variant="outline-info" size="sm" id="export-btn">
              <FaFileExcel className="ms-2" />
              تصدير Excel
            </Button>
          </div>

          <Button className="addbtn" onClick={handleOpenAdd}>
            إضافة مصروف +
          </Button>
        </div>

        {/* جدول المصروفات */}
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>الاسم</th>
              <th>القسم </th>
              <th>المبلغ </th>
              <th>النوع</th>
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
                  <td>{c.section}</td>
                  <td>{c.amount}</td>
                  <td>{c.type}</td>
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

      {/* مودال الإضافة والتعديل */}
      <Modal
        show={showAddEdit}
        onHide={handleCloseAdd}
        size="lg"
        centered
        dir="rtl"
      >
        <Modal.Header closeButton>
          <Modal.Title className="flex-grow-1 text-center fs-5">
            إضافة فرع
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-sm-6">
              <Form.Group>
                <Form.Label>القسم الرئيسي</Form.Label>
                <Form.Select>
                  <option value="">اختر</option>
                  <option value="1">مصروفات رئيسية</option>
                </Form.Select>
              </Form.Group>
            </div>

            <div className="col-sm-6">
              <Form.Group>
                <Form.Label>القسم الفرعي</Form.Label>
                <Form.Select>
                  <option value="">اختر</option>
                </Form.Select>
              </Form.Group>
            </div>

            <div className="col-sm-6">
              <Form.Group>
                <Form.Label>إلى حساب</Form.Label>
                <Form.Select>
                  <option value="">اختر حساب</option>
                  <option value="1">الأصول</option>
                  <option value="2">الخصوم</option>
                  <option value="3">حقوق الملكية</option>
                  <option value="4">الإيرادات</option>
                  <option value="5">المصروفات</option>
                  <option value="10">النقدية</option>
                  <option value="11">حسابات بنكية</option>
                  <option value="31">رواتب وأجور</option>
                  <option value="32">إيجارات</option>
                  <option value="33">مرافق وكهرباء</option>
                  <option value="34">صيانة وإصلاح</option>
                </Form.Select>
              </Form.Group>
            </div>

            <div className="col-sm-6">
              <Form.Group>
                <Form.Label>الاسم</Form.Label>
                <Form.Control type="text" placeholder="الاسم" />
              </Form.Group>
            </div>

            <div className="col-sm-6">
              <Form.Group>
                <Form.Label>المبلغ</Form.Label>
                <Form.Control type="text" placeholder="المبلغ" />
              </Form.Group>
            </div>

            <div className="col-sm-6">
              <Form.Group>
                <Form.Label>النوع</Form.Label>
                <Form.Select defaultValue="debit">
                  <option value="">اختر</option>
                  <option value="debit">site.debit</option>
                  <option value="credit">site.credit</option>
                </Form.Select>
              </Form.Group>
            </div>
          </div>

          <Table bordered hover responsive className="mt-3 text-center">
            <thead>
              <tr>
                <th colSpan="3">المدفوعات</th>
              </tr>
              <tr>
                <th>#</th>
                <th>طريقة الدفع</th>
                <th>المبلغ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <Form.Select>
                    <option value="">اختر</option>
                    <option value="1">نقدا</option>
                    <option value="3">شبكة</option>
                  </Form.Select>
                </td>
                <td>
                  <Form.Control type="text" disabled />
                </td>
              </tr>
            </tbody>
          </Table>
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
