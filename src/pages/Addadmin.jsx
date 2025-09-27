import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../Style/admins.css";
import { useNavigate } from "react-router-dom";

export default function Addadmin() {
  const navigate = useNavigate();
  return (
    <section className="adminsSec">
      <Container fluid>
        <div>
          {/* العنوان والرجوع */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="main-heading mb-0">الموظفين</h4>
            <a
              onClick={() => navigate("/admins")}
              style={{ cursor: "pointer" }}
              className="btn-main-sm"
            >
              رجوع
            </a>
          </div>

          {/* الفورم */}
          <div className="box-content">
            <Form
              action="https://cashir26.const-tech.in/ar/admins"
              method="post"
            >
              <input
                type="hidden"
                name="_token"
                value="7nvs0C1ANjTKFoZDlCfJRfqwTDhrHGtqh7pvcw8t"
              />

              <Row className="row-gap-24 mb-4">
                <Col sm={4}>
                  <Form.Label className="small-label">الاسم</Form.Label>
                  <Form.Control type="text" placeholder="الاسم" name="name" />
                </Col>

                <Col sm={4}>
                  <Form.Label className="small-label">
                    البريد الالكتروني
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="admin@admin.com"
                    name="email"
                  />
                </Col>

                <Col sm={4}>
                  <Form.Label className="small-label">كلمة المرور</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="*****"
                    name="password"
                  />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col sm={4}>
                  <Form.Label className="small-label">الجوال</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="الجوال"
                    name="phone"
                    maxLength={11}
                    minLength={11}
                    onKeyPress={(e) => {
                      if (e.charCode < 48 || e.charCode > 57) {
                        e.preventDefault();
                      }
                    }}
                  />
                </Col>

                <Col sm={4}>
                  <Form.Label className="small-label">القسم</Form.Label>
                  <Form.Select
                    className="main-select w-100"
                    name="user_category_id"
                  >
                    <option value="">اختر</option>
                    <option value="1">الإدارة</option>
                    <option value="2">موظف</option>
                    <option value="3">محاسب</option>
                    <option value="4">استقبال</option>
                  </Form.Select>
                </Col>

                <Col sm={4}>
                  <Form.Label className="small-label">درج النقدية</Form.Label>
                  <Form.Select
                    className="main-select w-100"
                    name="payment_method_id"
                  >
                    <option value="">اختر</option>
                    <option value="1">نقدا</option>
                    <option value="2">تحويل بنكي</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row>
                <Col sm={4}>
                  <Form.Label className="small-label">الفرع</Form.Label>
                  <Form.Select className="main-select w-100" name="branch_id">
                    <option value="">اختر</option>
                    <option value="1">فرع 1</option>
                    <option value="2">فرع 2</option>
                    <option value="3">فرع 3</option>
                  </Form.Select>
                </Col>

                <Col md={4}>
                  <Form.Group>
                    <Form.Label className="small-label">الصلاحيات</Form.Label>
                    <Form.Select
                      className="main-select w-100 mb-3"
                      name="role_id"
                      id="id_h5_multi"
                    >
                      <option value="1">كل الصلاحيات</option>
                      <option value="2">اداره</option>
                      <option value="3">مبيعات</option>
                      <option value="4">ليس له صلاحيه</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              {/* الأزرار */}
              <div className="form-actions">
                <Button
                  type="submit"
                  className="btn btn-primary btn-sm px-4 mt-3 sw-100"
                >
                  حفظ
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
}
