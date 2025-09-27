import { Container, Row, Col, Form } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ClientReport() {
  const navigate = useNavigate();
  return (
    <section className="main-section home section-mobile">
      <div className="container-fluid">
        <section className="patinet-report">
          <Container>
            {/* Header */}
            <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-3">
              <h4 className="main-heading mb-0">تقرير العميل</h4>
              <a
                onClick={() => navigate("/reports")}
                style={{ cursor: "pointer", marginRight: "59rem" }}
                className="btn btn-secondary btn-sm px-3 w-fit d-block ms-auto"
              >
                <FaAngleLeft />
              </a>
            </div>

            {/* Content */}
            <div className="treasuryAccount-content bg-white p-4 rounded-2 shadow">
              <Row>
                <Col xs={12} md={4}>
                  <div className="box-info">
                    <Form.Label
                      htmlFor="client-id"
                      className="report-name mt-3 mb-2 small-label"
                    >
                      جوال العميل
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="client-id"
                      className="client-id"
                    />
                  </div>
                </Col>

                <Col xs={12} md={4}>
                  <div className="box-info">
                    <Form.Label
                      htmlFor="client-name"
                      className="report-name mt-3 mb-2 small-label"
                    >
                      اسم العميل
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="client-name"
                      className="client-name"
                      readOnly
                    />
                  </div>
                </Col>

                <Col xs={12} md={4}>
                  <div className="box-info">
                    <Form.Label
                      htmlFor="duration-from"
                      className="report-name mt-3 mb-2 small-label"
                    >
                      من
                    </Form.Label>
                    <Form.Control
                      type="date"
                      id="duration-from"
                      defaultValue="2022-07-12"
                    />
                  </div>
                </Col>

                <Col xs={12} md={4}>
                  <div className="box-info">
                    <Form.Label
                      htmlFor="duration-to"
                      className="report-name mt-3 mb-2 small-label"
                    >
                      الي
                    </Form.Label>
                    <Form.Control
                      type="date"
                      id="duration-to"
                      defaultValue="2024-03-03"
                    />
                  </div>
                </Col>

                <Col xs={12} md={4}>
                  <div className="box-info">
                    <Form.Label
                      htmlFor="pay-way"
                      className="report-name mt-3 mb-2 small-label"
                    >
                      طريقة الدفع
                    </Form.Label>
                    <Form.Select id="pay-way" className="main-select w-100">
                      <option value="">اختر</option>
                      <option value="cash">كاش</option>
                      <option value="card">شبكة</option>
                    </Form.Select>
                  </div>
                </Col>
              </Row>

              {/* Totals */}
              <Row className="mt-3">
                <Col xs={12} md={6}>
                  <div className="box-info">
                    <Form.Label
                      htmlFor="total-invoices"
                      className="report-name mt-3 mb-2 small-label"
                    >
                      اجمالي الفواتير
                    </Form.Label>
                    <Form.Control type="text" id="total-invoices" readOnly />
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="box-info">
                    <Form.Label
                      htmlFor="unpaid-invoices"
                      className="report-name mt-3 mb-2 small-label"
                    >
                      اجمالي الفواتير الغير مسددة
                    </Form.Label>
                    <Form.Control type="text" id="unpaid-invoices" readOnly />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </div>
    </section>
  );
}
