import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useTimeline = <T extends HTMLElement>(
  vars?: gsap.TimelineVars,
  scope?: T | null
) => {
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    if (scope === null) {
      timeline.current = gsap.timeline(vars);
      return;
    }

    const ctx = gsap.context(() => {
      timeline.current = gsap.timeline(vars);
    }, scope);

    return () => {
      ctx.revert();
      timeline.current?.kill();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return timeline as React.MutableRefObject<gsap.core.Timeline>;
};
