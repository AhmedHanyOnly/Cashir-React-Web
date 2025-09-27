import { Button, Table } from "react-bootstrap";
import { FaAngleRight, FaFileExcel, FaPrint } from "react-icons/fa";
import "../Style/AccountsTax.css";

export default function AccountsTax() {
  return (
    <section className="AcounttaxSec">
      <div className="container-fluid">
        <section className="tax-section main-section">
          <div
            id="prt-content"
            className="tax-content bg-white p-4 rounded-2 shadow data-print"
          >
            {/* Back Button */}
            <div className="d-flex mb-3">
              <a
                href="https://cashir26.const-tech.in/ar/accounting"
                className="btn bg-main-color text-white"
              >
                <FaAngleRight />
              </a>
            </div>

            {/* Heading */}
            <h4 className="main-heading">إقرار ضريبي</h4>

            {/* Buttons */}
            <div className="row not-print mb-3">
              <div className="left-holder d-flex justify-content-end gap-2 m-sm-0">
                <Button
                  variant="outline-info"
                  size="sm"
                  id="export-btn"
                  className="d-flex align-items-center gap-1"
                >
                  <FaFileExcel />
                  <span>تصدير Excel</span>
                </Button>
                <Button
                  variant="warning"
                  size="sm"
                  id="btn-prt-content"
                  className="d-flex align-items-center gap-1"
                >
                  <FaPrint color="white" />
                </Button>
              </div>
            </div>

            {/* ========== الربع الأول ========== */}
            <div className="box-tax mb-1 fs-6">الربع الأول</div>
            <div className="table-responsive">
              <Table bordered className="main-table mb-3">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>البيان</th>
                    <th>الاشهر</th>
                    <th>من تاريخ</th>
                    <th>الي تاريخ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>الربع الاول من عام 2025</td>
                    <td>يناير / فبراير / مارس</td>
                    <td>2025-01-01</td>
                    <td>2025-03-31</td>
                  </tr>
                </tbody>
              </Table>
            </div>

            {/* المشتريات والمبيعات - الربع الأول */}
            <div className="row g-1 mb-4 print-mb">
              <QuarterTable
                title="المشتريات الخاصة للضريبة الاساسية"
                rows={2}
              />
              <QuarterTable title="المبيعات الخاصة للضريبة الاساسية" rows={2} />
            </div>

            {/* ========== الربع الثاني ========== */}
            <div className="box-tax mb-1 fs-6">الربع الثاني</div>
            <div className="table-responsive">
              <Table bordered className="main-table mb-3">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>البيان</th>
                    <th>الاشهر</th>
                    <th>من تاريخ</th>
                    <th>الي تاريخ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2</td>
                    <td>الربع الثاني من عام 2025</td>
                    <td>ابريل / مايو / يونيو</td>
                    <td>2025-04-01</td>
                    <td>2025-06-30</td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <div className="row g-1 mb-4 print-mb">
              <QuarterTable
                title="المشتريات الخاصة للضريبة الاساسية"
                rows={2}
              />
              <QuarterTable title="المبيعات الخاصة للضريبة الاساسية" rows={2} />
              <QuarterTable
                title="المصروفات الخاصة للضريبة الاساسية"
                rows={2}
              />
            </div>

            {/* ========== الربع الثالث ========== */}
            <div className="box-tax mb-1 fs-6">الربع الثالث</div>
            <div className="table-responsive">
              <Table bordered className="main-table mb-3">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>البيان</th>
                    <th>الاشهر</th>
                    <th>من تاريخ</th>
                    <th>الي تاريخ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>3</td>
                    <td>الربع الثالث من عام 2025</td>
                    <td>يوليو / اغسطس / سبتمبر</td>
                    <td>2025-07-01</td>
                    <td>2025-09-30</td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <div className="row g-1 mb-4 print-mb">
              <QuarterTable
                title="المشتريات الخاصة للضريبة الاساسية"
                rows={2}
                values={[
                  ["4,931.24", "870.22", "5,801.46"],
                  ["4,931.24", "870.22", "5,801.46"],
                ]}
              />
              <QuarterTable
                title="المبيعات الخاصة للضريبة الاساسية"
                rows={2}
                values={[
                  ["846.68", "149.41", "996.09"],
                  ["846.68", "149.41", "996.09"],
                ]}
              />
              <QuarterTable
                title="المصروفات الخاصة للضريبة الاساسية"
                rows={2}
                values={[
                  ["1,500.00", "225.00", "1,725.00"],
                  ["1,500.00", "225.00", "1,725.00"],
                ]}
              />
            </div>

            {/* ========== الربع الرابع ========== */}
            <div className="box-tax mb-1 fs-6">الربع الرابع</div>
            <div className="table-responsive">
              <Table bordered className="main-table mb-3">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>البيان</th>
                    <th>الاشهر</th>
                    <th>من تاريخ</th>
                    <th>الي تاريخ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>4</td>
                    <td>الربع الرابع من عام 2025</td>
                    <td>اكتوبر / نوفمبر / ديسمبر</td>
                    <td>2025-10-01</td>
                    <td>2025-12-31</td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <div className="row g-1 mb-4 print-mb">
              <QuarterTable
                title="المشتريات الخاصة للضريبة الاساسية"
                rows={2}
              />
              <QuarterTable title="المبيعات الخاصة للضريبة الاساسية" rows={2} />
              <QuarterTable
                title="المصروفات الخاصة للضريبة الاساسية"
                rows={2}
              />
            </div>

            {/* ========== صافي الضريبة ========== */}
            <div className="col-12">
              <div className="table-responsive">
                <Table bordered className="main-table m-0">
                  <tbody>
                    <tr>
                      <td
                        style={{ backgroundColor: "#f9fafb", color: "#6b7280" }}
                        className="fw-bold"
                      >
                        صافي ضريبة المبيعات
                      </td>
                      <td>149.41</td>
                    </tr>
                    <tr>
                      <td
                        style={{ backgroundColor: "#f9fafb", color: "#6b7280" }}
                        className="fw-bold"
                      >
                        صافي ضريبة المشتريات + المصروفات
                      </td>
                      <td>1,095.22</td>
                    </tr>
                    <tr>
                      <td
                        style={{ backgroundColor: "#f9fafb", color: "#6b7280" }}
                        className="fw-bold"
                      >
                        صافي الضريبة المستحقة
                      </td>
                      <td>-945.81</td>
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

/* Component صغير يعيد استخدام الجداول */
function QuarterTable({ title, rows = 2, values }) {
  const labels = [
    `قيمة ${title.split(" ")[0]}`,
    `اجمالي ${title.split(" ")[0]}`,
  ];

  return (
    <div className="col-12 col-sm-6">
      <div className="table-title fw-bold fs-6 text-center">{title}</div>
      <div className="table-responsive mt-1">
        <Table bordered className="main-table m-0">
          <thead>
            <tr>
              <th>البيان</th>
              <th>اجمالى المجموع قبل الضريبه</th>
              <th>اجمالى الضريبة</th>
              <th>المجموع الكلى بعد الضريبه</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: rows }).map((_, i) => (
              <tr key={i}>
                <td style={{ backgroundColor: "#f9fafb" }} className="border">
                  {labels[i]}
                </td>
                <td className="border">{values?.[i]?.[0] ?? "0.00"}</td>
                <td className="border">{values?.[i]?.[1] ?? "0.00"}</td>
                <td className="border">{values?.[i]?.[2] ?? "0.00"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
