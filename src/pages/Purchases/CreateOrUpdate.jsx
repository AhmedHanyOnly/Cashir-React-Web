import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { FaTrash, FaPlus } from "react-icons/fa";
import { createPurchases, updatePurchases } from "../../api/modules/purchases";
import { toast } from "sonner";
import "../../Style/CreatePurchase.css";
import { useSelector } from "../../hooks/useSelector";
import Select from "react-select";
import { useLocation, useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader";
import { useSettings } from "../../hooks/useSettings";

export default function CreatePurchase() {
  const { state: editData } = useLocation();
  // console.log(editData)
  const { suppliersQuery, productsQuery, paymentMethodsQuery } = useSelector();
  const { data, isLoading } = useSettings();
  const settingsData = data;
  const settingsLoading = isLoading;

  const [items, setItems] = useState([
    { item_id: "", quantity: 1, cost_price: 0, selling_price: 0 },
  ]);
  const [payments, setPayments] = useState([
    { payment_method_id: "", amount: 0 },
  ]);
  const [supplier, setSupplier] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const [note, setNote] = useState("");

  // ضبط التاريخ الافتراضي
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    setDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  // تحميل بيانات التعديل
  useEffect(() => {
    if (editData) {
      setSupplier(editData.supplier_id || "");
      setDate(editData.date || "");
      setItems(editData.items || []);
      setPayments(editData.payments || []);
      setAmount(editData.amount || 0);
      setTax(editData.tax || 0);
      setTotal(editData.total || 0);
      setNote(editData.note || "");
    }
  }, [editData]);

  // ضبط الضريبة من settings كـ default
  useEffect(() => {
    if (settingsData?.data) {
      const defaultTax = Number(
        settingsData.data.find((item) => item.key === "tax")?.value || 0
      );
      setTax(defaultTax);
    }
  }, [settingsData]);

  // حساب المبالغ
  useEffect(() => {
    const newAmount = items.reduce(
      (sum, item) => sum + Number(item.cost_price) * Number(item.quantity),
      0
    );
    const newTotal = newAmount + (newAmount * Number(tax)) / 100;
    setAmount(newAmount);
    setTotal(newTotal);
  }, [items, tax]);

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const handlePaymentChange = (index, field, value) => {
    const newPayments = [...payments];
    newPayments[index][field] = value;
    setPayments(newPayments);
  };

  const addItem = () =>
    setItems([
      ...items,
      { item_id: "", quantity: 1, cost_price: 0, selling_price: 0 },
    ]);
  const removeItem = (index) => setItems(items.filter((_, i) => i !== index));

  const addPayment = () =>
    setPayments([...payments, { payment_method_id: "", amount: 0 }]);
  const removePayment = (index) =>
    setPayments(payments.filter((_, i) => i !== index));
  const navigate = useNavigate();
  const handleSave = async () => {
    const payload = {
      supplier_id: supplier,
      date,
      items,
      payments,
      amount,
      tax,
      total,
      note,
    };

    try {
      if (editData) {
        await updatePurchases(editData.id, payload);
        toast.success("تم التعديل بنجاح");
        navigate("/purchases");
      } else {
        await createPurchases(payload);
        toast.success("تمت الإضافة بنجاح");
        navigate("/purchases");
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.msg || "حدث خطأ أثناء الحفظ");
    }
  };

  if (
    suppliersQuery.isLoading ||
    productsQuery.isLoading ||
    settingsLoading ||
    paymentMethodsQuery.isLoading
  ) {
    return <Loader />;
  }

  return (
    <section className="main-section" dir="rtl">
      <div className="container">
        <div className="d-flex mb-3 gap-3 align-items-center">
          <h4 className="main-heading m-0">
            {editData ? "تعديل مشتريات" : "إضافة مشتريات"}
          </h4>
        </div>

        <div className="section-content p-4 bg-white rounded-3 shadow">
          <div className="row">
            {/* المورد */}
            <div className="col-md-4">
              <Form.Group className="mb-2">
                <Form.Label>المورد</Form.Label>
                <Select
                  options={suppliersQuery.data?.data?.map((s) => ({
                    value: s.id,
                    label: s.name,
                  }))}
                  value={
                    suppliersQuery.data?.data
                      ?.map((s) => ({ value: s.id, label: s.name }))
                      .find((opt) => opt.value == supplier) || null
                  }
                  onChange={(opt) => setSupplier(opt.value)}
                  placeholder="اختر المورد"
                  isClearable
                />
              </Form.Group>
            </div>

            {/* التاريخ */}
            <div className="col-md-4">
              <Form.Group className="mb-2">
                <Form.Label>التاريخ</Form.Label>
                <Form.Control
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Form.Group>
            </div>

            <div className="col-12 mt-3">
              <div className="table-responsive">
                <Table bordered hover className="text-center">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>المنتج</th>
                      <th>الكمية</th>
                      <th>سعر التكلفة</th>
                      <th>سعر البيع</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <Select
                            options={productsQuery.data?.data?.map((p) => ({
                              value: p.id,
                              label: p.name,
                            }))}
                            value={
                              productsQuery.data?.data
                                ?.map((p) => ({ value: p.id, label: p.name }))
                                .find((opt) => opt.value == item.item_id) ||
                              null
                            }
                            onChange={(opt) =>
                              handleItemChange(index, "item_id", opt.value)
                            }
                            placeholder="اختر المنتج"
                            isClearable
                            isSearchable
                          />
                        </td>
                        <td>
                          <Form.Control
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) =>
                              handleItemChange(
                                index,
                                "quantity",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            type="number"
                            min="0"
                            value={item.cost_price}
                            onChange={(e) =>
                              handleItemChange(
                                index,
                                "cost_price",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Form.Control
                            type="number"
                            min="0"
                            value={item.selling_price}
                            onChange={(e) =>
                              handleItemChange(
                                index,
                                "selling_price",
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          {index > 0 && (
                            <Button
                              variant="danger"
                              size="sm"
                              onClick={() => removeItem(index)}
                            >
                              <FaTrash />
                            </Button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="5"></td>
                      <td>
                        <Button variant="success" size="sm" onClick={addItem}>
                          <FaPlus />
                        </Button>
                      </td>
                    </tr>
                  </tfoot>
                </Table>
              </div>
            </div>

            {/* الضريبة */}
            <div className="col-md-4">
              <Form.Group className="mb-2">
                <Form.Label>الضريبة (%)</Form.Label>
                <Form.Control
                  type="number"
                  value={tax}
                  onChange={(e) => setTax(e.target.value)}
                />
              </Form.Group>
            </div>

            <div className="col-md-4">
              <Form.Group className="mb-2">
                <Form.Label>المبلغ الإجمالي</Form.Label>
                <Form.Control
                  type="number"
                  value={amount.toFixed(2)}
                  readOnly
                />
              </Form.Group>
            </div>

            <div className="col-md-4">
              <Form.Group className="mb-2">
                <Form.Label>المجموع الكلي</Form.Label>
                <Form.Control type="number" value={total.toFixed(2)} readOnly />
              </Form.Group>
            </div>

            {/* جدول المدفوعات */}
            <div className="col-md-12">
              <Table bordered hover className="text-center mt-3">
                <thead>
                  <tr>
                    <th colSpan="4">
                      المدفوعات{" "}
                      <Button variant="success" size="sm" onClick={addPayment}>
                        <FaPlus />
                      </Button>
                    </th>
                  </tr>
                  <tr>
                    <th>#</th>
                    <th>طريقة الدفع</th>
                    <th>المبلغ</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((payment, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <Select
                          options={paymentMethodsQuery.data?.data?.map(
                            (pm) => ({
                              value: pm.id,
                              label: pm.name,
                            })
                          )}
                          value={
                            paymentMethodsQuery.data?.data
                              ?.map((pm) => ({ value: pm.id, label: pm.name }))
                              .find(
                                (opt) => opt.value == payment.payment_method_id
                              ) || null
                          }
                          onChange={(opt) =>
                            handlePaymentChange(
                              index,
                              "payment_method_id",
                              opt.value
                            )
                          }
                          placeholder="اختر طريقة الدفع"
                          isClearable
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="number"
                          min="0"
                          step="0.01"
                          value={payment.amount}
                          onChange={(e) =>
                            handlePaymentChange(index, "amount", e.target.value)
                          }
                        />
                      </td>
                      <td>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => removePayment(index)}
                        >
                          <FaTrash />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            {/* ملاحظة */}
            <div className="col-12 mb-3">
              <Form.Group>
                <Form.Label>ملاحظة</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="اكتب ملاحظة..."
                />
              </Form.Group>
            </div>

            {/* زر الحفظ */}
            <div className="col-md-12">
              <Button variant="success" onClick={handleSave}>
                {editData ? "تعديل" : "حفظ"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
