import { useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import Select from "react-select";
import { FaRegCalendarAlt } from "react-icons/fa";
import "../Style/OtherVouchers.css";

export default function ReceiptVoucher() {
  const [date, setDate] = useState("");
  const [fromAccount, setFromAccount] = useState(null);
  const [toAccount, setToAccount] = useState(null);
  const [amount, setAmount] = useState("");
  const [hasTax, setHasTax] = useState(false);
  const [description, setDescription] = useState("");

  // خيارات تجريبية - هنا ممكن تجيبهم من API
  const accountOptions = [
    { value: 1, label: "حساب البنك" },
    { value: 2, label: "الصندوق" },
    { value: 3, label: "إيرادات" },
  ];

  const handleSave = () => {
    const formData = {
      date,
      fromAccount,
      toAccount,
      amount,
      hasTax,
      description,
    };
    console.log("Saved Data:", formData);
  };

  // ستايل مطابق لـ select2
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
      fontSize: "0.95rem",
    }),
    singleValue: (base) => ({
      ...base,
      fontSize: "0.95rem",
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
    <section className="main-section home section-mobile">
      <div className="container">
        <h4 className="main-heading mb-4">سند قبض</h4>

        <Card>
          <Card.Header className="bg-primary">
            <h3 className="card-title text-white">سند قبض</h3>
          </Card.Header>

          <Card.Body>
            <Row>
              {/* التاريخ */}
              <Col md={3} sm={12}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <FaRegCalendarAlt className="me-1" />
                    التاريخ
                  </Form.Label>
                  <Form.Control
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </Form.Group>
              </Col>

              {/* من حساب */}
              <Col md={3} sm={12}>
                <Form.Group className="mb-3">
                  <Form.Label>من حساب</Form.Label>
                  <Select
                    options={accountOptions}
                    placeholder="اختر"
                    value={fromAccount}
                    onChange={setFromAccount}
                    isClearable
                    styles={select2Style}
                  />
                </Form.Group>
              </Col>

              {/* إلى حساب */}
              <Col md={3} sm={12}>
                <Form.Group className="mb-3">
                  <Form.Label>إلى حساب</Form.Label>
                  <Select
                    options={accountOptions}
                    placeholder="اختر"
                    value={toAccount}
                    onChange={setToAccount}
                    isClearable
                    styles={select2Style}
                  />
                </Form.Group>
              </Col>

              {/* المبلغ */}
              <Col md={3} sm={12}>
                <Form.Group className="mb-3">
                  <Form.Label>المبلغ</Form.Label>
                  <Form.Control
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </Form.Group>
              </Col>

              {/* تفعيل الضريبة */}
              <Col md={3} sm={12}>
                <Form.Group className="mb-3">
                  <Form.Check
                    style={{
                      display: "flex",
                      flexDirection: "row-reverse",
                      justifyContent: "start",
                      gap: "10px",
                    }}
                    type="checkbox"
                    label="تفعيل الضريبة"
                    checked={hasTax}
                    onChange={(e) => setHasTax(e.target.checked)}
                  />
                </Form.Group>
              </Col>

              {/* الوصف */}
              <Col sm={12}>
                <Form.Group className="mb-3">
                  <Form.Label>الوصف</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>

          <Card.Footer className="text-end">
            <Button
              style={{ display: "block", marginRight: "95%" }}
              variant="primary"
              onClick={handleSave}
            >
              حفظ
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </section>
  );
}
