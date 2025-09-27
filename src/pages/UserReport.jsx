import { Container, Row, Col, Form } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function UserReport() {
  const navigate = useNavigate();
  return (
    <section className="main-section home section-mobile">
      <div className="container-fluid">
        <section className="patinet-report">
          <Container>
            {/* Header */}
            <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-3">
              <h4 className="main-heading mb-0">تقرير الموظف</h4>
              <a
                onClick={() => navigate("/reports")}
                style={{ cursor: "pointer", marginRight: "58rem" }}
                className="btn btn-secondary btn-sm px-3 w-fit d-block ms-auto"
              >
                <FaAngleLeft />
              </a>
            </div>

            {/* Content */}
            <div className="treasuryAccount-content box-content">
              <Row>
                <Col xs={12}>
                  <div className="box-info d-flex flex-column">
                    <Form.Label htmlFor="user-name" className="small-label">
                      اختر الموظف
                    </Form.Label>
                    <Form.Select id="user-name" className="main-select w-110px">
                      <option value="">اختر</option>
                      <option value="1">ادارة الموقع</option>
                      <option value="2">yasin</option>
                      <option value="3">sara</option>
                    </Form.Select>
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
              </Row>
            </div>
          </Container>
        </section>
      </div>
    </section>
  );
}
