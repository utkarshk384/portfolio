import { useEffect, useState } from "react";

type returnType<T = boolean> = [boolean, (val: T) => void];

function usePrefersDarkMode(): boolean {
  const [value, setValue] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setValue(mediaQuery.matches);

    const handler = (): void => setValue(mediaQuery.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return value;
}

export function useDark(): returnType {
  const prefersDarkMode = usePrefersDarkMode();
  const [isDark, setDark] = useState(prefersDarkMode);

  useEffect(() => {
    if (window === undefined) return;
    const root = window.document.documentElement;

    setTheme(root, isDark ? "dark" : "light");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDark]);

  useEffect(() => {
    if (window === undefined) return;
    setDark(prefersDarkMode);
  }, [prefersDarkMode]);

  return [isDark, setDark];
}

function setTheme(root: HTMLElement, theme: "dark" | "light") {
  root.dataset.theme = theme;
}

export const DarkClientComponent = () => {
  useDark();

  return <></>;
};
