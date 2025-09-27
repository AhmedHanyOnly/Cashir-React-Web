import { AlertTriangle } from "lucide-react"; // أيقونة من lucide-react
import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#f8f9fa",
        textAlign: "center",
      }}
    >
      <AlertTriangle size={80} color="#dc3545" />
      <h1 style={{ fontSize: "4rem", margin: "20px 0", color: "#343a40" }}>
        404
      </h1>
      <p style={{ fontSize: "18px", marginBottom: "20px", color: "#6c757d" }}>
        الصفحة غير موجودة أو تم نقلها 🚧
      </p>
      <Link
        to="/"
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          borderRadius: "5px",
          textDecoration: "none",
          transition: "0.3s",
        }}
      >
        الرجوع للرئيسية
      </Link>
    </div>
  );
};

export default NotFound;
