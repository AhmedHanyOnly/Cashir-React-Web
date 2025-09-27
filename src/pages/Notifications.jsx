import { Button } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import "../Style/Notifications.css";
export default function Notifications() {
  return (
    <section className="notificationsSec">
      <div className="container-fluid">
        <section>
          <div className="container">
            <h4 className="main-heading">الاشعارات</h4>
            <div className="bg-white p-3 rounded-2 shadow">
              <div className="d-flex justify-content-between mb-3">
                {/* زر قراءة الكل */}
                <Button
                  variant="success"
                  size="sm"
                  href="https://cashir26.const-tech.in/ar/markAsRead"
                  className="d-flex align-items-center gap-1"
                >
                  <FaEye /> قراءة كل الاشعارات
                </Button>

                {/* زر مسح الكل */}
                <Button
                  variant="danger"
                  size="sm"
                  href="https://cashir26.const-tech.in/ar/notifications/deleteAll"
                  onClick={() =>
                    window.confirm(
                      "هل أنت متأكد من رغبتك في حذف جميع الإشعارات؟"
                    )
                  }
                >
                  مسح كل الاشعارات
                </Button>
              </div>

              {/* الاشعارات */}
              <div className="NotifcationBox p-3 border-bottom">
                <span className="text-danger new">جديد </span>
                <a href="https://cashir26.const-tech.in/ar/invoices/8">
                  <span className="text-main-color">
                    تم إضافة فاتورة جديدة بقيمة 66.7 USD
                  </span>
                </a>
              </div>

              <div className="NotifcationBox p-3 border-bottom">
                <span className="text-danger new">جديد </span>
                <a href="https://cashir26.const-tech.in/ar/invoices/7">
                  <span className="text-main-color">
                    تم إضافة فاتورة جديدة بقيمة 13.8 USD
                  </span>
                </a>
              </div>

              <div className="NotifcationBox p-3 border-bottom">
                <span className="text-danger new">جديد </span>
                <a href="https://cashir26.const-tech.in/ar/invoices/6">
                  <span className="text-main-color">
                    تم إضافة فاتورة جديدة بقيمة 29.9 USD
                  </span>
                </a>
              </div>

              <div className="mt-3"></div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
