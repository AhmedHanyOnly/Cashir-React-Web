import api from "../client";

export async function accountsSelect() {
  const { data } = await api.get("/api/select/accounts");
  return data;
}
export async function clientsSelect() {
  const { data } = await api.get("/api/select/clients");
  return data;
}
export async function paymentMethodsSelect() {
  const { data } = await api.get("/api/select/payment-methods");
  return data;
}
export async function categoriesSelect() {
  const { data } = await api.get("/api/select/categories");
  return data;
}
export async function suppliersSelect() {
  const { data } = await api.get("/api/select/suppliers");
  return data;
}
export async function productsSelect() {
  const { data } = await api.get("/api/select/items");
  return data;
}
