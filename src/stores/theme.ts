import { create } from "zustand";

export type ThemeValues = "dark" | "light";

type ThemeState = {
  currentTheme: ThemeValues;
  isDark: boolean;
  setTheme: (theme: ThemeValues) => void;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  currentTheme: "dark",
  isDark: true,
  setTheme: (val) => set({ currentTheme: val, isDark: val === "dark" }),
  toggleTheme: () =>
    set((state) => {
      const updatedTheme = state.currentTheme === "dark" ? "light" : "dark";
      return {
        currentTheme: updatedTheme,
        isDark: updatedTheme === "dark",
      };
    }),
}));
