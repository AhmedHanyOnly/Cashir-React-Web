import { useState } from "react";
import { Button, Form, Table, Spinner, Pagination } from "react-bootstrap";
import { FaAngleRight, FaFileExcel, FaPrint } from "react-icons/fa";
import "../Style/FinancialSessions.css";

export default function MostProfitableProducts() {
  const [loading, setLoading] = useState(false);

  const handleExport = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // محاكاة تحميل
  };

  return (
    <section className="MostProfitableProductsSec">
      <div className="container-fluid">
        <section className="main-section">
          <div className="container">
            {/* العنوان + زر الرجوع */}
            <div className="d-flex mb-3 gap-3 align-items-center">
              <h4 className="main-heading ms-5 me-5 mb-2">
                تقرير المنتجات الاكثر ربحا
              </h4>
            </div>

            <div className="section-content p-4 shadow bg-white">
              <div className="row g-3 align-items-center">
                {/* من */}
                <div className="col-12 col-md-2">
                  <div className="box-info">
                    <label className="report-name small-label">من</label>
                    <Form.Control type="date" />
                  </div>
                </div>
                {/* إلى */}
                <div className="col-12 col-md-2">
                  <div className="box-info">
                    <label className="small-label report-name">إلى</label>
                    <Form.Control type="date" />
                  </div>
                </div>
                {/* المنتج */}
                <div className="col-12 col-md-2">
                  <div className="box-info">
                    <label
                      htmlFor="product-search"
                      className="small-label report-name"
                    >
                      المنتج
                    </label>
                    <Form.Control
                      type="text"
                      placeholder="ابحث بأسم المنتج"
                      id="product-search"
                    />
                  </div>
                </div>

                {/* ازرار التحكم */}
                <div className="col d-flex justify-content-end gap-1">
                  <Button
                    variant="success"
                    size="sm"
                    className="d-inline-flex gap-2 align-items-center"
                    onClick={handleExport}
                    disabled={loading}
                  >
                    {!loading ? (
                      <>
                        <FaFileExcel /> تصدير اكسل
                      </>
                    ) : (
                      <>
                        <Spinner
                          animation="border"
                          size="sm"
                          role="status"
                          className="me-2"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </Spinner>
                        جاري التصدير...
                      </>
                    )}
                  </Button>

                  <Button
                    style={{ color: "white" }}
                    variant="warning"
                    size="sm"
                    id="btn-prt-content"
                  >
                    <FaPrint /> طباعة
                  </Button>
                </div>
              </div>

              <div className="table-print mt-3" id="prt-content">
                {/* جدول البيانات */}
                <div className="table-responsive mt-3">
                  <Table className="main-table" striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>اسم المنتج</th>
                        <th>القسم</th>
                        <th>إجمالي الكمية</th>
                        <th>إجمالي المبيعات</th>
                        <th>إجمالي التكلفة</th>
                        <th>إجمالي الربح</th>
                        <th>هامش الربح %</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>كرتون كادبري اوريو</td>
                        <td>كل المنتجات</td>
                        <td>6.00</td>
                        <td>156.00</td>
                        <td>137.46</td>
                        <td className="text-success fw-bold">18.54</td>
                        <td>11.88%</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>حلوى نوغا بالزبدة78ج</td>
                        <td>كل المنتجات</td>
                        <td>4.00</td>
                        <td>55.20</td>
                        <td>38.40</td>
                        <td className="text-success fw-bold">16.80</td>
                        <td>30.43%</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>كيك بارني فراوله</td>
                        <td>كل المنتجات</td>
                        <td>5.00</td>
                        <td>100.00</td>
                        <td>83.35</td>
                        <td className="text-success fw-bold">16.65</td>
                        <td>16.65%</td>
                      </tr>
                      {/* باقي الصفوف زي ما هي */}
                    </tbody>
                    <tfoot>
                      <tr className="fw-bold bg-light">
                        <td colSpan="3">الإجمالي</td>
                        <td>64.00</td>
                        <td>625.70</td>
                        <td>520.12</td>
                        <td>105.58</td>
                      </tr>
                    </tfoot>
                  </Table>

                  {/* الباجينيشن */}
                  <Pagination className="justify-content-center">
                    <Pagination.Prev disabled />
                    <Pagination.Item active>1</Pagination.Item>
                    <Pagination.Item>2</Pagination.Item>
                    <Pagination.Next />
                  </Pagination>
                </div>
              </div>

              {/* جدول الإجماليات */}
              <div className="table-responsive mt-4">
                <Table bordered className="fw-bold">
                  <thead className="bg-light">
                    <tr>
                      <th>إجمالي الكمية</th>
                      <th>إجمالي المبيعات</th>
                      <th>إجمالي التكلفة</th>
                      <th>إجمالي الربح</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>73.00</td>
                      <td>663.23</td>
                      <td>549.70</td>
                      <td className="text-success">113.53</td>
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
