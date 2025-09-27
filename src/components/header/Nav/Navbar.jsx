import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "../header.module.css";
import { FaLanguage } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { FaWrench, FaUser, FaCreditCard, FaChartLine } from "react-icons/fa";
import {
  FaBagShopping,
  FaUserLarge,
  FaCartShopping,
  FaFileInvoiceDollar,
  FaBarsProgress,
  FaCashRegister,
} from "react-icons/fa6";
export function NavBar() {
  return (
    <Navbar className={styles.nav} expand="lg">
      <Container className={styles.navContainer}>
        <Nav>
          <NavLink
            className={({ isActive }) =>
              `${styles.navlink} ${isActive ? styles.active : ""}`
            }
            to="/"
          >
            <span className={styles.navtext}>الرئيسية</span>
            <AiFillHome className={styles.navicon} size="1.3rem" />
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `${styles.navlink} ${isActive ? styles.active : ""}`
            }
            to="/settings"
          >
            <span className={styles.navtext}>الاعدادات</span>
            <FaWrench className={styles.navicon} size="1.1rem" />
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `${styles.navlink} ${isActive ? styles.active : ""}`
            }
            to="/products"
          >
            <span className={styles.navtext}>المنتجات</span>
            <FaBagShopping className={styles.navicon} size="1.1rem" />
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `${styles.navlink} ${isActive ? styles.active : ""}`
            }
            to="/clients"
          >
            <span className={styles.navtext}>العملاء</span>
            <FaUserLarge className={styles.navicon} size="1.1rem" />
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `${styles.navlink} ${isActive ? styles.active : ""}`
            }
            to="/suppliers"
          >
            <span className={styles.navtext}>الموردين</span>
            <FaUser className={styles.navicon} size="1.1rem" />
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `${styles.navlink} ${isActive ? styles.active : ""}`
            }
            to="/purchases"
          >
            <span className={styles.navtext}>المشتريات</span>
            <FaCartShopping className={styles.navicon} size="1.1rem" />
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `${styles.navlink} ${isActive ? styles.active : ""}`
            }
            to="/expenses"
          >
            <span className={styles.navtext}>المصروفات</span>
            <FaFileInvoiceDollar className={styles.navicon} size="1.1rem" />
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `${styles.navlink} ${isActive ? styles.active : ""}`
            }
            to="/accounting"
          >
            <span className={styles.navtext}>المحاسبة</span>
            <FaBarsProgress className={styles.navicon} size="1.1rem" />
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `${styles.navlink} ${isActive ? styles.active : ""}`
            }
            to="/invoices"
          >
            <span className={styles.navtext}>الفواتير</span>
            <FaChartLine className={styles.navicon} size="1.1rem" />
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `${styles.navlink} ${isActive ? styles.active : ""}`
            }
            to="/pos"
          >
            <span className={styles.navtext}>شاشة البيع</span>
            <FaCashRegister className={styles.navicon} size="1.1rem" />
          </NavLink>
        </Nav>
        <FaLanguage color="black" size="1.8rem" />
      </Container>
    </Navbar>
  );
}
