import { create } from "zustand";

export type Routes = "home" | "about" | "experience" | "projects" | "tools";

type NavigationState = {
  isDrawerOpen: boolean;
  setDrawerOpen: (value: boolean) => void;
  route: Routes;
  setRoute: (route: Routes) => void;
};

export const useNavigationStore = create<NavigationState>((set) => ({
  isDrawerOpen: false,
  setDrawerOpen: (val) => set({ isDrawerOpen: val }),
  route: "home",
  setRoute: (route) => set({ route }),
}));
