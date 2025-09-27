import { useState } from "react";
import { Card, Row, Col, Button, Form, Table } from "react-bootstrap";
import Select from "react-select";
import { FaAngleRight, FaPrint } from "react-icons/fa";
import "../Style/AccountStatement.css";
import { useNavigate } from "react-router-dom";

export default function AccountStatement() {
  const [account, setAccount] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();

  // خيارات الحساب - تقدر تجيبها من API
  const accountOptions = [
    { value: 1, label: "الحساب العام" },
    { value: 2, label: "حساب البنك" },
    { value: 3, label: "الصندوق" },
  ];

  // ستايل مشابه لـ select2
  const select2Style = {
    control: (base, state) => ({
      ...base,
      borderRadius: "4px",
      borderColor: state.isFocused ? "#2684FF" : "#ced4da",
      boxShadow: state.isFocused ? "0 0 0 1px #2684FF" : "none",
      minHeight: "38px",
      "&:hover": { borderColor: "#2684FF" },
    }),
    placeholder: (base) => ({
      ...base,
      color: "#6c757d",
      fontSize: "0.9rem",
    }),
    singleValue: (base) => ({
      ...base,
      fontSize: "0.9rem",
      color: "#212529",
    }),
    clearIndicator: (base) => ({
      ...base,
      cursor: "pointer",
      color: "#6c757d",
      "&:hover": { color: "red" },
    }),
    dropdownIndicator: (base) => ({
      ...base,
      padding: "4px",
    }),
    valueContainer: (base) => ({
      ...base,
      padding: "2px 8px",
    }),
    menu: (base) => ({
      ...base,
      zIndex: 9999,
    }),
  };

  return (
    <section className="AcountStatementSec">
      <div className="container-fluid">
        <Card className="bg-white p-3 rounded-2 shadow">
          {/* الهيدر */}
          <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap mb-3">
            <div className="d-flex align-items-center gap-2">
              <Button
                onClick={() => navigate("/accounting")}
                style={{ cursor: "pointer" }}
                variant="secondary"
                size="sm"
                className="text-white"
              >
                <FaAngleRight />
              </Button>
              <h4 className="main-heading m-0">كشف حساب عام</h4>
            </div>
            <div className="btn-holder d-flex align-items-center gap-1">
              <Button
                onClick={() => navigate("/vouchers")}
                style={{ cursor: "pointer" }}
                variant="success"
                size="sm"
              >
                القيود اليومية
              </Button>
              <Button
                onClick={() => navigate("/accounts/tree")}
                style={{ cursor: "pointer", color: "white" }}
                variant="info"
                size="sm"
              >
                شجرة الحسابات
              </Button>
              <Button
                style={{ color: "white" }}
                variant="warning"
                size="sm"
                id="btn-prt-content"
              >
                <FaPrint className="ms-1" />
                طباعة
              </Button>
            </div>
          </div>

          {/* الفلترة */}
          <Row className="g-3 mb-2">
            <Col xs={12} md={3}>
              <Form.Group>
                <Form.Label className="small-label">الحساب</Form.Label>
                <Select
                  options={accountOptions}
                  placeholder="اختر"
                  value={account}
                  onChange={setAccount}
                  isClearable
                  styles={select2Style}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group>
                <Form.Label className="small-label">من</Form.Label>
                <Form.Control
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group>
                <Form.Label className="small-label">إلى</Form.Label>
                <Form.Control
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* العنوان للطباعة */}
          <h4 className="main-heading d-none d-block-print mb-2">
            Account statement
          </h4>

          {/* الجدول */}
          <div id="prt-content" className="table-responsive">
            <Table bordered>
              <thead>
                <tr>
                  <th>التاريخ</th>
                  <th>البيان</th>
                  <th>رقم القيد</th>
                  <th>مدين</th>
                  <th>دائن</th>
                  <th>الرصيد</th>
                  <th>مركز التكلفة</th>
                </tr>
              </thead>
              <tbody>
                {/* بيانات تجريبية */}
                <tr>
                  <td>2025-09-22</td>
                  <td>عملية تجريبية</td>
                  <td>1001</td>
                  <td>500</td>
                  <td>-</td>
                  <td>500</td>
                  <td>القسم الرئيسي</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Card>
      </div>
    </section>
  );
}
