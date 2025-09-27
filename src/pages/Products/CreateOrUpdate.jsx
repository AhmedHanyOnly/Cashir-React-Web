import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCategories } from "../../hooks/useCategories";
import { useUnits } from "../../hooks/useUnits";
import { useProducts } from "../../hooks/useProducts";
import { Loader } from "../../components/Loader";
import { toast } from "sonner";

export function ProductForm() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { categoriesQuery } = useCategories();
  const { unitsQuery } = useUnits();
  const { createMutation, updateMutation } = useProducts();

  const categories = categoriesQuery.data?.data || [];
  const units = unitsQuery.data?.data || [];

  const [formData, setFormData] = useState({
    name: "",
    barcode: "",
    category_id: "",
    unit_id: "",
    image: null,
    price: "",
    unit_cost: "",
    opening_quantity: "",
    // quantity: "",
    allow_quantity: false,
    has_end_date: false,
    expiry_date: "",
  });

  useEffect(() => {
    if (state) {
      setFormData({
        name: state.name || "",
        barcode: state.barcode || "",
        category_id: state.category?.id || "",
        unit_id: state.unit?.id || "",
        image: state.image || null,
        price: state.price || "",
        unit_cost: state.unit_cost || "",
        // quantity: state.quantity || 0,
        allow_quantity: state.allow_quantity || false,
        has_end_date: !!state.expiry_date,
        opening_quantity: state.opening_quantity || "",
        expiry_date: state.expiry_date || "",
      });
    }
  }, [state]);

  const handleChange = (e) => {
    const { name, type, value, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();
    payload.append("_method", "PUT");
    payload.append("name", formData.name);
    payload.append("barcode", formData.barcode);
    payload.append("category_id", formData.category_id);
    payload.append("unit_id", formData.unit_id);
    payload.append("unit_cost", formData.unit_cost);
    payload.append("price", formData.price);
    payload.append("allow_quantity", formData.allow_quantity ? 1 : 0);
    payload.append("opening_quantity", formData.opening_quantity);
    payload.append("has_end_date", formData.has_end_date ? 1 : 0);
    if (formData.has_end_date)
      payload.append("expiry_date", formData.expiry_date);

    if (formData.image instanceof File) {
      payload.append("image", formData.image);
    }
    try {
      if (state) {
        await updateMutation.mutateAsync({
          id: state.id,
          data: payload,
        });
      } else {
        await createMutation.mutateAsync(payload);
      }
      toast.success(state ? "تم تحديث المنتج بنجاح" : "تم إضافة المنتج بنجاح");
      navigate("/products/");
    } catch (error) {
      const msg = error.response?.data?.msg || "حدث خطأ، حاول مرة أخرى";
      toast.error(msg);
    }
  };

  const onBack = () => navigate("/products/");

  // if (categoriesQuery.isLoading || unitsQuery.isLoading) return <Loader />;

  // if (categoriesQuery.isError || unitsQuery.isError)
  //   return (
  //     <p>
  //       حدث خطأ: {categoriesQuery.error?.message} {unitsQuery.error?.message}
  //     </p>
  //   );

  return (
    <div className="box-content">
      <button
        className="btn btn-primary btn-sm mb-3"
        onClick={onBack}
        type="button"
      >
        رجوع
      </button>

      <form className="row row-gap-24" onSubmit={handleSubmit}>
        {/* الاسم */}
        <div className="col-sm-6">
          <label className="small-label">الاسم</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* باركود */}
        <div className="col-sm-6">
          <div className="d-flex gap-3">
            <div className="d-flex flex-col grow">
              <label className="small-label">
                باركود{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-barcode-icon lucide-barcode"
                >
                  <path d="M3 5v14" />
                  <path d="M8 5v14" />
                  <path d="M12 5v14" />
                  <path d="M17 5v14" />
                  <path d="M21 5v14" />
                </svg>
              </label>
              <input
                className="form-control "
                type="text"
                name="barcode"
                value={formData.barcode}
                onChange={handleChange}
                style={{ width: "100%" }}
              />
            </div>
            <div className="d-flex flex-col grow">
              <label className="small-label">كود الصنف</label>
              <input
                className="form-control"
                type="text"
                name="barcode"
                value={formData.barcode}
                onChange={handleChange}
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>

        {/* الأقسام */}
        <div className="col-sm-6">
          <label className="small-label">الأقسام</label>
          <select
            className="form-control"
            name="category_id"
            value={formData.category_id}
            onChange={handleChange}
          >
            <option value="">اختر القسم</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        {/* الوحدة */}
        <div className="col-sm-6">
          <label className="small-label">الوحدة</label>
          {/* {console.log(units)} */}
          <select
            className="form-control"
            name="unit_id"
            value={formData.unit_id}
            onChange={handleChange}
          >
            <option value="">اختر الوحدة</option>
            {units.map((unit) => (
              <option key={unit.id} value={unit.id}>
                {unit.name}
              </option>
            ))}
          </select>
        </div>

        {/* صورة المنتج */}
        <div className="col-sm-6">
          <label>صورة المنتج</label>
          <input
            className="form-control img"
            type="file"
            accept="image/*"
            name="image"
            onChange={handleChange}
          />
          <img
            src={
              formData.image instanceof File
                ? URL.createObjectURL(formData.image)
                : formData.image ||
                  "https://cashir26.const-tech.in/img/no-image.jpg"
            }
            alt="preview"
            className="img-thumbnail mt-1 img-preview"
            width="200px"
          />
        </div>

        {/* الأسعار والكمية */}
        <div className="col-sm-6">
          <div className="d-flex gap-3">
            <div>
              <label className="small-label d-block">سعر الشراء</label>
              <input
                className="form-control"
                type="number"
                name="unit_cost"
                min="0"
                value={formData.unit_cost}
                onChange={handleChange}
                disabled={!formData.allow_quantity}
              />
            </div>
            <div>
              <label className="small-label d-block">سعر البيع</label>
              <input
                className="form-control"
                type="number"
                name="price"
                min="0"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
          </div>

          <small className="alert alert-primary mb-0 p-2 mt-3 d-block">
            في حال البيع بالكميه يجب التفعيل
          </small>

          <div className="d-flex align-items-end gap-3 mt-3">
            <div className="inp-holder">
              <label className="small-label d-block">الكمية الافتتاحية</label>
              <input
                className="form-control w-110px"
                type="text"
                name="opening_quantity"
                value={formData.opening_quantity}
                onChange={handleChange}
                disabled={!formData.allow_quantity}
              />
            </div>
            {/* 
            <div className="inp-holder">
              <label className="small-label d-block">الكمية المتوفرة</label>
              <input
                className="form-control w-110px"
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
              />
            </div> */}

            <div className="inp-holder d-flex align-items-center gap-1">
              <label className="small-label d-block mb-0">تفعيل الكمية</label>
              <input
                type="checkbox"
                name="allow_quantity"
                checked={formData.allow_quantity}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="d-flex mt-3 gap-3">
            <div className="inp-holder">
              <label className="small-label d-block mb-0">
                هل يوجد تاريخ انتهاء؟
              </label>
              <input
                type="checkbox"
                name="has_end_date"
                checked={formData.has_end_date}
                onChange={handleChange}
              />
            </div>
            {formData.has_end_date && (
              <div className="inp-holder">
                <label className="small-label d-block mb-0">
                  تاريخ انتهاء الصلاحية
                </label>
                <input
                  className="form-control w-150px"
                  type="date"
                  name="expiry_date"
                  value={formData.expiry_date}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
        </div>

        <div className="col-md-12 mt-3">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={createMutation.isLoading || updateMutation.isLoading}
          >
            {state
              ? updateMutation.isLoading
                ? "جاري التحديث..."
                : "تحديث"
              : createMutation.isLoading
              ? "جاري الحفظ..."
              : "حفظ"}
          </button>
        </div>
      </form>
    </div>
  );
}
