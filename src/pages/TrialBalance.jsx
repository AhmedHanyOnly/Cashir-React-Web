import { Button, Table, Form, Row, Col } from "react-bootstrap";
import Select, { components } from "react-select";
import { FaAngleRight, FaPrint, FaFileExcel, FaUndo } from "react-icons/fa";
import "../Style/TrialBalance.css";

// زرار × زي select2
const ClearIndicator = (props) => (
  <components.ClearIndicator {...props}>
    <span title="Remove all items">×</span>
  </components.ClearIndicator>
);

// استايل select عشان يطابق select2
const customStyles = {
  control: (provided) => ({
    ...provided,
    minHeight: "38px",
    borderRadius: "4px",
    borderColor: "#ced4da",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#86b7fe",
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#212529",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#212529",
  }),
  clearIndicator: (provided) => ({
    ...provided,
    cursor: "pointer",
    color: "#6c757d",
    fontSize: "18px",
    padding: "0 8px",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: "0 8px",
  }),
};

export default function TrialBalance() {
  const accountOptions = [
    { value: "1", label: "الأصول" },
    { value: "2", label: "الخصوم" },
    { value: "3", label: "الإيرادات" },
    { value: "4", label: "المصروفات" },
  ];

  return (
    <section className="TrialBalance">
      <div className="container-fluid">
        <section className="main-section">
          <div className="container reset-print-container">
            <div className="p-3 shadow rounded-3 bg-white position-relative reset-print-holder">
              {/* Header */}
              <div className="d-flex align-items-center gap-3 mb-3 not-print">
                <a href="#" className="btn bg-main-color text-white">
                  <FaAngleRight />
                </a>
                <h4 className="main-heading mb-0">ميزان مراجعة الحسابات</h4>
              </div>

              {/* Filters - All in one row */}
              <Row className="g-3 align-items-end mb-3 not-print flex-wrap">
                <Col xs="auto" style={{ minWidth: "200px" }}>
                  <Form.Group>
                    <Form.Label className="small-label">بحث بالحساب</Form.Label>
                    <Select
                      options={accountOptions}
                      placeholder="اختر"
                      isClearable
                      components={{ ClearIndicator }}
                      styles={customStyles}
                      noOptionsMessage={() => "لا توجد نتائج"}
                    />
                  </Form.Group>
                </Col>

                <Col xs="auto">
                  <Form.Group>
                    <Form.Label className="small-label">Year</Form.Label>
                    <Form.Select>
                      {Array.from({ length: 15 }).map((_, i) => {
                        const year = 2020 + i;
                        return (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col xs="auto">
                  <Form.Group>
                    <Form.Label className="small-label">من</Form.Label>
                    <Form.Control type="date" placeholder="mm/dd/yyyy" />
                  </Form.Group>
                </Col>

                <Col xs="auto">
                  <Form.Group>
                    <Form.Label className="small-label">الى</Form.Label>
                    <Form.Control type="date" placeholder="mm/dd/yyyy" />
                  </Form.Group>
                </Col>

                <Col
                  xs="auto"
                  className="d-flex align-items-center gap-3"
                  style={{ flexDirection: "row-reverse" }}
                >
                  <Form.Check type="checkbox" />
                  <Form.Label className="mb-0 small-label">
                    اخفاء الحسابات الصفرية
                  </Form.Label>
                </Col>

                <Col xs="auto">
                  <Button
                    size="sm"
                    variant="warning"
                    className="d-flex align-items-center"
                    onClick={() => window.print()}
                  >
                    <FaPrint color="white" />
                  </Button>
                </Col>

                <Col xs="auto">
                  <Button
                    size="sm"
                    variant="success"
                    className="d-inline-flex gap-2 align-items-center"
                  >
                    <FaFileExcel />
                    تصدير اكسل
                  </Button>
                </Col>

                <Col xs="auto">
                  <Button
                    size="sm"
                    variant="danger"
                    className="d-flex gap-1 align-items-center"
                  >
                    <FaUndo />
                    Reset
                  </Button>
                </Col>
              </Row>

              {/* Table */}
              <div className="table-responsive">
                <Table bordered className="main-table" dir="rtl">
                  <thead>
                    <tr>
                      <th rowSpan={2} className="border pb-4">
                        رقم الحساب
                      </th>
                      <th rowSpan={2} className="border pb-4">
                        اسم الحساب
                      </th>
                      <th colSpan={2} className="border">
                        الرصيد الافتتاحي
                      </th>
                      <th colSpan={2} className="border">
                        الحركة السنوية
                      </th>
                      <th rowSpan={2} className="border pb-4">
                        الرصيد
                      </th>
                    </tr>
                    <tr>
                      <th className="border">مدين</th>
                      <th className="border">دائن</th>
                      <th className="border">مدين</th>
                      <th className="border">دائن</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border">1</td>
                      <td className="border">الأصول</td>
                      <td className="border">0</td>
                      <td className="border">0</td>
                      <td className="border">456.40</td>
                      <td className="border">338.35</td>
                      <td className="border">118.05</td>
                    </tr>
                    <tr>
                      <td className="border">1001</td>
                      <td className="border">الأصول المتداولة</td>
                      <td className="border">0</td>
                      <td className="border">0</td>
                      <td className="border">456.40</td>
                      <td className="border">338.35</td>
                      <td className="border">118.05</td>
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
