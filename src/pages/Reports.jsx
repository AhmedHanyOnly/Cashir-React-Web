import { Container, Row, Col } from "react-bootstrap";
import {
  FaFileInvoice,
  FaUsers,
  FaCashRegister,
  FaChartLine,
  FaCogs,
} from "react-icons/fa";
import CanvasJSReact from "@canvasjs/react-charts";
import "../Style/reports.css";
import { useNavigate } from "react-router-dom";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Reports() {
  const navigate = useNavigate();
  // البيانات المطلوبة (النسب و المسميات كما طلبت)
  const pieData = [
    { y: 10.26, label: "تقرير الموظف", color: "#4f46e5" }, // indigo
    { y: 5.02, label: "تقرير الخزينة", color: "#059669" }, // green
    { y: 27.34, label: "تقرير العميل", color: "#f59e0b" }, // amber
    { y: 51.08, label: "كشف حساب عام", color: "#8b5cf6" }, // violet
    { y: 4.07, label: "تقرير المصروفات", color: "#ef4444" }, // red
    { y: 1.22, label: "تقرير المبيعات", color: "#3b82f6" }, // blue
  ];

  const chartOptions = {
    animationEnabled: true,
    exportEnabled: false,
    theme: "light2",
    title: {
      text: "توزيع التقارير (نسب مئوية)",
      fontFamily: "inherit",
      fontSize: 16,
    },
    subtitles: [
      {
        text: "",
      },
    ],
    data: [
      {
        type: "pie",
        startAngle: 240,
        showInLegend: false, // نخفي الليجند الافتراضي لأننا سنعرض مفاتيح مخصصة تحته
        toolTipContent: "<b>{label}</b>: {y}%",
        indexLabel: "{y}%",
        indexLabelPlacement: "outside",
        indexLabelFontSize: 12,
        radius: "80%",
        dataPoints: pieData,
      },
    ],
  };

  return (
    <section className="main-section home section-mobile">
      <div className="container-fluid">
        <section>
          <Container>
            {/* العنوان وأزرار التنقل */}
            <div className="d-flex align-items-md-center justify-content-between gap-3 flex-column flex-sm-row mb-3">
              <h4 className="main-heading mb-0">المحاسبة</h4>

              <div className="d-flex align-items-center gap-2 justify-content-center">
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

              <h4 className="main-heading mb-0 pe-none opacity-0 d-none d-md-block">
                المحاسبة
              </h4>
            </div>

            {/* البوكسات والتقارير */}
            <div className="bg-white p-3 rounded-2 shadow">
              <Row>
                <Col md={8}>
                  <Row className="g-4">
                    <Col md={6} lg={4}>
                      <a
                        onClick={() => navigate("general")}
                        style={{ cursor: "pointer" }}
                        className="translate"
                      >
                        <div className="box-report">
                          <p className="boxTitle">كشف حساب عام</p>
                          <img
                            src="https://cashir26.const-tech.in/img/report-8.png"
                            alt="report img"
                            className="report-img"
                          />
                        </div>
                      </a>
                    </Col>

                    <Col md={6} lg={4}>
                      <a
                        onClick={() => navigate("client")}
                        style={{ cursor: "pointer" }}
                        className="translate"
                      >
                        <div className="box-report">
                          <p className="boxTitle">تقرير العميل</p>
                          <img
                            src="https://cashir26.const-tech.in/img/report-11.png"
                            alt="report img"
                            className="report-img"
                          />
                        </div>
                      </a>
                    </Col>

                    <Col md={6} lg={4}>
                      <a
                        onClick={() => navigate("user")}
                        style={{ cursor: "pointer" }}
                        className="translate"
                      >
                        <div className="box-report">
                          <p className="boxTitle">تقرير الموظف</p>
                          <img
                            src="https://cashir26.const-tech.in/img/report-4.png"
                            alt="report img"
                            className="report-img"
                          />
                        </div>
                      </a>
                    </Col>

                    <Col md={6} lg={4}>
                      <a
                        onClick={() => navigate("treasury")}
                        style={{ cursor: "pointer" }}
                        className="translate"
                      >
                        <div className="box-report">
                          <p className="boxTitle">تقرير الخزينة</p>
                          <img
                            src="https://cashir26.const-tech.in/img/report-1.png"
                            alt="report img"
                            className="report-img"
                          />
                        </div>
                      </a>
                    </Col>

                    <Col md={6} lg={4}>
                      <a
                        onClick={() => navigate("salesReport")}
                        style={{ cursor: "pointer" }}
                        className="translate"
                      >
                        <div className="box-report">
                          <p className="boxTitle">تقرير المبيعات</p>
                          <img
                            src="https://cashir26.const-tech.in/img/report-7.png"
                            alt="report img"
                            className="report-img"
                          />
                        </div>
                      </a>
                    </Col>

                    <Col md={6} lg={4}>
                      <a
                        onClick={() => navigate("financial-sessions")}
                        style={{ cursor: "pointer" }}
                        className="translate"
                      >
                        <div className="box-report">
                          <p className="boxTitle">متابعة الجلسات المالية</p>
                          <img
                            src="https://cashir26.const-tech.in/img/report-11.png"
                            alt="report img"
                            className="report-img"
                          />
                        </div>
                      </a>
                    </Col>

                    <Col md={6} lg={4}>
                      <a
                        onClick={() => navigate("best-selling-products")}
                        style={{ cursor: "pointer" }}
                        className="translate"
                      >
                        <div className="box-report">
                          <p className="boxTitle">المنتجات الأكثر مبيعا</p>
                          <img
                            src="https://cashir26.const-tech.in/img/report-11.png"
                            alt="report img"
                            className="report-img"
                          />
                        </div>
                      </a>
                    </Col>

                    <Col md={6} lg={4}>
                      <a
                        onClick={() => navigate("most-profitable-products")}
                        style={{ cursor: "pointer" }}
                        className="translate"
                      >
                        <div className="box-report">
                          <p className="boxTitle">المنتجات الأكثر ربحا</p>
                          <img
                            src="https://cashir26.const-tech.in/img/report-11.png"
                            alt="report img"
                            className="report-img"
                          />
                        </div>
                      </a>
                    </Col>

                    <Col md={6} lg={4}>
                      <a
                        onClick={() => navigate("late-clients")}
                        style={{ cursor: "pointer" }}
                        className="translate"
                      >
                        <div className="box-report">
                          <p className="boxTitle">العملاء المتأخرين</p>
                          <img
                            src="https://cashir26.const-tech.in/img/report-1.png"
                            alt="report img"
                            className="report-img"
                          />
                        </div>
                      </a>
                    </Col>
                  </Row>
                </Col>

                {/* الرسم البياني الدائري + المفاتيح (bullets) تحت الرسم */}
                <Col md={4}>
                  <div
                    id="chartContainer"
                    style={{
                      height: "370px",
                      width: "100%",
                      position: "relative",
                    }}
                  >
                    <CanvasJSChart options={chartOptions} />
                  </div>

                  {/* legend / bullets تحت الرسم */}
                  <div className="chart-legend mt-3">
                    {pieData.map((d) => (
                      <div className="legend-item" key={d.label}>
                        <span
                          className="legend-bullet"
                          style={{ backgroundColor: d.color }}
                        />
                        <small className="legend-label">{d.label}</small>
                        <small className="legend-value">{d.y}%</small>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>
            </div>
          </Container>

          {/* ستايلات خاصة بالـ legend */}
          <style>{`
            .canvasjs-chart-canvas {
              position: absolute !important;
              -webkit-tap-highlight-color: transparent;
              user-select: none;
              cursor: default;
            }

            .chart-legend {
              display: flex;
              flex-direction: column;
              gap: 6px;
              margin-top: 8px;
              direction: rtl;
            }

            .legend-item {
              display: flex;
              align-items: center;
              gap: 8px;
              font-size: 12px;
              color: #374151;
              justify-content: flex-start;
            }

            .legend-bullet {
              width: 10px;
              height: 10px;
              border-radius: 50%;
              display: inline-block;
              flex: 0 0 10px;
            }

            .legend-label {
              margin-right: 4px;
            }

            .legend-value {
              margin-left: auto;
              font-weight: 600;
              color: #111827;
            }

            @media (max-width: 576px) {
              .legend-item {
                font-size: 11px;
              }
            }
          `}</style>
        </section>
      </div>
    </section>
  );
}
