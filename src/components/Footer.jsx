import { Container } from "react-bootstrap";
import styles from "./header/header.module.css";
function Footer() {
  return (
    <div className={`${styles.footerbottom} py-3 not-print d-none d-sm-block`}>
      <Container>
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-between gap-3">
          <p className="mb-0">2022 © جميع الحقوق محفوظه</p>
          <div className="about_data d-flex align-items-center justify-content-center">
            <p className="ms-2 mb-0">برنامج المبيعات v3.0</p>
          </div>
          <a href="https://www.const-tech.org/">
            <img
              src="https://cashir26.const-tech.in/img/footer/copy.png"
              alt="logo"
            />
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
