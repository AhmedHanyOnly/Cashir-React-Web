import { Button, Table, Modal } from "react-bootstrap";
import { FaAngleRight, FaPlus, FaPrint, FaTrashAlt } from "react-icons/fa";

import "../Style/OtherVouchers.css";
import { useNavigate } from "react-router-dom";

export default function OtherVouchers() {
  const [showDelete1, setShowDelete1] = React.useState(false);
  const [showDelete2, setShowDelete2] = React.useState(false);
  const navigate = useNavigate();

  return (
    <section className="OtherVouchersSec">
      <div className="container-fluid">
        <section className="main-section">
          <div className="container">
            <div className="p-3 shadow rounded-3 bg-white">
              {/* Header */}
              <div className="d-flex justify-content-between mb-3 align-items-center">
                <div className="d-flex align-items-center gap-2">
                  <a
                    href="https://cashir26.const-tech.in/ar/accounting"
                    className="btn bg-main-color text-white"
                  >
                    <FaAngleRight />
                  </a>
                  <h4 className="main-heading mt-4">سندات القبض والصرف</h4>
                </div>
                <div className="btn-holders d-flex align-items-center justify-content-end gap-2">
                  <a
                    onClick={() => navigate("/payment-voucher")}
                    style={{ cursor: "pointer" }}
                    className="btn-main-sm"
                  >
                    <FaPlus /> سند صرف
                  </a>
                  <a
                    onClick={() => navigate("/receipt-voucher")}
                    style={{ cursor: "pointer" }}
                    className="btn-main-sm"
                  >
                    <FaPlus /> سند قبض
                  </a>
                  <Button
                    id="btn-prt-content"
                    className="btn btn-sm btn-warning py-1"
                  >
                    <FaPrint color="white" />
                  </Button>
                </div>
              </div>

              {/* Search */}
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3 mb-3">
                <div className="col-12">
                  <div className="info-data">
                    <label htmlFor="search" className="small-label">
                      بحث عن اسم القيد
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="search"
                      // wire:model="search" → استبدله بالـ useState عند الحاجة
                    />
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="table-responsive">
                <Table className="table main-table" id="prt-content">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>الشرح</th>
                      <th>التاريخ</th>
                      <th>Type</th>
                      <th>Amount</th>
                      <th>الضريبة</th>
                      <th>الإجمالي</th>
                      <th>قيد يومية</th>
                      <th className="not-print">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Row 1 */}
                    <tr>
                      <td>2</td>
                      <td>تجريبي</td>
                      <td>2025-09-18</td>
                      <td>admin.payment_voucher</td>
                      <td>1000</td>
                      <td>150</td>
                      <td>1150</td>
                      <td>
                        رقم القيد:{" "}
                        <a
                          href="https://cashir26.const-tech.in/ar/vouchers/3/show"
                          className="btn btn-sm purple"
                        >
                          3
                        </a>
                      </td>
                      <td className="not-print">
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => setShowDelete2(true)}
                        >
                          <FaTrashAlt />
                        </Button>
                      </td>
                    </tr>

                    {/* Row 2 */}
                    <tr>
                      <td>1</td>
                      <td>مصاريف</td>
                      <td>2025-09-18</td>
                      <td>admin.payment_voucher</td>
                      <td>500</td>
                      <td>75</td>
                      <td>575</td>
                      <td>
                        رقم القيد:{" "}
                        <a
                          href="https://cashir26.const-tech.in/ar/vouchers/5/show"
                          className="btn btn-sm purple"
                        >
                          5
                        </a>
                      </td>
                      <td className="not-print">
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => setShowDelete1(true)}
                        >
                          <FaTrashAlt />
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Delete Modal Row 1 */}
      <Modal show={showDelete1} onHide={() => setShowDelete1(false)}>
        <Modal.Header closeButton>
          <Modal.Title>حذف سند القيد</Modal.Title>
        </Modal.Header>
        <Modal.Body>هل أنت متأكد من حذف سند القيد</Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            size="sm"
            onClick={() => setShowDelete1(false)}
          >
            لا
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              // تنفيذ عملية الحذف هنا
              setShowDelete1(false);
            }}
          >
            نعم
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Modal Row 2 */}
      <Modal show={showDelete2} onHide={() => setShowDelete2(false)}>
        <Modal.Header closeButton>
          <Modal.Title>حذف سند القيد</Modal.Title>
        </Modal.Header>
        <Modal.Body>هل أنت متأكد من حذف سند القيد</Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            size="sm"
            onClick={() => setShowDelete2(false)}
          >
            لا
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              // تنفيذ عملية الحذف هنا
              setShowDelete2(false);
            }}
          >
            نعم
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}
