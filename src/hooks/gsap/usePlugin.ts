import gsap from "gsap";
import { useEffect } from "react";

type PluginType = Function[];

export const usePlugin = (...plugin: PluginType) => {
  useEffect(() => {
    gsap.registerPlugin(...plugin);
  }, [plugin]);
};
