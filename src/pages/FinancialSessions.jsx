import { useState } from "react";
import { Container, Row, Col, Button, Form, Table } from "react-bootstrap";
import { FaAngleLeft, FaPrint, FaFileExcel } from "react-icons/fa";
import "../Style/FinancialSessions.css";
import { useNavigate } from "react-router-dom";

export default function FinancialSessions() {
  const [userId, setUserId] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const navigate = useNavigate();

  return (
    <section className="finanicalSec">
      <div className="container-fluid">
        <section className="main-section py-0 section-mobile">
          <Container>
            {/* Header */}
            <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-3">
              <h4 className="main-heading mb-0">متابعة الجلسات المالية</h4>
              <a
                onClick={() => navigate("/reports")}
                style={{ cursor: "pointer", marginRight: "54rem" }}
                className="btn btn-secondary btn-sm px-3 w-fit d-block ms-auto"
              >
                <FaAngleLeft />
              </a>
            </div>

            <div className="box-content">
              {/* Filters */}
              <div className="d-flex flex-wrap justify-content-between align-items-end mb-3 gap-2">
                <Row className="g-1">
                  <Col xs={12} md={4}>
                    <div className="inp-holder">
                      <Form.Label className="small-label mb-2">
                        الموظف
                      </Form.Label>
                      <Form.Select
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                      >
                        <option value="">الكل</option>
                        <option value="1">ادارة الموقع</option>
                        <option value="2">yasin</option>
                        <option value="3">sara</option>
                      </Form.Select>
                    </div>
                  </Col>
                  <Col xs={12} md={4} className="d-flex align-items-end">
                    <div className="inp-holder">
                      <Form.Label className="small-label">من</Form.Label>
                      <Form.Control
                        type="date"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                      />
                    </div>
                  </Col>
                  <Col xs={12} md={4} className="d-flex align-items-end">
                    <div className="inp-holder">
                      <Form.Label className="small-label">إلى</Form.Label>
                      <Form.Control
                        type="date"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>

                {/* Buttons */}
                <div className="option-holder d-flex align-items-center gap-1">
                  <Button
                    variant="outline-warning"
                    size="sm"
                    id="btn-prt-content"
                  >
                    <FaPrint />
                    <span className="ms-1">طباعة</span>
                  </Button>
                  <Button variant="outline-info" size="sm" id="export-btn">
                    <FaFileExcel />
                    <span className="ms-1">تصدير Excel</span>
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div id="prt-content">
                {/* Table */}
                <div className="table-responsive">
                  <Table
                    striped
                    bordered
                    hover
                    className="main-table table-print"
                  >
                    <thead>
                      <tr>
                        <th>الموظف</th>
                        <th>التاريخ</th>
                        <th>بداية الجلسة</th>
                        <th>نهاية الجلسة</th>
                        <th>مبلغ بداية الجلسة</th>
                        <th>نقدي</th>
                        <th>الضريبة</th>
                        <th>الإجمالي</th>
                        <th>مبلغ نهاية الجلسة</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>ادارة الموقع</td>
                        <td>2025-09-26</td>
                        <td>23:24 PM</td>
                        <td>لم يتم إنهاء الجلسة</td>
                        <td>1000</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>لم يتم إنهاء الجلسة</td>
                      </tr>
                      <tr>
                        <td>ادارة الموقع</td>
                        <td>2025-09-25</td>
                        <td>15:19 PM</td>
                        <td>لم يتم إنهاء الجلسة</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>لم يتم إنهاء الجلسة</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="4">الإجمالي</td>
                        <td>1120</td>
                        <td>410.77</td>
                        <td>62.39</td>
                        <td>410.77</td>
                        <td>0</td>
                      </tr>
                    </tfoot>
                  </Table>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </section>
  );
}
