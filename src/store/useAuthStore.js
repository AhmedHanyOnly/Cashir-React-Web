import { create } from "zustand";

 const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem("token") || null,
  isAuth: !!localStorage.getItem("token"),

  setAuth: ({ user, token }) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", user);
    set({ user, token, isAuth: true });
  },

  logoutStore: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    set({ user: null, token: null, isAuth: false });
  },
}));

export default useAuthStore;