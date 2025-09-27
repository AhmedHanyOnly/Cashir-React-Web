import api from "../client";

export async function getProducts() {
  const { data } = await api.get("/api/items");
  return data;
}

export async function createProduct(payload) {
  const { data } = await api.post("/api/items", payload);
  return data;
}

export async function updateProduct( id, payload) {
  const { data } = await api.post(`/api/items/${id}`, payload);
  return data;
}
export async function deleteProduct(id) {
  const { data } = await api.delete(`/api/items/${id}`);
  return data;
}