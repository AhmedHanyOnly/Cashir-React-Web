import api from "../client";

export async function getPaymentMethods() {
  const { data } = await api.get("/api/payment-methods");
  return data;
}

export async function createPaymentMethods(payload) {
  const { data } = await api.post("api/payment-methods", payload);
  return data;
}

export async function updatePaymentMethods( id, payload) {
  const { data } = await api.put(`/api/payment-methods/${id}`, payload);
  return data;
}
export async function deletePaymentMethods(id) {
  const { data } = await api.delete(`/api/payment-methods/${id}`);
  return data;
}