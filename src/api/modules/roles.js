import api from "../client";

export async function getRoles() {
  const { data } = await api.get("/api/roles");
  return data;
}

export async function createRoles(payload) {
  const { data } = await api.post("api/roles", payload);
  return data;
}

export async function updateRoles( id, payload) {
  const { data } = await api.put(`/api/roles/${id}`, payload);
  return data;
}
export async function deleteRoles(id) {
  const { data } = await api.delete(`/api/roles/${id}`);
  return data;
}