import { Table, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { FaPenToSquare, FaTrashCan, FaPlus } from "react-icons/fa6";
import "../Style/admins.css";
import { useNavigate } from "react-router-dom";

export default function Admins() {
  const [showDelete, setShowDelete] = useState(null);
  const navigate = useNavigate();
  const handleClose = () => setShowDelete(null);
  const handleShow = (id) => setShowDelete(id);

  const admins = [
    {
      id: 1,
      name: "ادارة الموقع",
      phone: "0000",
      email: "admin@admin.com",
      role: "كل الصلاحيات",
      branch: "",
    },
    {
      id: 2,
      name: "yasin",
      phone: "01000000000",
      email: "admin@app.com",
      role: "اداره",
      branch: "",
    },
    {
      id: 3,
      name: "sara",
      phone: "01000000005",
      email: "user@app.com",
      role: "مبيعات",
      branch: "",
    },
  ];

  return (
    <section className="adminsSec">
      <div className="container-fluid">
        <div>
          {/* Header */}
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h4 className="main-heading m-0">الموظفين</h4>
            <Button
              variant="secondary"
              size="sm"
              className="px-4"
              onClick={() => navigate("/")}
            >
              رجوع
            </Button>
          </div>

          <div className="box-content">
            {/* Actions */}
            <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-3">
              <Button
                variant="primary"
                size="sm"
                className="px-3 d-flex align-items-center gap-1"
                onClick={() => navigate("create")}
              >
                <FaPlus /> اضف موظف
              </Button>

              <a
                className="btn-main-sm"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/roles")}
              >
                الصلاحيات
              </a>
            </div>

            {/* Table */}
            <div className="table-responsive">
              <Table className="main-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>اسم الموظف</th>
                    <th>الجوال</th>
                    <th>البريد الالكتروني</th>
                    <th>المجموعة</th>
                    <th>الفرع</th>
                    <th className="text-center">التحكم</th>
                  </tr>
                </thead>
                <tbody>
                  {admins.map((emp, index) => (
                    <tr key={emp.id}>
                      <td>{index + 1}</td>
                      <td className="text-nowrap">{emp.name}</td>
                      <td>{emp.phone}</td>
                      <td>{emp.email}</td>
                      <td className="text-nowrap">
                        <span>{emp.role}</span>
                        <br />
                      </td>
                      <td>{emp.branch}</td>
                      <td className="d-flex align-items-center justify-content-center gap-1">
                        {/* Edit Button */}
                        <Button
                          variant="info"
                          size="sm"
                          className="fonticon-wrap width-50"
                          href={`https://cashir26.const-tech.in/ar/admins/${emp.id}/edit`}
                          title="تعديل"
                        >
                          <FaPenToSquare />
                        </Button>

                        {/* Delete Button */}
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleShow(emp.id)}
                        >
                          <FaTrashCan />
                        </Button>

                        {/* Delete Modal */}
                        <Modal
                          show={showDelete === emp.id}
                          onHide={handleClose}
                          centered
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>حذف موظف</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>هل أنت متأكد من حذف الموظف ؟</Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              إلغاء
                            </Button>
                            <Button
                              variant="primary"
                              onClick={() => {
                                handleClose();
                                // هنا تقدر تحط request الحذف
                              }}
                            >
                              نعم
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
