import gsap from "gsap";
import React, { useEffect, useRef } from "react";

/* Components */
import { MoonIcon, SunIcon } from "@/components";

/* Stores */
import { useThemeStore } from "@/src/stores";

export const LightDarkIcon: React.FC = () => {
  const { isDark, setTheme } = useThemeStore(({ isDark, setTheme }) => ({
    isDark,
    setTheme,
  }));

  const tl = useRef(
    gsap.timeline({ paused: true, defaults: { duration: 0.25 } })
  );
  const moonRef = useRef(null);
  const sunRef = useRef(null);

  useEffect(() => {
    if (isDark) gsap.set(sunRef.current, { opacity: 0, paddingTop: "1.75rem" });
    else gsap.set(moonRef.current, { opacity: 0 });

    // tl.current
    // 	.to(moonRef.current, { opacity: 0, y: -20 })
    // 	.to(sunRef.current, { opacity: 1, x: -5, y: 25 })
    tl.current
      .fromTo(
        moonRef.current,
        { transformOrigin: "150px 150px", rotate: 0 },
        { opacity: 0, rotate: 90 }
      )
      .fromTo(
        sunRef.current,
        { transformOrigin: "150px 150px", rotate: -135 },
        { opacity: 1, rotate: 0 }
      );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isDark) tl.current.play();
    else tl.current.reverse();
  }, [isDark]);

  return (
    <div
      className="absolute top-0 -translate-x-1/2 left-[40vw] md:left-3/4 md:translate-x-0"
      role="button"
      tabIndex={0}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <span
        ref={moonRef}
        className="absolute mt-16"
        style={{ pointerEvents: isDark ? "visible" : "none" }}
      >
        <MoonIcon
          className="absolute fill-neutral-gray"
          width={86}
          height={86}
        />
      </span>
      <i
        ref={sunRef}
        className="absolute"
        style={{ pointerEvents: isDark ? "none" : "visible" }}
      >
        <SunIcon height={108} width={108} />
      </i>
    </div>
  );
};
