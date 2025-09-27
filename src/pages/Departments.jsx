import { useState } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import { FaPlus, FaPenToSquare, FaTrashCan } from "react-icons/fa6";
import "../Style/departments.css";
import { useNavigate } from "react-router-dom";
import { useCategories } from "../hooks/useCategories";
import { Loader } from "../components/Loader";
import { toast } from "sonner"; // استدعاء sonner

export default function Departments() {
  const navigate = useNavigate();
  const { categoriesQuery, createMutation, updateMutation, deleteMutation } = useCategories();

  const [showAdd, setShowAdd] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [name, setName] = useState("");
  const [parentId, setParentId] = useState("");

  const handleCloseAdd = () => {
    setShowAdd(false);
    setSelectedCategory(null);
    setName("");
    setParentId("");
  };
  const handleShowAdd = (category = null) => {
    if (category) {
      setSelectedCategory(category);
      setName(category.name);
      setParentId(category.parent?.id || "");
    }
    setShowAdd(true);
  };

  const handleCloseDelete = () => {
    setShowDelete(false);
    setSelectedCategory(null);
  };
  const handleShowDelete = (category) => {
    setSelectedCategory(category);
    setShowDelete(true);
  };

  const handleSave = async () => {
    try {
      if (selectedCategory) {
        await updateMutation.mutateAsync({ id: selectedCategory.id, data: { name, parent_id: parentId } });
        toast.success("تم تعديل القسم بنجاح");
      } else {
        await createMutation.mutateAsync({ name, parent_id: parentId });
        toast.success("تم إضافة القسم بنجاح");
      }
      handleCloseAdd();
    } catch (error) {
      const msg = error.response?.data?.msg || "حدث خطأ، حاول مرة أخرى";
      toast.error(msg);
      console.error(error);
    }
  };

  const handleDelete = async () => {
    if (!selectedCategory) return;
    try {
      await deleteMutation.mutateAsync(selectedCategory.id);
      toast.success("تم حذف القسم بنجاح ");
      handleCloseDelete();
    } catch (error) {
      const msg = error.response?.data?.msg || "حدث خطأ، حاول مرة أخرى";
      toast.error(msg);
      console.error(error);
    }
  };

  if (categoriesQuery.isLoading) return <Loader/>;
  if (categoriesQuery.isError) return <p>Error: {categoriesQuery.error.message}</p>;

  const categories = categoriesQuery.data?.data || [];

  return (
    <section className="DepartmentsSec">
      <div className="container-fluid">
        {/* Modal Add */}
        <Modal show={showAdd} onHide={handleCloseAdd} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedCategory ? "تعديل قسم" : "إضافة قسم"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row row-gap-24">
              <div className="col-sm-4">
                <label className="small-label">الاسم</label>
                <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="col-sm-4">
                <label className="small-label">فرعي من</label>
                <select className="form-control" value={parentId} onChange={(e) => setParentId(e.target.value)}>
                  <option value="">رئيسي</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAdd}>إلغاء</Button>
            <Button variant="primary" onClick={handleSave}>حفظ</Button>
          </Modal.Footer>
        </Modal>

        {/* Modal Delete */}
        <Modal show={showDelete} onHide={handleCloseDelete} centered>
          <Modal.Header closeButton>
            <Modal.Title>حذف قسم</Modal.Title>
          </Modal.Header>
          <Modal.Body>هل أنت متأكد من حذف القسم ؟</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseDelete}>إلغاء</Button>
            <Button variant="primary" onClick={handleDelete}>نعم</Button>
          </Modal.Footer>
        </Modal>

        {/* Header */}
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h4 className="main-heading m-0">الأقسام</h4>
          <a className="btn btn-sm btn-secondary px-4" onClick={() => navigate("/")}>رجوع</a>
        </div>

        <div className="box-content">
          {/* Add Button */}
          <div className="d-flex align-items-center justify-content-end mb-2">
            <button type="button" className="btn-main-sm" onClick={() => handleShowAdd()}>
              أضف قسم <FaPlus className="icon ms-1" />
            </button>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <Table style={{ border: "1px solid #dddddd" }} className="table main-table">
              <thead>
                <tr>
                  <th>الاسم</th>
                  <th>فرعي من</th>
                  <th className="text-center">التحكم</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat) => (
                  <tr key={cat.id}>
                    <td>{cat.name}</td>
                    <td>{cat.parent?.name || "-"}</td>
                    <td>
                      <div className="d-flex flex-wrap align-items-center justify-content-center gap-1">
                        <button type="button" className="btn btn-sm btn-info" onClick={() => handleShowAdd(cat)}>
                          <FaPenToSquare color="white" />
                        </button>
                        <button type="button" className="btn btn-sm btn-danger" onClick={() => handleShowDelete(cat)}>
                          <FaTrashCan />
                        </button>
                      </div>
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
