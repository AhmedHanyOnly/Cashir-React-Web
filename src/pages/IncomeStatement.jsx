import { Container, Row, Col, Button, Form, Table } from "react-bootstrap";
import { FaAngleRight, FaPrint, FaFileExcel } from "react-icons/fa";
import "../Style/IncomeStatement.css";

export default function IncomeStatement() {
  return (
    <section className="IncomeStatementSec">
      <Container fluid>
        <section className="ClidocReport main-section">
          <Container>
            {/* Header */}
            <div className="d-flex mb-3 gap-3 align-items-center">
              <h4 className="main-heading m-0">قائمة الدخل</h4>
            </div>

            {/* Content */}
            <div className="Cli&doc-report-content bg-white p-4 rounded-2 shadow">
              {/* Filters */}
              <div className="d-flex align-items-end justify-content-between mb-2">
                <div className="d-flex gap-2">
                  <div className="box-info">
                    <Form.Label htmlFor="from" className="small-label">
                      من
                    </Form.Label>
                    <Form.Control type="date" id="from" />
                  </div>
                  <div className="box-info">
                    <Form.Label htmlFor="to" className="small-label">
                      الى
                    </Form.Label>
                    <Form.Control type="date" id="to" />
                  </div>
                  <div className="box-info">
                    <Form.Label htmlFor="level" className="small-label">
                      المستوى
                    </Form.Label>
                    <Form.Select id="level">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </Form.Select>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="left-holder d-flex justify-content-end mb-2">
                <div className="mx-2 d-flex align-items-center gap-2">
                  <span>اخفاء الحسابات الصفرية</span>
                  <Form.Check type="checkbox" />
                </div>

                <Button
                  size="sm"
                  variant="outline-warning"
                  className="ms-2 d-flex align-items-center gap-1"
                  id="btn-prt-content"
                >
                  <FaPrint />
                  <span>طباعة</span>
                </Button>

                <Button
                  size="sm"
                  variant="outline-info"
                  className="d-flex align-items-center gap-1"
                  id="export-btn"
                >
                  <FaFileExcel />
                  <span>تصدير Excel</span>
                </Button>
              </div>

              {/* Report Content */}
              <div id="prt-content" className="table-print">
                {/* <div className="box-header-invoice">
                  <Row>
                    <Col xs={12}>
                      <p className="text-center">كاشير</p>
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <small className="mb-1 d-block">
                        الرقم الضريبي: 123123
                      </small>
                      <small className="mb-1 d-block">
                        العنوان: عنوان الشركه - اسم شارع - 100
                      </small>
                      <small className="mb-1 d-block">
                        الهاتف: +966 554 913915
                      </small>
                    </div>
                    <div className="text-center col-md-4 d-flex align-items-center justify-content-center">
                      <img
                        src="https://cashir26.const-tech.in/uploads/settings/1.jpg"
                        alt="logo"
                        width="70"
                      />
                    </div>
                  </div>
                </div> */}

                <div className="table-responsive">
                  {/* Table 1 */}
                  <Table bordered className="mt-5" id="data-table">
                    <thead>
                      <tr>
                        <th>رقم الحساب</th>
                        <th>اسم الحساب</th>
                        <th>الرصيد</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td className="level-1">الإيرادات</td>
                        <td>73.50</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="level-1">المصروفات</td>
                        <td>-26.00</td>
                      </tr>
                    </tbody>
                  </Table>

                  {/* Table 2 */}
                  <Table bordered className="mt-5">
                    <thead>
                      <tr>
                        <th>البند</th>
                        <th>المبلغ</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="fw-bold">إجمالي الإيرادات</td>
                        <td className="fw-bold">73.50</td>
                      </tr>
                      <tr>
                        <td className="fw-bold">إجمالي المصروفات</td>
                        <td className="fw-bold">0.00</td>
                      </tr>
                      <tr>
                        <td className="fw-bold">صافي الربح</td>
                        <td className="fw-bold">73.50</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </Container>
    </section>
  );
}
