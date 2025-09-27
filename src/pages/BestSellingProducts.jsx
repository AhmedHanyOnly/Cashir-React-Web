import React from "react";
import { Button, Form, Table, Pagination, Spinner } from "react-bootstrap";
import { FaAngleRight, FaFileExcel, FaPrint } from "react-icons/fa";
import "../Style/FinancialSessions.css";

export default function BestSellingProducts() {
  return (
    <section className="BestSellingProductsSec">
      <div className="container-fluid">
        <section className="main-section">
          <div className="container">
            {/* Header */}
            <div className="d-flex mb-3 gap-3 align-items-center">
              <h4 className="main-heading ms-5 me-5 mb-2">
                تقرير المنتجات الاكثر مبيعا
              </h4>
            </div>

            {/* Content Box */}
            <div className="section-content p-4 shadow bg-white">
              <div className="row g-3 align-items-center">
                <div className="col-12 col-md-2">
                  <div className="box-info">
                    <label className="report-name small-label">من</label>
                    <Form.Control type="date" />
                  </div>
                </div>

                <div className="col-12 col-md-2">
                  <div className="box-info">
                    <label className="small-label report-name">إلى</label>
                    <Form.Control type="date" />
                  </div>
                </div>

                <div className="col-12 col-md-2">
                  <div className="box-info">
                    <label className="small-label report-name">المنتج</label>
                    <Form.Control type="text" placeholder="ابحث بأسم المنتج" />
                  </div>
                </div>

                {/* Buttons */}
                <div className="col d-flex justify-content-end gap-1">
                  <Button
                    size="sm"
                    variant="success"
                    className="d-inline-flex gap-2 align-items-center"
                  >
                    <FaFileExcel />
                    <span>تصدير اكسل</span>
                  </Button>

                  <Button
                    style={{ color: "white" }}
                    size="sm"
                    variant="warning"
                    id="btn-prt-content"
                  >
                    <FaPrint /> طباعة
                  </Button>
                </div>
              </div>

              {/* Table */}
              <div className="table-print mt-4" id="prt-content">
                <div className="table-responsive mt-3">
                  <Table className="main-table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>اسم المنتج</th>
                        <th>عدد مرات البيع</th>
                        <th>الإجمالي</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>شاهي كراك ظروف 20 جرام</td>
                        <td>16</td>
                        <td>32.00</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>شكلاته كادبوري اوريو 38 ج</td>
                        <td>12</td>
                        <td>30.00</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>حبيبات الزنجبيل الصمان 20 ظرف</td>
                        <td>11</td>
                        <td>110.00</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>كرتون كادبري اوريو</td>
                        <td>6</td>
                        <td>156.00</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>شكلاته مي ستوري شد 12</td>
                        <td>5</td>
                        <td>85.00</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>كيك بارني فراوله</td>
                        <td>5</td>
                        <td>100.00</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>حلوى نوغا بالزبدة78ج</td>
                        <td>4</td>
                        <td>55.20</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>شكلاته مي ستوري 22 جرام</td>
                        <td>3</td>
                        <td>4.73</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>هولز ازرق حار</td>
                        <td>2</td>
                        <td>2.00</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>شاي ربيع كركديه 20 0خيط</td>
                        <td>2</td>
                        <td>18.40</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th colSpan={2}>الإجمالي</th>
                        <th>73.00</th>
                        <th>663.23</th>
                      </tr>
                    </tfoot>
                  </Table>

                  {/* Pagination */}
                  <Pagination className="justify-content-center">
                    <Pagination.Prev disabled />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Next />
                  </Pagination>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
