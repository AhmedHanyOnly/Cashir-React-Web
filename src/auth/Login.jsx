import { useState } from "react";
import "../Style/auth.css";
import { Eye, EyeOff } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/modules/auth";
import useAuthStore from "../store/useAuthStore";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { setAuth } = useAuthStore();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: login,
    onMutate: () => setLoading(true), 
    onSuccess: (data) => {
      setAuth({ user: data.data, token: data.token });
      toast.success("تم تسجيل الدخول بنجاح");
      setLoading(false);
      navigate("/");
    },
    onError: (err) => {
      setLoading(false);
      toast.error(`فشل تسجيل الدخول: ${err.message}`);
    },
  });

  const togglePassword = () => setShowPassword(!showPassword);


  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ email, password });
  };

  return (
    <section className="page-login">
      <form className="form-login" onSubmit={handleSubmit}>
        <div className="box-login">
          <div className="img-login">
            <img
              src="/assets/login-img.jpg"
              alt="login"
            />
          </div>

          <div className="content-login">
            <div className="w-100">
              <h3 className="title d-flex align-items-center justify-content-between">
                تسجيل الدخول
              </h3>

              <div className="lable">البريد الالكتروني</div>
              <input
                type="email"
                name="email"
                placeholder="البريد الالكتروني"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="lable mt-3">كلمة المرور</div>
              <div className="d-flex align-items-center">
                <input
                  id="passwordField"
                  className="form-control"
                  style={{ borderRadius: "0 0 .25rem .25rem" }}
                  type={showPassword ? "text" : "password"}
                  placeholder="كلمة المرور"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  id="togglePassword"
                  className="btn btn-sm btn-light text-black"
                  style={{ height: "34px", borderRadius: ".25rem .25rem 0 0" }}
                  type="button"
                  onClick={togglePassword}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>

              <button className="btn-sub" type="submit" disabled={loading}>
                {loading ? "جارٍ تسجيل الدخول..." : "تسجيل الدخول"}
              </button>

              <hr className="my-4" />

              <div className="d-flex align-items-center justify-content-center">
                <a href="https://www.const-tech.org/" className="fs-10px">
                  برمجة وتطوير كوكبة التقنية
                  <img
                    src="https://cashir26.const-tech.in/img/LOGO3.png"
                    alt="footer logo"
                    className="logo-footer"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
