import debounce from "lodash.debounce";
import { useEffect, useMemo, useState } from "react";

/* Types */
interface Iconfig {
  width: number;
  height: number;
}

type SizesType = {
  xs: any;
  sm: any;
  md: any;
  lg: any;
  xl: any;
  "2xl": any;
};

export const BREAKPOINTS = {
  xs: 420,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<Iconfig>({
    width: 0,
    height: 0,
  });

  const breakpoints = useMemo(() => BREAKPOINTS, []);

  useEffect(() => {
    // Handler to call on window resize

    const handleResize = debounce(
      () => {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,

          height: window.innerHeight,
        });
      },
      50,
      { trailing: true }
    );

    // Add event listener

    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size

    handleResize();

    // Remove event listener on cleanup

    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  /* Handlers */
  const setBPStyles = (sizes: SizesType) => {
    const bps = ["xs", "sm", "md", "lg", "xl", "2xl"] as const;
    let result = "";
    bps.forEach((bp) => {
      const value = sizes[bp];
      if (typeof value === "undefined") return;

      if (windowSize.width < breakpoints[bp]) result = value;
    });

    return result;
  };

  return { sizes: windowSize, bp: breakpoints, setBPStyles };
}
