import { Container, Row, Col, Button, Table, Form } from "react-bootstrap";
import {
  FaAngleLeft,
  FaEye,
  FaPrint,
  FaFileExcel,
  FaMoneyBillTransfer,
  FaMoneyBillTrendUp,
} from "react-icons/fa6";
import "../Style/salesreport.css";
import { useNavigate } from "react-router-dom";

export default function SalesReport() {
  const navigate = useNavigate();
  return (
    <section className="main-section home section-mobile">
      <div className="container-fluid">
        <section className="sales-report">
          <Container>
            {/* Header */}
            <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-3">
              <h4 className="main-heading mb-0">تقرير المبيعات</h4>
              <Button
                onClick={() => navigate("/reports")}
                variant="secondary"
                size="sm"
                className="px-3 w-fit d-block ms-auto backBtn"
              >
                <FaAngleLeft />
              </Button>
            </div>

            {/* States */}
            <div className="blocks-data">
              <Row className="g-3 mb-4">
                {/* Box 1 */}
                <Col md={6} lg={3}>
                  <div className="states-box box-1">
                    <div className="data-icon" style={{ color: "#03a9f4" }}>
                      <span className="num-1" style={{ color: "#03a9f4" }}>
                        13
                      </span>
                      <FaMoneyBillTransfer
                        className="icon-1"
                        style={{ fontSize: "2.5rem", color: "#03a9f4" }}
                      />
                    </div>
                    <div className="text">
                      <a href="#">الفواتير المسددة</a>
                    </div>
                    <div className="prog-box">
                      <div className="prog" style={{ background: "#e3f2fd" }}>
                        <span
                          className="prog-1"
                          style={{
                            display: "block",
                            width: "70%",
                            height: "10px",
                            background: "#03a9f4",
                            borderRadius: "5px",
                          }}
                        ></span>
                      </div>
                    </div>
                  </div>
                </Col>

                {/* Box 2 */}
                <Col md={6} lg={3}>
                  <div className="states-box box-2">
                    <div className="data-icon" style={{ color: "#ff835c" }}>
                      <span className="num-2" style={{ color: "#ff835c" }}>
                        0
                      </span>
                      <FaMoneyBillTrendUp
                        className="icon-2"
                        style={{ fontSize: "2.5rem", color: "#ff835c" }}
                      />
                    </div>
                    <div className="text">
                      <a href="#">كل الفواتير الغير مسددة</a>
                    </div>
                    <div className="prog-box">
                      <div className="prog" style={{ background: "#ffe7e0" }}>
                        <span
                          className="prog-2"
                          style={{
                            display: "block",
                            width: "30%",
                            height: "10px",
                            background: "#ff835c",
                            borderRadius: "5px",
                          }}
                        ></span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            {/* Financial Report */}
            <div className="Financial-report-content bg-white p-4 rounded-2 shadow">
              <div className="about-finan-report d-flex flex-wrap align-items-start justify-content-between">
                {/* Form Filters */}
                <form className="right-holder d-flex flex-wrap flex-sm-nowrap flex-sm-row align-items-center mb-2 mb-lg-0 justify-content-center">
                  <div className="duration-from d-flex align-items-center justify-content-center me-2">
                    <label htmlFor="date-from" className="fild-name ms-2">
                      من
                    </label>
                    <Form.Control
                      type="date"
                      id="date-from"
                      className="date-from mb-2 mb-sm-0"
                    />
                  </div>
                  <div className="duration-to d-flex align-items-center justify-content-center me-2">
                    <label htmlFor="date-to" className="fild-name ms-2">
                      إلى
                    </label>
                    <Form.Control
                      type="date"
                      id="date-to"
                      className="date-to mb-3 mb-sm-0"
                    />
                  </div>
                  <Button
                    type="button"
                    className="sec-btn-gre w-75 mb-2 mb-sm-0 me-sm-2 me-0 w-50"
                  >
                    عرض <FaEye />
                  </Button>
                </form>

                {/* Action Buttons */}
                <div className="left-holder d-flex justify-content-center justify-content-sm-start m-auto m-sm-0">
                  <Button
                    variant="outline-warning"
                    size="sm"
                    className="ms-2"
                    id="btn-prt-content"
                  >
                    <FaPrint /> طباعه
                  </Button>
                  <Button variant="outline-info" size="sm" id="export-btn">
                    <FaFileExcel /> تصدير Excel
                  </Button>
                </div>
              </div>

              {/* Table */}
              <div id="prt-content" className="table-print">
                <div className="table-responsive mt-3 sw-100">
                  <Table className="main-table" id="data-table" bordered hover>
                    <thead>
                      <tr>
                        <th className="text-center">القسم</th>
                        <th>المبلغ</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">اجمالي الفواتير المسددة</td>
                        <td>482.74</td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          اجمالي الفواتير الغير مسددة
                        </td>
                        <td>0.00</td>
                      </tr>
                      <tr>
                        <td className="text-center">اجمالي الضريبة</td>
                        <td>80.99</td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          اجمالي الفواتير المسددة - نقدا
                        </td>
                        <td>412.77</td>
                      </tr>
                      <tr>
                        <td className="text-center">
                          اجمالي الفواتير المسددة - تحويل بنكي
                        </td>
                        <td>130.52</td>
                      </tr>
                    </tbody>
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
