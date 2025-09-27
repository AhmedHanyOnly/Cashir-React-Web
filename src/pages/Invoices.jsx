import { useState } from "react";
import { Table, Button, Badge, Form } from "react-bootstrap";
import { FaTrashAlt, FaPrint } from "react-icons/fa";
import { toast } from "sonner";
import { Loader } from "../components/Loader";
import { useInvoices } from "../hooks/useInvoices";
import "../Style/invoices.css";
import { useSelector } from "../hooks/useSelector";

export default function Invoices() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedClient, setSelectedClient] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [showDelete, setShowDelete] = useState(false);

  const { invoicesQuery, deleteMutation } = useInvoices(page);
  const { clientsQuery } = useSelector();

  const handleDelete = (invoice) => {
    setSelectedInvoice(invoice);
    setShowDelete(true);
  };

  const handleCloseDelete = () => setShowDelete(false);

  const confirmDelete = () => {
    deleteMutation.mutate(selectedInvoice.id, {
      onSuccess: () => {
        toast.success("تم حذف الفاتورة بنجاح");
        setShowDelete(false);
      },
      onError: () => toast.error("حدث خطأ أثناء الحذف"),
    });
  };

  if (invoicesQuery.isLoading || clientsQuery.isLoading) return <Loader />;
  if (invoicesQuery.isError)
    return <p>حدث خطأ: {invoicesQuery.error?.message}</p>;

  const invoicesData = Array.isArray(invoicesQuery.data?.data)
    ? invoicesQuery.data.data
    : [];

  // الفلاتر
  const filteredInvoices = invoicesData.filter((inv) => {
    const matchSearch =
      search === "" ||
      inv.code.toLowerCase().includes(search.toLowerCase()) ||
      inv.client?.name?.toLowerCase().includes(search.toLowerCase());

    const matchClient =
      selectedClient === "" || inv.client?.id == selectedClient;

    const matchEmployee =
      selectedEmployee === "" || inv.createdBy?.id == selectedEmployee;

    const matchDateFrom =
      dateFrom === "" || new Date(inv.date) >= new Date(dateFrom);

    const matchDateTo =
      dateTo === "" || new Date(inv.date) <= new Date(dateTo);

    return (
      matchSearch && matchClient && matchEmployee && matchDateFrom && matchDateTo
    );
  });

  // Reset الفلاتر
  const resetFilters = () => {
    setSearch("");
    setSelectedClient("");
    setSelectedEmployee("");
    setDateFrom("");
    setDateTo("");
  };

  return (
    <section className="invoicesec">
      <div className="container-fluid">
        <h4 className="main-heading">الفواتير</h4>
        <div className="invoicecontent">
          {/* البحث والفلاتر */}
          <div className="d-flex align-items-center gap-3 mb-1 flex-wrap">
            <div dir="ltr" className="d-flex align-items-center justify-content-end">
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
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="d-flex align-items-center justify-content-end">
              <Form.Select
                className="main-select"
                value={selectedClient}
                onChange={(e) => setSelectedClient(e.target.value)}
              >
                <option value="">ابحث باسم العميل</option>
                {clientsQuery?.data?.data?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Form.Select>
            </div>

            <div className="d-flex align-items-center justify-content-end">
              <Form.Select
                className="main-select"
                value={selectedEmployee}
                onChange={(e) => setSelectedEmployee(e.target.value)}
              >
                <option value="">اختر الموظف</option>
                {/* المفروض الموظفين ييجوا من API */}
                <option value="1">ادارة الموقع</option>
              </Form.Select>
            </div>
          </div>

          {/* الفلاتر + إضافة فاتورة */}
          <div className="d-flex align-items-end justify-content-between flex-wrap gap-2 mb-3">
            <div className="gap-2">
              <Button className="btn btn-primary btn-sm ms-1 mb-2 mb-sm-0">
                الكل {invoicesData.length}
              </Button>
              <Button className="btn btn-success btn-sm ms-1 mb-2 mb-sm-0">
                مسددة {invoicesData.filter((i) => i.payment_status === "paid").length}
              </Button>
              <Button className="btn btn-danger btn-sm ms-1 mb-2 mb-sm-0">
                معلقة {invoicesData.filter((i) => i.payment_status === "pending").length}
              </Button>
              <Button className="btn btn-warning btn-sm ms-1 mb-2 mb-sm-0">
                مسترجعة {invoicesData.filter((i) => i.payment_status === "returned").length}
              </Button>
              <a
                href="https://cashir26.const-tech.in/ar/pos/index"
                className="btn btn-info btn-sm mb-2 mb-sm-0"
              >
                إضافة فاتورة جديدة
              </a>
              <Button
                className="btn btn-secondary btn-sm mb-2 mb-sm-0"
                onClick={resetFilters}
              >
                إعادة تعيين الفلاتر
              </Button>
            </div>

            <div className="d-flex align-items-center gap-2 flex-wrap flex-lg-nowrap">
              <div className="w-100">
                <label className="small-label">من</label>
                <Form.Control
                  type="date"
                  className="w-100"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                />
              </div>
              <div className="w-100">
                <label className="small-label">إلي</label>
                <Form.Control
                  type="date"
                  className="w-100"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* الجدول */}
          <div className="table-responsive">
            <Table className="main-table" id="data-table" striped bordered hover>
              <thead>
                <tr>
                  <th>رقم الفاتورة</th>
                  <th>التاريخ</th>
                  <th>المبلغ</th>
                  <th>الضريبة</th>
                  <th>الاجمالي</th>
                  <th>الحالة</th>
                  <th>التحكم</th>
                </tr>
              </thead>
              <tbody>
                {filteredInvoices.map((invoice) => (
                  <tr key={invoice.id} className="contentRows">
                    <td>{invoice.code}</td>
                    <td>{invoice.date}</td>
                    <td>{parseFloat(invoice.subtotal).toFixed(2)}</td>
                    <td>
                      {parseFloat(invoice.tax || invoice.tax_amount).toFixed(2)}
                    </td>
                    <td>{parseFloat(invoice.total).toFixed(2)}</td>
                    <td>
                      <Badge
                        bg={
                          invoice.payment_status === "paid"
                            ? "success"
                            : invoice.payment_status === "pending"
                            ? "danger"
                            : "warning"
                        }
                      >
                        {invoice.payment_status === "paid"
                          ? "مسددة"
                          : invoice.payment_status === "pending"
                          ? "معلقة"
                          : "مسترجعة"}
                      </Badge>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <a href={``} className="btn btn-sm btn-warning">
                          <FaPrint />
                        </a>
                        {/* زرار التعديل والحذف */}
                        {/* <Button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(invoice)}
                        >
                          <FaTrashAlt />
                        </Button> */}
                      </div>
                    </td>
                  </tr>
                ))}

                {/* صف المجموع */}
                <tr>
                  <td colSpan="2">المجموع</td>
                  <td>
                    {filteredInvoices
                      .reduce((acc, i) => acc + parseFloat(i.subtotal), 0)
                      .toFixed(2)}
                  </td>
                  <td>
                    {filteredInvoices
                      .reduce(
                        (acc, i) => acc + parseFloat(i.tax || i.tax_amount),
                        0
                      )
                      .toFixed(2)}
                  </td>
                  <td>
                    {filteredInvoices
                      .reduce((acc, i) => acc + parseFloat(i.total), 0)
                      .toFixed(2)}
                  </td>
                  <td colSpan="9"></td>
                </tr>
              </tbody>
            </Table>
          </div>

          {/* مودال الحذف */}
          {showDelete && selectedInvoice && (
            <div className="modal show d-block" tabIndex="-1">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">تأكيد الحذف</h5>
                    <Button
                      type="button"
                      className="btn-close"
                      onClick={handleCloseDelete}
                    />
                  </div>
                  <div className="modal-body">
                    <p>هل أنت متأكد من حذف الفاتورة {selectedInvoice.id}؟</p>
                  </div>
                  <div className="modal-footer">
                    <Button variant="secondary" onClick={handleCloseDelete}>
                      إلغاء
                    </Button>
                    <Button variant="danger" onClick={confirmDelete}>
                      حذف
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
