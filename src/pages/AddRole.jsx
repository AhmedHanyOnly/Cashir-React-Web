import { Button, Form, Table } from "react-bootstrap";
import "../Style/Roles.css";
import { Bold } from "lucide-react";

export default function AddRole() {
  // 🔹 Helper function تولّد checkbox
  const renderCheckbox = (value, label) => (
    <div className="animated-checkbox mx-2" style={{ display: "inline-block" }}>
      <label className="m-0 d-flex align-items-center gap-1">
        <Form.Check
          type="checkbox"
          value={value}
          name="permissions[]"
          className="checkbox1"
        />
        <span className="label-text text-nowrap">{label}</span>
      </label>
    </div>
  );

  return (
    <div>
      <h4 className="main-heading">اضافه مجموعة جديده</h4>
      <div className="box-content">
        <Form
          style={{ fontSize: "15px" }}
          action="https://cashir26.const-tech.in/ar/roles"
          method="post"
        >
          <input
            type="hidden"
            name="_token"
            value="7nvs0C1ANjTKFoZDlCfJRfqwTDhrHGtqh7pvcw8t"
          />

          {/* الحقول فوق الجدول */}
          <div className="d-flex align-items-end gap-3 flex-wrap mb-3">
            <div className="inp-holder">
              <Form.Label>
                المجموعات<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                className="w-250px"
                placeholder="اسم المجموعة"
                name="name"
              />
            </div>

            <div
              style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              className="inp-holder mb-1"
            >
              <Form.Label>تحديد الكل</Form.Label>
              <Form.Check type="checkbox" name="select_all" id="selectall" />
            </div>
          </div>

          {/* جدول التصريحات */}
          <div className="table-holder">
            <Form.Label>
              التصريحات<span className="text-danger">*</span>
            </Form.Label>
            <div className="table-responsive">
              <Table className="table main-table">
                <tbody>
                  {/* المجموعات */}
                  <tr>
                    <td>المجموعات</td>
                    <td>{renderCheckbox("create_roles", "إنشاء المجموعات")}</td>
                    <td>{renderCheckbox("read_roles", "عرض المجموعات")}</td>
                    <td>{renderCheckbox("update_roles", "تحديث المجموعات")}</td>
                    <td>{renderCheckbox("delete_roles", "حذف المجموعات")}</td>
                  </tr>

                  {/* المشرفون */}
                  <tr>
                    <td>المشرفون</td>
                    <td>{renderCheckbox("create_admins", "إنشاء المشرفون")}</td>
                    <td>{renderCheckbox("read_admins", "عرض المشرفون")}</td>
                    <td>{renderCheckbox("update_admins", "تحديث المشرفون")}</td>
                    <td>{renderCheckbox("delete_admins", "حذف المشرفون")}</td>
                  </tr>

                  {/* العملاء */}
                  <tr>
                    <td>العملاء</td>
                    <td>{renderCheckbox("create_clients", "إنشاء العملاء")}</td>
                    <td>{renderCheckbox("read_clients", "عرض العملاء")}</td>
                    <td>{renderCheckbox("update_clients", "تحديث العملاء")}</td>
                    <td>{renderCheckbox("delete_clients", "حذف العملاء")}</td>
                  </tr>

                  {/* المنتجات */}
                  <tr>
                    <td>المنتجات</td>
                    <td>
                      {renderCheckbox("create_products", "إنشاء المنتجات")}
                    </td>
                    <td>{renderCheckbox("read_products", "عرض المنتجات")}</td>
                    <td>
                      {renderCheckbox("update_products", "تحديث المنتجات")}
                    </td>
                    <td>{renderCheckbox("delete_products", "حذف المنتجات")}</td>
                  </tr>

                  {/* الاعدادات */}
                  <tr>
                    <td>الاعدادات</td>
                    <td>{renderCheckbox("read_settings", "عرض الاعدادات")}</td>
                    <td>
                      {renderCheckbox("update_settings", "تحديث الاعدادات")}
                    </td>
                  </tr>

                  {/* الفروع */}
                  <tr>
                    <td>الفروع</td>
                    <td>{renderCheckbox("create_branches", "إنشاء الفروع")}</td>
                    <td>{renderCheckbox("read_branches", "عرض الفروع")}</td>
                    <td>{renderCheckbox("update_branches", "تحديث الفروع")}</td>
                    <td>{renderCheckbox("delete_branches", "حذف الفروع")}</td>
                  </tr>

                  {/* الأقسام */}
                  <tr>
                    <td>الأقسام</td>
                    <td>
                      {renderCheckbox("create_departments", "إنشاء الأقسام")}
                    </td>
                    <td>{renderCheckbox("read_departments", "عرض الأقسام")}</td>
                    <td>
                      {renderCheckbox("update_departments", "تحديث الأقسام")}
                    </td>
                    <td>
                      {renderCheckbox("delete_departments", "حذف الأقسام")}
                    </td>
                  </tr>

                  {/* المشتريات */}
                  <tr>
                    <td>المشتريات</td>
                    <td>
                      {renderCheckbox("create_purchases", "إنشاء المشتريات")}
                    </td>
                    <td>{renderCheckbox("read_purchases", "عرض المشتريات")}</td>
                    <td>
                      {renderCheckbox("update_purchases", "تحديث المشتريات")}
                    </td>
                    <td>
                      {renderCheckbox("delete_purchases", "حذف المشتريات")}
                    </td>
                  </tr>

                  {/* المبيعات */}
                  <tr>
                    <td>المبيعات</td>
                    <td>{renderCheckbox("create_sales", "إنشاء المبيعات")}</td>
                    <td>{renderCheckbox("read_sales", "عرض المبيعات")}</td>
                    <td>{renderCheckbox("update_sales", "تحديث المبيعات")}</td>
                    <td>{renderCheckbox("delete_sales", "حذف المبيعات")}</td>
                  </tr>

                  {/* الحجوزات */}
                  <tr>
                    <td>الحجوزات</td>
                    <td>
                      {renderCheckbox("create_reservations", "إنشاء الحجوزات")}
                    </td>
                    <td>
                      {renderCheckbox("read_reservations", "عرض الحجوزات")}
                    </td>
                    <td>
                      {renderCheckbox("update_reservations", "تحديث الحجوزات")}
                    </td>
                    <td>
                      {renderCheckbox("delete_reservations", "حذف الحجوزات")}
                    </td>
                  </tr>

                  {/* العروض */}
                  <tr>
                    <td>العروض</td>
                    <td>{renderCheckbox("create_offers", "إنشاء العروض")}</td>
                    <td>{renderCheckbox("read_offers", "عرض العروض")}</td>
                    <td>{renderCheckbox("update_offers", "تحديث العروض")}</td>
                    <td>{renderCheckbox("delete_offers", "حذف العروض")}</td>
                  </tr>

                  {/* طرق الدفع */}
                  <tr>
                    <td>طرق الدفع</td>
                    <td>
                      {renderCheckbox(
                        "create_payment_methods",
                        "إنشاء طرق الدفع"
                      )}
                    </td>
                    <td>
                      {renderCheckbox("read_payment_methods", "عرض طرق الدفع")}
                    </td>
                    <td>
                      {renderCheckbox(
                        "update_payment_methods",
                        "تحديث طرق الدفع"
                      )}
                    </td>
                    <td>
                      {renderCheckbox(
                        "delete_payment_methods",
                        "حذف طرق الدفع"
                      )}
                    </td>
                  </tr>

                  {/* الباقات */}
                  <tr>
                    <td>الباقات</td>
                    <td>
                      {renderCheckbox("create_packages", "إنشاء الباقات")}
                    </td>
                    <td>{renderCheckbox("read_packages", "عرض الباقات")}</td>
                    <td>
                      {renderCheckbox("update_packages", "تحديث الباقات")}
                    </td>
                    <td>{renderCheckbox("delete_packages", "حذف الباقات")}</td>
                  </tr>

                  {/* التقارير */}
                  <tr>
                    <td>التقارير</td>
                    <td>{renderCheckbox("read_reports", "عرض التقارير")}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>

          {/* زر الحفظ */}
          <div className="form-actions">
            <Button
              type="submit"
              className="btn btn-primary px-4 btn-sm sw-100 mt-3"
            >
              حفظ
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
