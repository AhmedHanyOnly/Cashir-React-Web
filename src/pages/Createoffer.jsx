import { Container, Button, Form, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Createoffer() {
  const navigate = useNavigate();
  return (
    <section className="main-section home section-mobile">
      <Container fluid>
        <section className="content-section">
          <Container>
            <section className="main-section">
              <Container>
                {/* العنوان */}
                <h4 className="main-heading mb-4">أضف عرض</h4>

                {/* البوكس الأبيض */}
                <div className="section-content bg-white p-4 shadow rounded-3">
                  {/* زر العروض */}
                  <div className="mb-4">
                    <Button
                      variant="primary"
                      size="sm"
                      className="px-5 trans-btn"
                      onClick={() => navigate("/offers")}
                    >
                      العروض
                    </Button>
                  </div>

                  {/* النموذج */}
                  <div className="d-flex flex-column flex-xl-row">
                    {/* البداية */}
                    <div className="collect-info d-flex flex-column ms-lg-2">
                      <Form.Label className="small-label mb-2">
                        البداية
                      </Form.Label>
                      <Form.Control type="date" className="mb-2 mb-lg-0" />
                    </div>

                    {/* النهاية */}
                    <div className="collect-info d-flex flex-column ms-lg-2">
                      <Form.Label className="small-label mb-2">
                        النهاية
                      </Form.Label>
                      <Form.Control type="date" className="mb-2 mb-lg-0" />
                    </div>

                    {/* المنتج */}
                    <div className="collect-info d-flex flex-column ms-lg-2">
                      <Form.Label className="small-label mb-2">منتج</Form.Label>
                      <Form.Select className="main-select mb-2 mb-lg-0 w-100">
                        <option value="">المنتجات</option>
                        <option value="8">حلوى نوغا بالزبدة78ج</option>
                        <option value="9">مايك اكي سكاكر 60ج</option>
                        <option value="10">موكسي علك سبيرمنت 13ج</option>
                      </Form.Select>
                    </div>

                    {/* ظهور نسبة الخصم */}
                    <div className="collect-info d-flex flex-column ms-lg-2">
                      <Form.Label className="small-label mb-2">
                        ظهور نسبة الخصم
                      </Form.Label>
                      <Form.Select className="main-select mb-2 mb-lg-0 w-100">
                        <option value="">ظهور نسبة الخصم</option>
                        <option value="1">نعم</option>
                        <option value="0">لا</option>
                      </Form.Select>
                    </div>

                    {/* النسبة */}
                    <div className="collect-info d-flex flex-column ms-lg-2">
                      <Form.Label className="small-label mb-2">
                        النسبة
                      </Form.Label>
                      <Form.Control
                        type="number"
                        min="0"
                        className="mb-2 mb-lg-0"
                      />
                    </div>

                    {/* زر الحفظ */}
                    <div className="btn-holder d-flex align-items-end mt-2 mt-lg-0 mb-lg-1">
                      <Button
                        variant="success"
                        size="sm"
                        className="px-5"
                        onClick={() => {
                          // هنا تضيف وظيفة الحفظ
                        }}
                      >
                        حفظ
                      </Button>
                    </div>
                  </div>
                </div>
              </Container>
            </section>
          </Container>
        </section>
      </Container>
    </section>
  );
}
