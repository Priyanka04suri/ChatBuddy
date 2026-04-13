import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("my-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("my-theme", theme);
    set({ theme });
  },
}));
