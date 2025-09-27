import api from "../client";

export async function getUnits() {
  const { data } = await api.get("/api/select/units");
  return data;
}

// export async function createUnit(payload) {
//   const { data } = await api.post("api/units", payload);
//   return data;
// }

// export async function updateUnit( id, payload) {
//   const { data } = await api.put(`/api/units/${id}`, payload);
//   return data;
// }
// export async function deleteUnit(id) {
//   const { data } = await api.delete(`/api/units/${id}`);
//   return data;
// }