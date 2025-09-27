import { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa6";
import Select from "react-select";
import "../Style/selectfilter.css";
import { useNavigate } from "react-router-dom";

export default function SelectFilter() {
  const navigate = useNavigate();
  const [departments, setDepartments] = useState({
    sales: { value: "21", label: "إيرادات المبيعات" },
    sales_tax: { value: "44", label: "ضريبة القيمة المضافة على المبيعات" },
    purchases: { value: "55", label: "مشتريات بضائع" },
    purchases_tax: { value: "77", label: "ضريبة القيمة المضافة على المشتريات" },
    customers: { value: "88", label: "العملاء" },

    expenses: { value: "101", label: "اختر" },
    expenses_tax: { value: "102", label: "ضريبة القيمة المضافة على المشتريات" },
    employees: { value: "103", label: "مصاريف مستحقة" },
    suppliers: { value: "104", label: "الموردون" },
    sales_returns: { value: "105", label: "مردودات المبيعات" },
    purchase_returns: { value: "106", label: "مردودات المشتريات" },
    discount_allowed: { value: "107", label: "اختر" },
    discount_received: { value: "108", label: "اختر" },
    cash: { value: "109", label: "الصندوق الرئيسي" },
    bank_transfer: { value: "110", label: "حسابات بنكية" },
    network: { value: "111", label: "حسابات بنكية" },
    e_wallets: { value: "112", label: "حسابات بنكية" },
    cheque: { value: "113", label: "أوراق قبض" },
    gift_card: { value: "114", label: "الخصوم المتداولة" },
    money_order: { value: "115", label: "حسابات بنكية" },
  });

  const options = {
    sales: [{ value: "21", label: "إيرادات المبيعات" }],
    sales_tax: [{ value: "44", label: "ضريبة القيمة المضافة على المبيعات" }],
    purchases: [{ value: "55", label: "مشتريات بضائع" }],
    purchases_tax: [
      { value: "77", label: "ضريبة القيمة المضافة على المشتريات" },
    ],
    customers: [{ value: "88", label: "العملاء" }],

    expenses: [{ value: "101", label: "المصروفات" }],
    expenses_tax: [
      { value: "102", label: "ضريبة القيمة المضافة على المشتريات" },
    ],
    employees: [{ value: "103", label: "مصاريف مستحقة" }],
    suppliers: [{ value: "104", label: "الموردون" }],
    sales_returns: [{ value: "105", label: "مردودات المبيعات" }],
    purchase_returns: [{ value: "106", label: "مردودات المشتريات" }],
    discount_allowed: [{ value: "107", label: "خصم مسموح به" }],
    discount_received: [{ value: "108", label: "خصم مكتسب" }],
    cash: [{ value: "109", label: "الصندوق الرئيسي" }],
    bank_transfer: [{ value: "110", label: "حسابات بنكية" }],
    network: [{ value: "111", label: "شبكة" }],
    e_wallets: [{ value: "112", label: "الحساب الرئيسي لمحافظ إلكترونية" }],
    cheque: [{ value: "113", label: "أوراق قبض" }],
    gift_card: [{ value: "114", label: "الخصوم متداولة" }],
    money_order: [{ value: "115", label: "حسابات بنكية" }],
  };

  const handleChange = (value, key) => {
    setDepartments({ ...departments, [key]: value });
  };

  const handleSubmit = () => {
    console.log("القيم المختارة:", departments);
    alert("تم الحفظ بنجاح ✅");
  };
  return (
    <section className="SelectFilterSec">
      <div className="container-fluid">
        <section className="main-section">
          <div className="container">
            <h4 className="main-heading">ادارة المحاسبة</h4>

            {/* Header buttons */}
            <div className="d-flex align-items-center justify-content-between">
              <a
                onClick={() => navigate("/accounting")}
                className="btn btn-dark my-3 d-flex align-items-center gap-2"
              >
                <FaArrowLeft />
                العودة
              </a>
              <Button variant="success" className="my-3" onClick={handleSubmit}>
                حفظ
              </Button>
            </div>

            <div className="bg-white shadow p-4 rounded-3">
              <div className="alert alert-info fs-13px mb-2 fs-6" role="alert">
                يمكنك تحديد الحسابات وربطها بالفواتير
              </div>

              {/* Table */}
              <div className="table-responsive">
                <Table className="table main-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>الخدمة</th>
                      <th>الحساب</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>المبيعات</td>
                      <td>
                        <Select
                          value={departments.sales}
                          onChange={(val) => handleChange(val, "sales")}
                          options={options.sales}
                          isClearable
                          isSearchable
                          placeholder="اختر"
                          noOptionsMessage={() => "searching..."}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>ضريبة المبيعات</td>
                      <td>
                        <Select
                          value={departments.sales_tax}
                          onChange={(val) => handleChange(val, "sales_tax")}
                          options={options.sales_tax}
                          isClearable
                          isSearchable
                          placeholder="اختر"
                          noOptionsMessage={() => "searching..."}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>3</td>
                      <td>المشتريات</td>
                      <td>
                        <Select
                          value={departments.purchases}
                          onChange={(val) => handleChange(val, "purchases")}
                          options={options.purchases}
                          isClearable
                          isSearchable
                          placeholder="اختر"
                          noOptionsMessage={() => "searching..."}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>4</td>
                      <td>ضريبة المشتريات</td>
                      <td>
                        <Select
                          value={departments.purchases_tax}
                          onChange={(val) => handleChange(val, "purchases_tax")}
                          options={options.purchases_tax}
                          isClearable
                          isSearchable
                          placeholder="اختر"
                          noOptionsMessage={() => "searching..."}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>5</td>
                      <td>العملاء</td>
                      <td>
                        <Select
                          value={departments.customers}
                          onChange={(val) => handleChange(val, "customers")}
                          options={options.customers}
                          isClearable
                          isSearchable
                          placeholder="اختر"
                          noOptionsMessage={() => "searching..."}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>6</td>
                      <td>المصروفات</td>
                      <td>
                        <Select
                          value={departments.expenses}
                          onChange={(val) => handleChange(val, "expenses")}
                          options={options.expenses}
                          isClearable
                          isSearchable
                          placeholder="اختر"
                          noOptionsMessage={() => "searching..."}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>7</td>
                      <td>ضريبة المصروفات</td>
                      <td>
                        <Select
                          value={departments.expenses_tax}
                          onChange={(val) => handleChange(val, "expenses_tax")}
                          options={options.expenses_tax}
                          isClearable
                          isSearchable
                          placeholder="ضريبة القيمة المضافة على المصروفات"
                          noOptionsMessage={() => "searching..."}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>8</td>
                      <td>الموظفين</td>
                      <td>
                        <Select
                          value={departments.employees}
                          onChange={(val) => handleChange(val, "employees")}
                          options={options.employees}
                          isClearable
                          isSearchable
                          placeholder="مصاريف مستحقة"
                          noOptionsMessage={() => "searching..."}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>9</td>
                      <td>الموردين</td>
                      <td>
                        <Select
                          value={departments.suppliers}
                          onChange={(val) => handleChange(val, "suppliers")}
                          options={options.suppliers}
                          isClearable
                          isSearchable
                          placeholder="الموردون"
                          noOptionsMessage={() => "searching..."}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>10</td>
                      <td>مردودات المبيعات</td>
                      <td>
                        <Select
                          value={departments.sales_returns}
                          onChange={(val) => handleChange(val, "sales_returns")}
                          options={options.sales_returns}
                          isClearable
                          isSearchable
                          placeholder="مردودات المبيعات"
                          noOptionsMessage={() => "searching..."}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>11</td>
                      <td>مردودات المشتريات</td>
                      <td>
                        <Select
                          value={departments.purchase_returns}
                          onChange={(val) =>
                            handleChange(val, "purchase_returns")
                          }
                          options={options.purchase_returns}
                          isClearable
                          isSearchable
                          placeholder="مردودات المشتريات"
                          noOptionsMessage={() => "searching..."}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>12</td>
                      <td>خصم مسموح به</td>
                      <td>
                        <Select
                          value={departments.discount_allowed}
                          onChange={(val) =>
                            handleChange(val, "discount_allowed")
                          }
                          options={options.discount_allowed}
                          isClearable
                          isSearchable
                          placeholder="اختر"
                          noOptionsMessage={() => "searching..."}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>13</td>
                      <td>خصم مكتسب</td>
                      <td>
                        <Select
                          value={departments.discount_received}
                          onChange={(val) =>
                            handleChange(val, "discount_received")
                          }
                          options={options.discount_received}
                          isClearable
                          isSearchable
                          placeholder="اختر"
                          noOptionsMessage={() => "searching..."}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>14</td>
                      <td>نقدا</td>
                      <td>
                        <Select
                          value={departments.cash}
                          onChange={(val) => handleChange(val, "cash")}
                          options={options.cash}
                          isClearable
                          isSearchable
                          placeholder="الصندوق الرئيسي"
                          noOptionsMessage={() => "searching..."}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>15</td>
                      <td>تحويل بنكي</td>
                      <td>
                        <Select
                          value={departments.bank_transfer}
                          onChange={(val) => handleChange(val, "bank_transfer")}
                          options={options.bank_transfer}
                          isClearable
                          isSearchable
                          placeholder="حسابات بنكية"
                          noOptionsMessage={() => "searching..."}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>16</td>
                      <td>شبكة</td>
                      <td>
                        <Select
                          value={departments.network}
                          onChange={(val) => handleChange(val, "network")}
                          options={options.network}
                          isClearable
                          isSearchable
                          placeholder="حسابات بنكية"
                          noOptionsMessage={() => "searching..."}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>17</td>
                      <td>الحساب الرئيسي لطرق دفع (محافظ إلكترونية)</td>
                      <td>
                        <Select
                          value={departments.e_wallets}
                          onChange={(val) => handleChange(val, "e_wallets")}
                          options={options.e_wallets}
                          isClearable
                          isSearchable
                          placeholder="حسابات بنكية"
                          noOptionsMessage={() => "searching..."}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>18</td>
                      <td>الحساب الرئيسي لطرق دفع (شيك)</td>
                      <td>
                        <Select
                          value={departments.cheque}
                          onChange={(val) => handleChange(val, "cheque")}
                          options={options.cheque}
                          isClearable
                          isSearchable
                          placeholder="أوراق قبض"
                          noOptionsMessage={() => "searching..."}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>19</td>
                      <td>Gift Card</td>
                      <td>
                        <Select
                          value={departments.gift_card}
                          onChange={(val) => handleChange(val, "gift_card")}
                          options={options.gift_card}
                          isClearable
                          isSearchable
                          placeholder="الخصوم متداولة"
                          noOptionsMessage={() => "searching..."}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>20</td>
                      <td>Money Order</td>
                      <td>
                        <Select
                          value={departments.money_order}
                          onChange={(val) => handleChange(val, "money_order")}
                          options={options.money_order}
                          isClearable
                          isSearchable
                          placeholder="حسابات بنكية"
                          noOptionsMessage={() => "searching..."}
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              <Button variant="success" className="my-3" onClick={handleSubmit}>
                حفظ
              </Button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
