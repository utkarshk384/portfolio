import { create } from "zustand";

export type Routes = "home" | "about" | "experience" | "projects" | "tools";

type NavigationState = {
  isDrawerOpen: boolean;
  setDrawerOpen: (value: boolean) => void;
  route: Routes;
  setRoute: (route: Routes) => void;
};

const navigationStore = create<NavigationState>((set) => ({
  isDrawerOpen: false,
  setDrawerOpen: (val) => set((state) => ({ ...state, isDrawerOpen: val })),
  route: "home",
  setRoute: (route) => set((state) => ({ ...state, route })),
}));

export const useNavigationDrawer = () =>
  navigationStore(({ isDrawerOpen, setDrawerOpen }) => ({
    isDrawerOpen,
    setDrawerOpen,
  }));

export const useNavigationStore = () =>
  navigationStore(({ route, setRoute }) => ({ route, setRoute }));
