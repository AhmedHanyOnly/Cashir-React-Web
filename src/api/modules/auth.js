
import api from "../client";

export async function login(payload) {
  const { data } = await api.post("/api/login", payload);
  return data; 
}
export async function logout() {
  const { data } = await api.post("/api/logout");
  return data; 
}
