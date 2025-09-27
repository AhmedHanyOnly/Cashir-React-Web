import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaUserTie, FaBuffer, FaCreditCard } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import "../Style/settings.css";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { useSettings } from "../hooks/useSettings";
import { Loader } from "../components/Loader";
import { useNavigate } from "react-router-dom";

export function Settings() {
  const { data, isLoading, isError, mutation } = useSettings();
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      const formattedData = {};
      data.data.forEach((item) => {
        if (
          item.key.includes("tax_enabled") ||
          item.key.includes("preview_invoice") ||
          item.key.includes("free_invoices") ||
          item.key.includes("package_enabled") ||
          item.key.includes("price_include_tax") ||
          item.key.includes("package_balance_enabled")
        ) {
          formattedData[item.key] =
            item.value === true || item.value === "true" || item.value === 1;
        } else if (item.key === "logo" || item.key === "favicon") {
          // لو الصورة جاية فاضية خليها null
          formattedData[item.key] =
            typeof item.value === "string" && item.value.trim() !== ""
              ? item.value
              : null;
        } else {
          formattedData[item.key] = item.value;
        }
      });
      setFormData(formattedData);
    }
  }, [data]);

  if (isLoading) return <Loader />;
  if (isError) return <p>خطأ في جلب البيانات</p>;

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") setFormData({ ...formData, [name]: checked });
    else if (type === "file") setFormData({ ...formData, [name]: files[0] });
    else setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = new FormData();

    Object.keys(formData).forEach((key) => {
      const value = formData[key];

      if (value !== null && value !== undefined) {
        if (value instanceof File) {
          payload.append(key, value);
        } else if (typeof value !== "object") {
          payload.append(key, value);
        }
      }
    });
    for (let [key, value] of payload.entries()) {
      console.log(key, value);
    }
    mutation.mutate(payload, {
      onSuccess: () => toast.success("تم حفظ الإعدادات بنجاح"),
      onError: (error) =>
        toast.error("فشل حفظ الإعدادات: " + error?.message || "حدث خطأ"),
    });
  };

  return (
    <section className=" home section-mobile">
      <form onSubmit={handleSubmit}>
        <Row>
          <Col md={12}>
            <div className="bar-options d-flex flex-column flex-md-row align-md-items-center justify-content-between gap-3 mb-3">
              <h4 className="main-heading mb-0">الاعدادات</h4>

              <div className="btns-holder d-flex align-items-center justify-content-center flex-wrap gap-1 mx-auto">
                <a
                  onClick={() => navigate("/admins")}
                  style={{ cursor: "pointer" }}
                  className="btn-main-sm"
                >
                  الموظفين <FaUserTie />
                </a>
                <a
                  onClick={() => navigate("/departments")}
                  style={{ cursor: "pointer" }}
                  className="btn-main-sm"
                >
                  الاقسام <FaBuffer />
                </a>
                <a
                  onClick={() => navigate("/offers")}
                  style={{ cursor: "pointer" }}
                  className="btn-main-sm"
                >
                  العروض <FaBagShopping />
                </a>
                <a
                  onClick={() => navigate("/payment_methods")}
                  style={{ cursor: "pointer" }}
                  className="btn-main-sm"
                >
                  طرق الدفع <FaCreditCard />
                </a>
              </div>
            </div>

            <div className="box-content">
              <Row className="g-3">
                <Col md={3}>
                  <Form.Group className="mb-2">
                    <Form.Label>اسم النشاط التجاري</Form.Label>
                    <Form.Control
                      type="text"
                      name="business_name"
                      value={formData.business_name || ""}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={3}>
                  <Form.Group className="mb-2">
                    <Form.Label>
                      الرقم الضريبي{" "}
                      <span className="fw-bold text-danger fs-10px">
                        (يجب ان يتكون من 15 رقم)
                      </span>
                    </Form.Label>
                    <Form.Control
                      type="number"
                      name="tax_number"
                      value={formData.tax_number || ""}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={3}>
                  <Form.Group className="mb-2">
                    <Form.Label>العنوان</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      value={formData.address || ""}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={3}>
                  <Form.Group className="mb-2">
                    <Form.Label>رقم المبنى</Form.Label>
                    <Form.Control
                      type="text"
                      name="building_number"
                      value={formData.building_number || ""}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={3}>
                  <Form.Group className="mb-2">
                    <Form.Label>الشارع</Form.Label>
                    <Form.Control
                      type="text"
                      name="street"
                      value={formData.street || ""}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={3}>
                  <Form.Group className="mb-2">
                    <Form.Label>الجوال</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      value={formData.phone || ""}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={3}>
                  <Form.Group className="mb-2">
                    <Form.Label>راس المال</Form.Label>
                    <Form.Control
                      type="number"
                      name="capital"
                      value={formData.capital || ""}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={3}>
                  <Form.Group className="mb-2">
                    <Form.Label>الضريبة</Form.Label>
                    <Form.Control
                      type="number"
                      name="tax"
                      value={formData.tax || ""}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={3}>
                  <Form.Group className="mb-2">
                    <Form.Label>صورة الشعار</Form.Label>

                    {formData.logo && typeof formData.logo === "string" && (
                      <div className="mb-2">
                        <img
                          src={formData.logo} // رابط الصورة من API
                          alt="Logo"
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "contain",
                            border: "1px solid #ccc",
                            padding: "2px",
                          }}
                        />
                      </div>
                    )}

                    <Form.Control
                      type="file"
                      name="logo"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={3}>
                  <Form.Group className="mb-2">
                    <Form.Label>صورة ايقونة المتصفح</Form.Label>

                    {formData.favicon &&
                      typeof formData.favicon === "string" && (
                        <div className="mb-2">
                          <img
                            src={formData.favicon}
                            alt="Favicon"
                            style={{
                              width: "40px",
                              height: "40px",
                              objectFit: "contain",
                              border: "1px solid #ccc",
                              padding: "2px",
                            }}
                          />
                        </div>
                      )}

                    <Form.Control
                      type="file"
                      name="favicon"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* Checkboxes */}
              <Row className="g-3 mt-3">
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>
                      تفعيل الضريبة
                      <small className="text-danger fs-10px d-block">
                        يتم احتساب الضريبة تلقائياً
                      </small>
                    </Form.Label>
                    <Form.Check
                      type="checkbox"
                      name="tax_enabled"
                      checked={!!formData.tax_enabled}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group>
                    <Form.Label>معاينة الفاتورة بعد الإضافة</Form.Label>
                    <Form.Check
                      type="checkbox"
                      name="preview_invoice"
                      checked={formData.preview_invoice || false}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group>
                    <Form.Label>الفواتير المجانية</Form.Label>
                    <Form.Check
                      type="checkbox"
                      name="free_invoices"
                      checked={formData.free_invoices || false}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* مجموعة تفعيل الباقة */}
              <Row className="g-3 mt-3">
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>تفعيل الباقة</Form.Label>
                    <Form.Check
                      type="checkbox"
                      name="package_enabled"
                      checked={formData.package_enabled || false}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group>
                    <Form.Label>
                      السعر شامل الضريبة
                      <small className="text-danger fs-10px d-block">
                        مبلغ الضريبة سيحتسب من اجمالي مبلغ المنتج
                      </small>
                    </Form.Label>
                    <Form.Check
                      type="checkbox"
                      name="price_include_tax"
                      checked={formData.price_include_tax || false}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group>
                    <Form.Label>تفعيل رصيد الباقة</Form.Label>
                    <Form.Check
                      type="checkbox"
                      name="package_balance_enabled"
                      checked={formData.package_balance_enabled || false}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* مبلغ الفاتورة والعملات */}
              <Row className="g-3 mt-3">
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>نسبة الضريبة</Form.Label>
                    <Form.Control
                      type="number"
                      name="tax"
                      disabled={!formData.tax_enabled}
                      value={formData.tax || 0}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>مبلغ الفاتورة المجانية</Form.Label>
                    <Form.Control
                      type="number"
                      name="free_invoice_amount"
                      value={formData.free_invoice_amount || 0}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group>
                    <Form.Label>العملة الافتراضية</Form.Label>
                    <Form.Select
                      name="default_currency"
                      value={formData.default_currency || "USD"}
                      onChange={handleChange}
                    >
                      <option value="">اختر العملة</option>
                      <option value="USD">$</option>
                      <option value="EUR">€</option>
                      <option value="JPY">¥</option>
                      <option value="GBP">£</option>
                      <option value="AUD">A$</option>
                      <option value="CAD">C$</option>
                      <option value="CHF">CHF</option>
                      <option value="CNY">¥</option>
                      <option value="SEK">kr</option>
                      <option value="NZD">NZ$</option>
                      <option value="MXN">$</option>
                      <option value="SGD">S$</option>
                      <option value="HKD">HK$</option>
                      <option value="NOK">kr</option>
                      <option value="KRW">₩</option>
                      <option value="TRY">₺</option>
                      <option value="INR">₹</option>
                      <option value="BRL">R$</option>
                      <option value="ZAR">R</option>
                      <option value="RUB">₽</option>
                      <option value="SAR">ر . س</option>
                      <option value="EGP">£</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group>
                    <Form.Label>طريقة الدفع الافتراضية</Form.Label>
                    <Form.Select
                      name="default_payment"
                      value={formData.default_payment || ""}
                      onChange={handleChange}
                    >
                      <option value="">اختر</option>
                      <option value="cash">نقدي</option>
                      <option value="not_cash">غير نقدي</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Button
                type="submit"
                className="btn btn-primary mt-4 mx-auto btn-sm px-4 sw-100"
              >
                {mutation.isLoading ? "جاري الحفظ..." : "حفظ"}
              </Button>
            </div>
          </Col>
        </Row>
      </form>
    </section>
  );
}
