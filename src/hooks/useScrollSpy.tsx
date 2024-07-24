/* 
    Code Credits - https://github.com/Purii/react-use-scrollspy/blob/main/src/index.ts
*/

import throttle from "lodash/fp/throttle";
import React, { useState, useEffect, useMemo } from "react";

export interface Params {
  activeSectionDefault?: number;
  offsetPx?: number;
  refs: React.RefObject<HTMLElement>[];
  throttleMs?: number;
  scrollingElement?: React.RefObject<HTMLElement>;
}
export const useScrollSpy = (params: Params) => {
  const {
    activeSectionDefault = 0,
    offsetPx = 0,
    scrollingElement,
    refs = [],
    throttleMs = 100,
  } = params;

  const sectionElementRefs = useMemo(() => refs, [refs]);

  const [activeSection, setActiveSection] = useState(activeSectionDefault);

  const handle = throttle(throttleMs, () => {
    let currentSectionId = activeSection;
    for (let i = 0; i < sectionElementRefs.length; i += 1) {
      const section = sectionElementRefs[i].current;
      // Needs to be a valid DOM Element
      if (!section || !(section instanceof Element)) continue;
      // GetBoundingClientRect returns values relative to viewport
      if (section.getBoundingClientRect().top + offsetPx < 0) {
        currentSectionId = i;
        continue;
      }
      // No need to continue loop, if last element has been detected
      break;
    }

    setActiveSection(currentSectionId);
  });

  useEffect(() => {
    const scrollable = scrollingElement?.current ?? window;
    scrollable.addEventListener("scroll", handle);
    // Run initially
    handle();

    return () => {
      scrollable.removeEventListener("scroll", handle);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return activeSection;
};
