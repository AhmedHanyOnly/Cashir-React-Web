import { Container, Row, Col, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleLeft, FaDollarSign, FaMoneyBillTrendUp } from "react-icons/fa6";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Filler);
import "../Style/treasury.css";

export default function Treasury() {
  const navigate = useNavigate();

  // 13 عنصر عشان يطابق القيم
  const xValues = [
    "January",
    "February",
    "March ",
    "April",
    "May",
    "June",
    "July",
    "August ",
    "September",
    "October",
    "November",
    "December",
    "Extra", // عشان يطابق طول البيانات
  ];

  const data = {
    labels: xValues,
    datasets: [
      {
        data: [
          860, 1140, 1060, 1060, 1070, 1070, 1070, 1070, 1110, 1330, 2210, 7830,
          2478,
        ],
        borderWidth: 1,
        pointRadius: 0,
        borderColor: "#4B94BF",
        backgroundColor: "rgba(75, 148, 191, 0.7)",
        tension: 0.4,
        fill: true,
      },
      {
        data: [
          1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 1900, 1900,
          1900, 7000,
        ],
        borderColor: "rgba(210,214,223,1)",
        borderWidth: 1,
        backgroundColor: "rgba(210,214,223,0.7)",
        pointRadius: 0,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    plugins: { legend: { display: false } },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <section className="TreasurySec">
      <Container fluid>
        {/* العنوان والباك */}
        <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-3">
          <h4 className="main-heading mb-0">الخزينة</h4>
          <Link
            to="/reports"
            style={{ marginRight: "74rem" }}
            className="btn btn-secondary btn-sm px-3 w-fit d-block ms-auto"
          >
            <FaAngleLeft />
          </Link>
        </div>

        {/* التنبيه */}
        <div className="d-flex align-items-center">
          <div className="flex-fill">
            <div className="d-flex justify-content-center">
              <Alert
                variant="primary"
                style={{ fontSize: "14px", fontWeight: "600" }}
                className="d-flex align-items-center mb-3"
              >
                يمكنك اضافة راس المال من لوحة التحكم الاعدادت
              </Alert>
            </div>
          </div>
        </div>

        {/* البوكسات */}
        <Row className="g-3 mb-4 boxes-info justify-content-center boxes-bg-color">
          <Col sm={6} lg={3}>
            <Link to="#">
              <div className="box-info blue">
                <FaDollarSign className="bg-icon" />
                <div className="num">15</div>
                <div className="text">راس المال</div>
              </div>
            </Link>
          </Col>

          <Col sm={6} lg={3}>
            <Link to="#">
              <div className="box-info green">
                <FaMoneyBillTrendUp className="bg-icon" />
                <div className="num">15</div>
                <div className="text">الارباح</div>
              </div>
            </Link>
          </Col>

          <Col sm={6} lg={3}>
            <Link to="#">
              <div className="box-info red">
                <FaMoneyBillTrendUp
                  className="bg-icon"
                  style={{ transform: "scaleY(-1)" }}
                />
                <div className="num">54</div>
                <div className="text">الخسائر</div>
              </div>
            </Link>
          </Col>

          <Col sm={6} lg={3}>
            <Link to="#">
              <div className="box-info blue">
                <FaMoneyBillTrendUp
                  className="bg-icon"
                  style={{ transform: "scaleY(-1)" }}
                />
                <div className="num">68574</div>
                <div className="text">راس المال + الارباح</div>
              </div>
            </Link>
          </Col>
        </Row>

        {/* الشارت */}
        <div
          className="bg-white p-3 rounded-2 shadow"
          style={{ height: "350px" }}
        >
          <Line data={data} options={options} />
        </div>
      </Container>
    </section>
  );
}
