import { Table, Button, Modal } from "react-bootstrap";
import { FaPlus, FaPenToSquare, FaTrashCan } from "react-icons/fa6";
import { useState } from "react";
import "../Style/Roles.css";
import { useNavigate } from "react-router-dom";

export default function Roles() {
  const [showDelete, setShowDelete] = useState(null);
  const navigate = useNavigate();
  const handleClose = () => setShowDelete(null);
  const handleShow = (id) => setShowDelete(id);

  const roles = [
    { id: 1, name: "اداره", date: "2025-09-16" },
    { id: 2, name: "مبيعات", date: "2025-09-16" },
    { id: 3, name: "ليس له صلاحيه", date: "2025-09-16" },
    { id: 4, name: "كل الصلاحيات", date: "2025-09-16" },
  ];

  return (
    <section className="RolesSec">
      <div className="container-fluid">
        <h4 className="main-heading">الصلاحيات</h4>
        <div className="box-content">
          <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-3">
            <Button
              onClick={() => navigate("create")}
              style={{ cursor: "pointer" }}
              className="btn btn-primary btn-sm px-3"
            >
              اضافة مجموعة
            </Button>
          </div>

          <div className="table-responsive">
            <Table className="table main-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>اسم المجموعة</th>
                  <th>تاريخ الاضافه</th>
                  <th className="text-center">التحكم</th>
                </tr>
              </thead>
              <tbody>
                {roles.map((role) => (
                  <tr key={role.id}>
                    <td>{role.id}</td>
                    <td>{role.name}</td>
                    <td>{role.date}</td>
                    <td>
                      <div className="d-flex flex-wrap align-items-center justify-content-center gap-1">
                        <Button
                          variant="info"
                          size="sm"
                          className="fonticon-wrap width-50"
                          href={`/roles/${role.id}/edit`}
                          title="تعديل"
                        >
                          <FaPenToSquare color="white" />
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleShow(role.id)}
                        >
                          <FaTrashCan />
                        </Button>
                      </div>

                      {/* Modal حذف */}
                      <Modal
                        show={showDelete === role.id}
                        onHide={handleClose}
                        centered
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>حذف صلاحيه</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          هل أنت متأكد من حذف المجموعة ({role.name}) ؟
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            إلغاء
                          </Button>
                          <Button variant="primary" onClick={handleClose}>
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
    </section>
  );
}
