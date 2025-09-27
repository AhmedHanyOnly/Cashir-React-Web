import { FaUserCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import styles from "../header.module.css";
import { NavLink } from "react-router-dom";
import { logout } from "../../../api/modules/auth";
import { toast } from "sonner";
import useAuthStore from "../../../store/useAuthStore";
export default function User() {
  const { logoutStore } = useAuthStore();
  const handleLogout = () => {
    logout();
    toast.error("تم تسجيل الخروج");
    logoutStore();
  };
  return (
    <div className={styles.user}>
      <NavLink to="/program-additions">
        <div
          className={styles.guide}
          style={{ cursor: "pointer", color: "white", textDecoration: "none" }}
        >
          دليل المستخدم
        </div>
      </NavLink>
      <NavLink to="/notifications">
        <div
          style={{ cursor: "pointer", color: "white", textDecoration: "none" }}
          className={styles.notification}
        >
          <IoMdNotifications size="1.8rem" />
          <span className={styles.notificationNum}>3</span>
        </div>
      </NavLink>
      <div className={styles.manage}>
        <FaUserCircle size="1.8rem" />
        ادارة موقع
        <FaAngleDown />
        <div className={styles.dropdownContent}>
          <button onClick={handleLogout}>تسجيل الخروج</button>
        </div>
      </div>
    </div>
  );
}
