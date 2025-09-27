import api from "../client";

export async function getInvoices() {
  const { data } = await api.get("/api/invoices");
  return data;
}

export async function createInvoices(payload) {
  const { data } = await api.post("api/invoices", payload);
  return data;
}

export async function updateInvoices( id, payload) {
  const { data } = await api.put(`/api/invoices/${id}`, payload);
  return data;
}
export async function deleteInvoices(id) {
  const { data } = await api.delete(`/api/invoices/${id}`);
  return data;
}