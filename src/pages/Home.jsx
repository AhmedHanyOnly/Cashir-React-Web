import { Link, NavLink, useNavigate } from "react-router-dom";
import "../Style/boxes.css";
import "../Style/global.css";
import {
  BarChart3,
  ArrowRightCircle,
  Users,
  Shield,
  UsersRound,
  ShoppingCart,
  DollarSign,
  Bell,
  FileText,
  User,
  Briefcase,
  Package,
  Layers,
  CreditCard,
  ShoppingBag,
  Box,
} from "lucide-react";
import { BoxInfo } from "../components/BoxInfo";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="container ">
      <h3 className="main-heading">الرئيسية</h3>

      {/* الروابط الرئيسية */}
      <div className="row g-3 mb-4 row-cols-1 row-cols-sm-2 row-cols-md-4">
        <div className="col">
          <Link to="/clients" className="btn-box">
            العملاء
            <img className="icon" src="/assets/users.png" alt="icon" />
          </Link>
        </div>

        <div className="col">
          <Link to="/pos" className="btn-box info">
            شاشة البيع
            <img className="icon" src="/assets/casher.png" alt="icon" />
          </Link>
        </div>

        <div className="col">
          <Link to="/invoices" className="btn-box green">
            الفواتير
            <img className="icon" src="/assets/invoice.png" alt="icon" />
          </Link>
        </div>

        <div className="col">
          <Link to="/purchases" className="btn-box purple">
            المشتريات
            <img className="icon" src="/assets/purchases.png" alt="icon" />
          </Link>
        </div>
      </div>

      <div className="status_section mb-5">
        <div className="row g-2">
          {/* راس المال */}
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="status_box blue-box">
              <div className="data">
                <h3>100000</h3>
                <p className="mb-3">راس المال</p>
              </div>
              <div className="icon">
                <BarChart3 className="blue-icon" size={60} />
              </div>
              <a href="/" className="more">
                <ArrowRightCircle /> المزيد من المعلومات
              </a>
            </div>
          </div>

          {/* المبيعات */}
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="status_box success-box">
              <div className="data">
                <h3>0.00</h3>
                <p className="mb-3">إجمالي المبيعات</p>
              </div>
              <div className="icon">
                <Users className="success-icon" size={60} />
              </div>
              <a href="/" className="more">
                <ArrowRightCircle /> المزيد من المعلومات
              </a>
            </div>
          </div>

          {/* المصروفات */}
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="status_box danger-box">
              <div className="data">
                <h3>0.00</h3>
                <p className="mb-3">إجمالي المصروفات</p>
              </div>
              <div className="icon">
                <Shield className="danger-icon" size={60} />
              </div>
              <a href="/" className="more">
                <ArrowRightCircle /> المزيد من المعلومات
              </a>
            </div>
          </div>

          {/* المشتريات */}
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="status_box warning-box">
              <div className="data">
                <h3>0.00</h3>
                <p className="mb-3">إجمالي المشتريات</p>
              </div>
              <div className="icon">
                <UsersRound className="warning-icon" size={60} />
              </div>
              <a href="/" className="more">
                <ArrowRightCircle /> المزيد من المعلومات
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-gap-24 mb-4 justify-content-center boxes-info">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/invoices")}
          className="col-md-3 col-sm-6 mb-3"
        >
          <BoxInfo number="0" text="كل الفواتير" color="blue" icon={FileText} />
        </div>

        <div
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/clients")}
          className="col-md-3 col-sm-6 mb-3"
        >
          <BoxInfo number="2" text="العملاء" color="green" icon={User} />
        </div>

        <div
          className="col-md-3 col-sm-6 mb-3"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/admins")}
        >
          <BoxInfo number="3" text="الموظفين" color="pur" icon={Briefcase} />
        </div>

        <div
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/products")}
          className="col-md-3 col-sm-6 mb-3"
        >
          <BoxInfo number="7" text="المنتجات" color="red" icon={Package} />
        </div>

        <div
          className="col-md-3 col-sm-6 mb-3"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/departments")}
        >
          <BoxInfo number="3" text="الاقسام" color="blue" icon={Layers} />
        </div>

        <div
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/expenses")}
          className="col-md-3 col-sm-6 mb-3"
        >
          <BoxInfo
            number="0"
            text="المصروفات"
            color="green"
            icon={CreditCard}
          />
        </div>

        <div
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/purchases")}
          className="col-md-3 col-sm-6 mb-3"
        >
          <BoxInfo number="0" text="المشتريات" color="pur" icon={ShoppingBag} />
        </div>

        <div
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/products")}
          className="col-md-3 col-sm-6 mb-3"
        >
          <BoxInfo number="0" text="المنتجات" color="red" icon={Box} />
        </div>
      </div>
    </div>
  );
}

export default Home;
