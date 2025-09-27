import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaFileAlt, // اعدادات الحسابات
  FaSitemap, // الشجرة المحاسبية
  FaBook, // القيود
  FaFileInvoice, // سندات القبض والصرف
  FaRegListAlt, // كشف حساب عام
  FaBalanceScale, // الاقرار الضريبي
  FaTable, // ميزان المراجعة
  FaChartLine, // قائمة الدخل
  FaUsers,
  FaCashRegister,
  FaCogs,
} from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import "../Style/accounting.css";
import { Navigate, useNavigate } from "react-router-dom";

export default function Accounting() {
  const navigate = useNavigate();
  return (
    <section className="acountingsec">
      <div className="container-fluid">
        <section className="main-side notice">
          <Container>
            {/* الأزرار العلوية */}
            <div className="d-flex align-items-center gap-2 justify-content-center flex-wrap">
              <a
                onClick={() => navigate("/purchases")}
                className="btn btn-info text-white"
              >
                <FaFileInvoice className="ms-1" />
                المشتريات
              </a>
              <a
                onClick={() => navigate("/expenses")}
                className="btn btn-info text-white"
              >
                <FaCashRegister className="ms-1" />
                المصروفات
              </a>
              <a
                onClick={() => navigate("/accounting")}
                className="btn btn-info text-white"
              >
                <FaChartLine className="ms-1" />
                المحاسبة
              </a>
              <a
                onClick={() => navigate("/reports")}
                className="btn btn-info text-white"
              >
                <FaFileInvoice className="ms-1" />
                التقارير
              </a>
              <a
                onClick={() => navigate("/suppliers")}
                className="btn btn-info text-white"
              >
                <FaUsers className="ms-1" />
                الموردين
              </a>
              <a
                onClick={() => navigate("/selectfilter")}
                className="btn btn-info text-white"
              >
                <FaCogs className="ms-1" />
                اعدادات الشجرة
              </a>
            </div>
            {/* البوكسات */}
            <div className="bg-white p-3 border shadow-sm rounded-3 mt-3">
              <Row className="g-4">
                <Col md={6} lg={4} xl={3}>
                  <a
                    onClick={() => navigate("/selectfilter")}
                    style={{ cursor: "pointer" }}
                    className="translate box-link"
                  >
                    <div className="box-report">
                      <p className="mb-0 boxtitle">اعدادات الحسابات</p>
                      <AiFillSetting className="report-icon" />
                    </div>
                  </a>
                </Col>

                <Col md={6} lg={4} xl={3}>
                  <a
                    onClick={() => navigate("/accounts/tree")}
                    style={{ cursor: "pointer" }}
                    className="translate box-link"
                  >
                    <div className="box-report">
                      <p className="mb-0 boxtitle">الشجرة المحاسبية</p>
                      <FaSitemap className="report-icon" />
                    </div>
                  </a>
                </Col>

                <Col md={6} lg={4} xl={3}>
                  <a
                    onClick={() => navigate("/vouchers")}
                    style={{ cursor: "pointer" }}
                    className="translate box-link"
                  >
                    <div className="box-report">
                      <p className="mb-0 boxtitle">القيود</p>
                      <FaBook className="report-icon" />
                    </div>
                  </a>
                </Col>

                <Col md={6} lg={4} xl={3}>
                  <a
                    onClick={() => navigate("/other-vouchers")}
                    style={{ cursor: "pointer" }}
                    className="translate box-link"
                  >
                    <div className="box-report">
                      <p className="mb-0 boxtitle">سندات القبض والصرف</p>
                      <FaFileInvoice className="report-icon" />
                    </div>
                  </a>
                </Col>

                <Col md={6} lg={4} xl={3}>
                  <a
                    onClick={() => navigate("/account-statement")}
                    style={{ cursor: "pointer" }}
                    className="translate box-link"
                  >
                    <div className="box-report">
                      <p className="mb-0 boxtitle">كشف حساب عام</p>
                      <FaRegListAlt className="report-icon" />
                    </div>
                  </a>
                </Col>

                <Col md={6} lg={4} xl={3}>
                  <a
                    onClick={() => navigate("/accounts/tax")}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="box-report">
                      <p className="mb-0 boxtitle">الاقرار الضريبي</p>
                      <FaFileAlt className="report-icon" />
                    </div>
                  </a>
                </Col>

                <Col md={6} lg={4} xl={3}>
                  <a
                    onClick={() => navigate("/accounts/trial-balance")}
                    style={{ cursor: "pointer" }}
                    className="translate box-link"
                  >
                    <div className="box-report">
                      <p className="mb-0 boxtitle">ميزان المراجعة</p>
                      <FaBalanceScale className="report-icon" />
                    </div>
                  </a>
                </Col>

                <Col md={6} lg={4} xl={3}>
                  <a
                    onClick={() => navigate("/accounts/income-statement")}
                    style={{ cursor: "pointer" }}
                    className="translate box-link"
                  >
                    <div className="box-report">
                      <p className="mb-0 boxtitle">قائمة الدخل</p>
                      <FaChartLine className="report-icon" />
                    </div>
                  </a>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </div>
    </section>
  );
}
