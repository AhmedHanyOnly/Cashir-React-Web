import api from "../client";

// جلب بيانات الإعدادات
export async function getSettings() {
  const { data } = await api.get("api/settings");
  return data;
}

// تحديث بيانات الإعدادات
export async function updateSettings(payload) {
  const { data } = await api.post("api/settings", payload);
  return data;
}