import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

function MainLayout() {
  return (
    <div className=" " dir="rtl">
      <Header />
      <div className="main-section">
        <div className="container">
        <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default MainLayout;
