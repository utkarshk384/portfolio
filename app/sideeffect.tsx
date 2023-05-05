"use client";

import { useThemeStore } from "@/src/stores";
import React, { useEffect } from "react";

type Props = {
  children?: React.ReactNode;
};

export const SideEffects: React.FC<Props> = (props) => {
  const {} = props;

  const currentTheme = useThemeStore((state) => state.currentTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  return <></>;
};
