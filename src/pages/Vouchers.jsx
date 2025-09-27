import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Modal,
  Table,
} from "react-bootstrap";
import {
  FaAngleRight,
  FaArrowLeft,
  FaPlus,
  FaPrint,
  FaEye,
  FaPenToSquare,
  FaTrashCan,
} from "react-icons/fa6";

import "../Style/vouchers.css";
import { useNavigate } from "react-router-dom";

export default function Vouchers() {
  const [showDelete, setShowDelete] = useState(false);
  const navigate = useNavigate();
  return (
    <section className="voucherssec">
      <Container fluid>
        <section className="main-section">
          <Container>
            <div className="p-3 shadow rounded-3 bg-white">
              {/* Header */}
              <div className="d-flex justify-content-between mb-3 align-items-center">
                <div className="d-flex align-items-center gap-2">
                  <h4 className="main-heading mt-4">القيود اليومية</h4>
                </div>
                <div className="btn-holders d-flex align-items-center justify-content-end gap-2">
                  <Button
                    onClick={() => navigate("/accounting")}
                    style={{ cursor: "pointer" }}
                    size="sm"
                    variant="secondary"
                  >
                    <FaArrowLeft className="me-1" /> العودة
                  </Button>
                  <Button
                    onClick={() => navigate("create")}
                    style={{ cursor: "pointer" }}
                    className="addbtn"
                  >
                    <FaPlus className="me-1" /> إضافة قيد
                  </Button>
                  <Button
                    id="btn-prt-content"
                    size="sm"
                    variant="warning"
                    className="py-1"
                  >
                    <FaPrint color="white" />
                  </Button>
                </div>
              </div>

              {/* Filters */}
              <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3 mb-3">
                <Col xs={12}>
                  <div className="info-data">
                    <Form.Label className="small-label" htmlFor="search">
                      بحث عن اسم القيد
                    </Form.Label>
                    <Form.Control type="text" id="search" />
                  </div>
                </Col>
                <Col>
                  <div className="info-data">
                    <Form.Label className="small-label" htmlFor="voucher_no">
                      رقم القيد
                    </Form.Label>
                    <Form.Control type="text" id="voucher_no" />
                  </div>
                </Col>
                <Col>
                  <div className="info-data">
                    <Form.Label className="small-label" htmlFor="duration-from">
                      من
                    </Form.Label>
                    <Form.Control type="date" id="duration-from" />
                  </div>
                </Col>
                <Col>
                  <div className="info-data">
                    <Form.Label className="small-label" htmlFor="duration-to">
                      الى
                    </Form.Label>
                    <Form.Control type="date" id="duration-to" />
                  </div>
                </Col>
              </Row>

              {/* Table */}
              <div id="prt-content" className="table-responsive">
                <Table className="maintable">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>الاسم</th>
                      <th>مدين</th>
                      <th>دائن</th>
                      <th>التاريخ</th>
                      <th className="not-print">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>12</td>
                      <td>
                        سداد فاتورة مبيعات رقم 11 (نقدا) من العميل تجريبي بمبلغ
                        2
                      </td>
                      <td>2</td>
                      <td>2</td>
                      <td>2025-09-21</td>
                      <td className="not-print d-flex gap-2">
                        <Button
                          size="sm"
                          className="btn-purple"
                          style={{ backgroundColor: "#8e44ad" }}
                          href="/vouchers/12/show"
                        >
                          <FaEye />
                        </Button>
                        <Button
                          size="sm"
                          variant="info"
                          href="/vouchers/12/edit"
                        >
                          <FaPenToSquare color="white" />
                        </Button>
                        <Button
                          size="sm"
                          variant="danger"
                          onClick={() => setShowDelete(true)}
                        >
                          <FaTrashCan />
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </Container>
        </section>
      </Container>

      {/* Delete Modal */}
      <Modal show={showDelete} onHide={() => setShowDelete(false)}>
        <Modal.Header closeButton>
          <Modal.Title>حذف سند القيد</Modal.Title>
        </Modal.Header>
        <Modal.Body>هل أنت متأكد من حذف سند القيد؟</Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            size="sm"
            onClick={() => setShowDelete(false)}
          >
            لا
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              console.log("Deleted id: 12");
              setShowDelete(false);
            }}
          >
            نعم
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}
