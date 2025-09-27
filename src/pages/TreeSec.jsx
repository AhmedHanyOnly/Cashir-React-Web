import React, { useState } from "react";
import {
  Container,
  Card,
  Button,
  Form,
  Modal,
  InputGroup,
} from "react-bootstrap";
import {
  FaAngleRight,
  FaFilePdf,
  FaFileExcel,
  FaCirclePlus,
  FaFloppyDisk,
  FaPenToSquare,
  FaTrashCan,
  FaXmark,
} from "react-icons/fa6";

import "../Style/tree.css";
import Tree from "./Tree";
import { useNavigate } from "react-router-dom";

export default function TreeSec() {
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="TreeSec">
      <Container fluid>
        <div className="accounts-container">
          {/* Header Section */}
          <div className="header-section d-flex align-items-center justify-content-between gap-2 flex-wrap">
            <div className="d-flex align-items-center gap-2">
              <Button
                onClick={() => navigate("/accounting")}
                className="addbtn"
              >
                <FaAngleRight />
              </Button>
              <h4 className="mb-0">شجرة الحسابات</h4>
            </div>
            <div className="d-flex align-items-center gap-2">
              <Button
                onClick={() => navigate("/accounts/tree")}
                className="addbtn"
              >
                الشجرة المحاسبية
              </Button>
              <Button href="/accounts/pdf" className="addbtn">
                <FaFilePdf className="me-1" /> تصدير pdf
              </Button>
              <Button href="/accounts/excel" className="addbtn">
                <FaFileExcel className="me-1" /> تصدير اكسل
              </Button>
            </div>
          </div>

          {/* Search Box */}
          <Card className="mb-3">
            <Card.Body>
              <InputGroup className="SearchInput">
                <Form.Control
                  type="text"
                  placeholder="بحث في الحسابات..."
                  aria-label="Search accounts"
                />
                <Button className="Xbtn" variant="outline-secondary">
                  <FaXmark />
                </Button>
              </InputGroup>
              <div className="mt-2">
                <small
                  id="searchStatus"
                  className="text-muted"
                  style={{ display: "none" }}
                ></small>
              </div>
            </Card.Body>
          </Card>

          {/* Tree Section */}
          <Card>
            <Card.Body>
              <div id="account-tree">
                {/* ✅ رندر الشجرة هنا */}
                <Tree />
              </div>
            </Card.Body>
          </Card>

          {/* Add Modal */}
          <Modal show={showAdd} onHide={() => setShowAdd(false)}>
            <Modal.Header closeButton>
              <Modal.Title>
                <FaCirclePlus className="me-2" /> اضافة حساب
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>الاسم</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>رقم الحساب</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>
                <Button type="submit" className="addbtn">
                  <FaFloppyDisk className="me-1" /> حفظ
                </Button>
              </Form>
            </Modal.Body>
          </Modal>

          {/* Edit Modal */}
          <Modal show={showEdit} onHide={() => setShowEdit(false)}>
            <Modal.Header closeButton>
              <Modal.Title>
                <FaPenToSquare className="me-2" /> تعديل الحساب
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>اسم الحساب</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>رقم الحساب</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>
                <Button type="submit" className="addbtn">
                  <FaFloppyDisk className="me-1" /> حفظ
                </Button>
              </Form>
            </Modal.Body>
          </Modal>

          {/* Delete Modal */}
          <Modal show={showDelete} onHide={() => setShowDelete(false)}>
            <Modal.Header closeButton>
              <Modal.Title>
                <FaTrashCan className="me-2" /> حذف الحساب
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>هل انت متاكد من حذف الحساب؟</p>
              <div className="d-flex gap-2 justify-content-end">
                <Button className="addbtn" onClick={() => setShowDelete(false)}>
                  <FaXmark className="me-1" /> الغاء
                </Button>
                <Button className="addbtn btn-danger">
                  <FaTrashCan className="me-1" /> حذف
                </Button>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </Container>
    </section>
  );
}
