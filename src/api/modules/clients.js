import api from "../client";

export async function getClients() {
  const { data } = await api.get("/api/clients");
  return data;
}

export async function createClient(payload) {
  const { data } = await api.post("api/clients", payload);
  return data;
}

export async function updateClient( id, payload) {
  const { data } = await api.put(`/api/clients/${id}`, payload);
  return data;
}
export async function deleteClient(id) {
  const { data } = await api.delete(`/api/clients/${id}`);
  return data;
}