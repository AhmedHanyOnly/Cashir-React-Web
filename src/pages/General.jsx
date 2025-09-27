import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import { FaAngleLeft, FaPrint, FaFileExcel } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function General() {
  const navigate = useNavigate();
  return (
    <section className="main-section home section-mobile">
      <div className="container-fluid">
        <section>
          {/* Header */}
          <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-10">
            <h4 className="main-heading mb-0">التقارير</h4>
            <a
              onClick={() => navigate("/reports")}
              style={{ cursor: "pointer", marginRight: "72rem" }}
              className="btn btn-secondary btn-sm px-3 w-fit d-block ms-auto backbtn"
            >
              <FaAngleLeft />
            </a>
          </div>

          {/* Content */}
          <div className="Financial-report-content box-content">
            <div className="d-flex flex-wrap justify-content-between align-items-end mb-3 gap-3">
              {/* Date Filters */}
              <div className="form-group mb-2 mb-md-0 gap-3">
                <Row className="mt-3">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label className="small-label mb-2">من</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label className="small-label mb-2">الي</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                  </Col>
                </Row>
              </div>

              {/* Buttons */}
              <div className="about-finan-report d-flex flex-wrap align-items-start justify-content-between ">
                <div className="left-holder d-flex justify-content-center justify-content-sm-start m-auto m-sm-0">
                  <Button
                    variant="outline-warning"
                    size="sm"
                    className="ms-2"
                    id="btn-prt-content"
                  >
                    <FaPrint className="me-1" />
                    <span>طباعة</span>
                  </Button>
                  <Button variant="outline-info" size="sm" id="export-btn">
                    <FaFileExcel className="me-1" />
                    <span>تصدير Excel</span>
                  </Button>
                </div>
              </div>
            </div>

            <div id="prt-content">
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
                      alt="شعار"
                      width="70"
                    />
                  </div>
                </div>
              </div> */}

              {/* Table */}
              <div className="table-responsive">
                <Table
                  bordered
                  className="main-table table-print"
                  id="data-table"
                >
                  <thead>
                    <tr>
                      <th colSpan="2" className="text-center">
                        القسم
                      </th>
                      <th colSpan="2">الكمية</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="2" className="text-center">
                        إجمالي الفواتير - نقدا
                      </td>
                      <td colSpan="2">412.77</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="text-center">
                        إجمالي الفواتير - تحويل بنكي
                      </td>
                      <td colSpan="2">130.52</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="text-center">
                        اجمالي الفواتير المسددة
                      </td>
                      <td colSpan="2">482.74</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="text-center">
                        اجمالي الفواتير الغير مسددة
                      </td>
                      <td colSpan="2">0</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="text-center">
                        اجمالي الضريبة
                      </td>
                      <td colSpan="2">80.99</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="text-center">
                        اجمالي المصروفات
                      </td>
                      <td colSpan="2">600</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="text-center">
                        اجمالي المشتريات
                      </td>
                      <td colSpan="2">5077</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className="text-center">
                        ارباح المنتجات
                      </td>
                      <td colSpan="2">29.8</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
