import { Table, Button, Modal, Form, Badge } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { FaPrint, FaPenToSquare, FaTrashCan } from "react-icons/fa6";
import "../Style/invoices.css";

export default function Invoices() {
  return (
    <section className="invoicesec">
      <div className="container-fluid">
        <h4 className="main-heading">الفواتير</h4>
        <div className="invoicecontent">
          {/* البحث والفلاتر */}
          <div className="d-flex align-items-center gap-3 mb-1 flex-wrap">
            <div
              dir="ltr"
              className="d-flex align-items-center justify-content-end"
            >
              <Button
                id="button-addon2"
                type="button"
                className="btn btn-success input-group-addon searchbtn"
              >
                بحث
              </Button>
              <Form.Control
                className="searchinput"
                dir="rtl"
                type="text"
                placeholder="البحث برقم الفاتوره"
              />
            </div>

            <div className="d-flex align-items-center justify-content-end">
              <Form.Select className="main-select">
                <option value="">ابحث باسم العميل</option>
                <option value="6">عميل نقدي</option>
                <option value="unknown">عملاء غير مسجلين</option>
              </Form.Select>
            </div>

            <div className="d-flex align-items-center justify-content-end">
              <Form.Select className="main-select">
                <option value="">اختر الموظف</option>
                <option value="1">ادارة الموقع</option>
              </Form.Select>
            </div>
          </div>

          {/* الفلاتر + إضافة فاتورة */}
          <div className="d-flex align-items-end justify-content-between flex-wrap gap-2 mb-3">
            <div className="gap-2">
              <Button className="btn btn-primary btn-sm ms-1 mb-2 mb-sm-0">
                الكل 1
              </Button>
              <Button className="btn btn-success btn-sm ms-1 mb-2 mb-sm-0">
                مسددة 1
              </Button>
              <Button className="btn btn-danger btn-sm ms-1 mb-2 mb-sm-0">
                معلقة 0
              </Button>
              <Button className="btn btn-warning btn-sm ms-1 mb-2 mb-sm-0">
                مسترجعة 0
              </Button>
              <a
                href="https://cashir26.const-tech.in/ar/pos/index"
                className="btn btn-info btn-sm mb-2 mb-sm-0"
              >
                إضافة فاتورة جديدة
              </a>
            </div>

            <div className="d-flex align-items-center gap-2 flex-wrap flex-lg-nowrap">
              <div className="w-100">
                <label className="small-label">من</label>
                <Form.Control type="date" className="w-100" />
              </div>
              <div className="w-100">
                <label className="small-label">إلي</label>
                <Form.Control type="date" className="w-100" />
              </div>
            </div>
          </div>

          {/* الجدول */}
          <div className="table-responsive">
            <Table
              className="main-table"
              id="data-table"
              striped
              bordered
              hover
            >
              <thead>
                <tr>
                  <th>رقم الفاتورة</th>
                  <th>الموظف</th>
                  <th>العميل</th>
                  <th>التاريخ</th>
                  <th>المبلغ</th>
                  <th>الضريبة</th>
                  <th>الاجمالي</th>
                  <th>الخصم</th>
                  <th>نقدا</th>
                  <th>تحويل بنكي</th>
                  <th>شبكة</th>
                  <th>رصيد الباقة</th>
                  <th>المتبقي</th>
                  <th>الحالة</th>
                  <th>المرتجع</th>
                  <th>التحكم</th>
                </tr>
              </thead>
              <tbody>
                <tr className="contentRows">
                  <td>10</td>
                  <td>ادارة الموقع</td>
                  <td>عميل نقدي</td>
                  <td>2025-09-18</td>
                  <td>18</td>
                  <td>2.25</td>
                  <td>17.25</td>
                  <td>3</td>
                  <td>0</td>
                  <td>0</td>
                  <td>17.25</td>
                  <td>0</td>
                  <td>0</td>
                  <td>
                    <Badge bg="success">مسددة</Badge>
                  </td>
                  <td></td>
                  <td>
                    <div className="d-flex align-items-center gap-1">
                      {/* زر الاسترجاع */}
                      <Button
                        type="button"
                        className="btn btn-info btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#retrieved10"
                      >
                        استرجاع
                      </Button>

                      {/* زر الطباعة */}
                      <a
                        href="https://cashir26.const-tech.in/ar/invoices/10"
                        className="btn btn-sm btn-warning"
                      >
                        <FaPrint />
                      </a>

                      {/* زر التعديل */}
                      <a
                        href="https://cashir26.const-tech.in/ar/invoices/10/edit"
                        className="btn btn-sm btn-primary"
                      >
                        <FaPenToSquare />
                      </a>

                      {/* زر الحذف */}
                      <Button
                        type="button"
                        className="btn btn-danger btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#delete10"
                      >
                        <FaTrashAlt />
                      </Button>
                    </div>
                  </td>
                </tr>

                {/* صف المجموع */}
                <tr>
                  <td colSpan="4">المجموع</td>
                  <td>226.5</td>
                  <td>32.03</td>
                  <td>232.53</td>
                  <td>8</td>
                  <td>89.7</td>
                  <td>65.55</td>
                  <td>35.48</td>
                  <td>0</td>
                  <td>59.8</td>
                  <td colSpan="3"></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
}
