import api from "../client";

export async function getPurchases() {
  const { data } = await api.get("/api/purchases");
  return data;
}

export async function createPurchases(payload) {
  const { data } = await api.post("api/purchases", payload);
  return data;
}

export async function updatePurchases( id, payload) {
  const { data } = await api.put(`/api/purchases/${id}`, payload);
  return data;
}
export async function deletePurchases(id) {
  const { data } = await api.delete(`/api/purchases/${id}`);
  return data;
}