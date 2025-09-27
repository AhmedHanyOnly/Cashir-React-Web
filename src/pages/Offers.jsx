import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { FaPrint } from "react-icons/fa";
import "../Style/offers.css";
import { useNavigate } from "react-router-dom";

export default function Offers() {
  const navigate = useNavigate();
  return (
    <section className="main-section home section-mobile">
      <Container fluid>
        <section className="content-section">
          <Container>
            {/* العنوان والرجوع */}
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h4 className="main-heading mb-0">العروض</h4>
              <Button
                variant="secondary"
                size="sm"
                className="px-4"
                onClick={() => navigate("/settings")}
              >
                رجوع
              </Button>
            </div>

            <div className="section-content bg-white rounded-3 p-4 shadow">
              {/* الأزرار */}
              <div className="btn-holder-option d-flex align-items-center justify-content-between mb-2">
                <Button
                  variant="success"
                  size="sm"
                  onClick={() => navigate("create")}
                >
                  أضف عرض
                </Button>

                <Button
                  id="btn-prt-content"
                  className="print-btn"
                  variant="warning"
                  size="sm"
                >
                  <FaPrint color="white" />
                </Button>
              </div>

              {/* المحتوى */}
              <div className="table-responsive" id="prt-content">
                {/* الجدول */}
                <Table className="main-table" striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>اسم المنتج</th>
                      <th>البداية</th>
                      <th>النهاية</th>
                      <th>النسبة</th>
                      <th>ظهور نسبة الخصم</th>
                      <th className="text-center not-print">التحكم</th>
                    </tr>
                  </thead>
                  <tbody>{/* البيانات هتيجي هنا ديناميك */}</tbody>
                </Table>
              </div>
            </div>
          </Container>
        </section>
      </Container>
    </section>
  );
}
