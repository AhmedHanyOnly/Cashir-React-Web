import api from "../client";

export async function getSuppliers() {
  const { data } = await api.get("/api/suppliers");
  return data;
}

export async function createSuppliers(payload) {
  const { data } = await api.post("api/suppliers", payload);
  return data;
}

export async function updateSuppliers( id, payload) {
  const { data } = await api.post(`/api/suppliers/${id}`, payload);
  return data;
}
export async function deleteSuppliers(id) {
  const { data } = await api.delete(`/api/suppliers/${id}`);
  return data;
}