import { useState } from "react";
import { Container, Row, Col, Table, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import "../Style/vouchers.css";

export default function AddVoucher() {
  const [rows, setRows] = useState([
    { account_id: "", debit: "", credit: "", description: "" },
  ]);

  const addRow = () => {
    setRows([
      ...rows,
      { account_id: "", debit: "", credit: "", description: "" },
    ]);
  };

  const handleChange = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;
    setRows(updated);
  };

  const computeTotal = (type) => {
    return rows.reduce((sum, row) => sum + (parseFloat(row[type]) || 0), 0);
  };

  const handleSubmit = () => {
    console.log("Form Submitted:", rows);
  };

  return (
    <section className="voucherssec">
      <Container fluid>
        <section id="app" className="main-section">
          <Container>
            <h4 className="main-heading mb-4">إضافة سند قيد</h4>
            <div className="p-3 shadow rounded-3 bg-white">
              <Form>
                <Row className="g-3 mb-3">
                  <Col xs={12} md={3}>
                    <Form.Control
                      type="text"
                      placeholder="الشرح البيان"
                      onChange={(e) => console.log(e.target.value)}
                    />
                  </Col>
                  <Col xs={12} md={3}>
                    <Form.Control
                      type="date"
                      onChange={(e) => console.log(e.target.value)}
                    />
                  </Col>
                </Row>

                <div className="table-responsive">
                  <Table hover bordered className="table-inp">
                    <thead className="table-light">
                      <tr>
                        <th>مسلسل</th>
                        <th>التحكم</th>
                        <th>الحساب</th>
                        <th>مدين</th>
                        <th>دائن</th>
                        <th>الشرح</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td className="text-center">
                            <Button
                              variant="success"
                              size="sm"
                              onClick={addRow}
                              className="xs-btn-icon"
                            >
                              <FaPlus />
                            </Button>
                          </td>
                          <td style={{ width: "20%" }}>
                            <Form.Select
                              value={row.account_id}
                              onChange={(e) =>
                                handleChange(
                                  index,
                                  "account_id",
                                  e.target.value
                                )
                              }
                            >
                              <option value="">اختر</option>
                              <option value="1">الأصول</option>
                              <option value="2">الخصوم</option>
                              <option value="3">حقوق الملكية</option>
                              <option value="4">الإيرادات</option>
                              <option value="5">المصروفات</option>
                              <option value="6">الأصول المتداولة</option>
                              <option value="7">الأصول الثابتة</option>
                              <option value="8">الخصوم المتداولة</option>
                              <option value="9">الخصوم طويلة الأجل</option>
                              <option value="10">النقدية</option>
                              <option value="11">حسابات بنكية</option>
                              <option value="12">العملاء</option>
                              <option value="13">المخزون</option>
                              <option value="14">
                                ضريبة القيمة المضافة المدفوعة (مدخلات)
                              </option>
                              <option value="15">المباني و الاراضي</option>
                              <option value="16">الالات و المعدات</option>
                              <option value="17">سيارات و مركبات</option>
                              <option value="18">الموردون</option>
                              <option value="19">اوراق دفع</option>
                              <option value="20">
                                ضريبة القيمة المضافة المحصلة (مخرجات)
                              </option>
                              <option value="21">إيرادات المبيعات</option>
                              <option value="22">إيرادات أخرى</option>
                              <option value="24">تكلفة المشتريات</option>
                              <option value="25">مصروفات تشغيلية</option>
                              <option value="26">مصروفات إدارية</option>
                              <option value="27">مصروفات تسويق وبيع</option>
                              <option value="28">مصروفات تمويلية</option>
                              <option value="29">مشتريات بضائع</option>
                              <option value="31">رواتب وأجور</option>
                              <option value="32">إيجارات</option>
                              <option value="33">مرافق وكهرباء</option>
                              <option value="34">صيانة وإصلاح</option>
                              <option value="35">مصروفات مكتبية</option>
                              <option value="36">تأمين</option>
                              <option value="37">رسوم قانونية</option>
                              <option value="38">إعلانات</option>
                              <option value="39">ترويج مبيعات</option>
                              <option value="40">علاقات عامة</option>
                              <option value="41">
                                ضريبة القيمة المضافة على المشتريات
                              </option>
                              <option value="44">
                                ضريبة القيمة المضافة على المبيعات
                              </option>
                              <option value="45">
                                ضريبة القيمة المضافة المستحقة للجهات الضريبية
                              </option>
                              <option value="48">حساب البنك الرئيسي</option>
                              <option value="49">حساب بنك الاستثمار</option>
                              <option value="50">الصندوق الرئيسي</option>
                              <option value="52">أوراق قبض</option>
                              <option value="53">أثاث و تجهيزات</option>
                              <option value="54">
                                أجهزة كهربائية و الكترونية
                              </option>
                              <option value="55">معدات و أدوات مكتبية</option>
                              <option value="56">برمجيات</option>
                              <option value="57">مخزن رئيسي</option>
                              <option value="59">مصاريف مستحقة</option>
                              <option value="60">قروض طويلة</option>
                              <option value="61">ضرائب مستحقة</option>
                              <option value="62">رأس المال</option>
                              <option value="63">أرباح مرحلة</option>
                              <option value="64">احتياطي</option>
                              <option value="65">مردودات المبيعات</option>
                              <option value="66">خصم مسموح به</option>
                              <option value="67">مسموحات المبيعات</option>
                              <option value="68">مردودات المشتريات</option>
                              <option value="69">خصم مكتسب</option>
                              <option value="70">مسموحات المشتريات</option>
                              <option value="71">مصروفات المشتريات</option>
                              <option value="72">نقدا (طرق الدفع)</option>
                              <option value="73">تحويل بنكي (طرق الدفع)</option>
                              <option value="74">تجريبي - ذمم الموردين</option>
                              <option value="75">احمد رجب - ذمم العملاء</option>
                              <option value="76">
                                محمد خالد1 - ذمم العملاء
                              </option>
                              <option value="77">
                                عميل نقدي - ذمم العملاء
                              </option>
                              <option value="78">تجريبي - ذمم العملاء</option>
                            </Form.Select>
                          </td>
                          <td>
                            <Form.Control
                              type="text"
                              value={row.debit}
                              onChange={(e) =>
                                handleChange(index, "debit", e.target.value)
                              }
                            />
                          </td>
                          <td>
                            <Form.Control
                              type="text"
                              value={row.credit}
                              onChange={(e) =>
                                handleChange(index, "credit", e.target.value)
                              }
                            />
                          </td>
                          <td>
                            <Form.Control
                              type="text"
                              value={row.description}
                              onChange={(e) =>
                                handleChange(
                                  index,
                                  "description",
                                  e.target.value
                                )
                              }
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="3">الإجمالي</td>
                        <td className="bg-light-green">
                          {computeTotal("debit")}
                        </td>
                        <td className="bg-light-green">
                          {computeTotal("credit")}
                        </td>
                        <td></td>
                      </tr>
                    </tfoot>
                  </Table>
                </div>

                <div className="holder-btn text-center">
                  <Button
                    variant="primary"
                    size="sm"
                    className="px-3"
                    onClick={handleSubmit}
                  >
                    حفظ
                  </Button>
                </div>
              </Form>
            </div>
          </Container>
        </section>
      </Container>
    </section>
  );
}
