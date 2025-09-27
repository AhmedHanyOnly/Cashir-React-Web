import { Form, Table } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import "../Style/FinancialSessions.css";

export default function LateClients() {
  return (
    <section className="LateClientsSec">
      <div className="container-fluid">
        <section className="main-section">
          <div className="container">
            {/* الهيدر */}
            <div className="d-flex mb-3 gap-3 align-items-center">
              <h4 className="main-headingms-5 me-5 mb-2">
                تقرير العملاء المتأخرين
              </h4>
            </div>

            {/* محتوى التقرير */}
            <div className="section-content p-4 shadow bg-white">
              <div className="row g-3 mb-3">
                {/* من تاريخ الاستحقاق */}
                <div className="col-md-2">
                  <label className="small-label">من تاريخ الاستحقاق</label>
                  <Form.Control type="date" />
                </div>

                {/* إلى تاريخ الاستحقاق */}
                <div className="col-md-2">
                  <label className="small-label">إلى تاريخ الاستحقاق</label>
                  <Form.Control type="date" />
                </div>

                {/* العميل */}
                <div className="col-md-3">
                  <label className="small-label">العميل</label>
                  <Form.Control type="text" placeholder="ابحث بالاسم" />
                </div>
              </div>

              {/* الجدول */}
              <div className="table-responsive">
                <Table bordered hover responsive="md" className="text-center">
                  <thead className="bg-light">
                    <tr>
                      <th>#</th>
                      <th>اسم العميل</th>
                      <th>الهاتف</th>
                      <th>عدد الفواتير</th>
                      <th>إجمالي الفواتير</th>
                      <th>المتبقي</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>عميل نقدي</td>
                      <td>01</td>
                      <td>1</td>
                      <td>29.90</td>
                      <td className="text-danger fw-bold">29.90</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>عميل نقدي</td>
                      <td>166546</td>
                      <td>1</td>
                      <td>16.10</td>
                      <td className="text-danger fw-bold">16.10</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>عميل نقدي</td>
                      <td>011</td>
                      <td>1</td>
                      <td>13.80</td>
                      <td className="text-danger fw-bold">13.80</td>
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
