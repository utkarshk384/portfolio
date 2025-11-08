"use client";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import React, { useEffect, useRef } from "react";

/* Layouts */
import { Navigation } from "@/layouts/navigation";
import {
  Tooling,
  Footer,
  AboutMe,
  Experience,
  Projects,
  HeroSection,
} from "@/layouts";

/* Stores */
import { useNavigationStore } from "@/src/stores";

/* Hooks */
import { useScrollSpy } from "@/src/hooks/useScrollSpy";

const MapNumbertoRoute = (num: number) => {
  if (num === 0) return "home";
  else if (num === 1) return "about";
  else if (num === 2) return "experience";
  else if (num === 3) return "projects";
  else if (num === 4) return "tools";
  else return "home";
};

export default function Home() {
  /* Stores */
  const { setRoute } = useNavigationStore();

  /* Refs */
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);

  /* Hooks */
  const [actionSection, scrollIntoView] = useScrollSpy({
    activeSectionDefault: 0,
    refs: [heroRef, aboutRef, experienceRef, projectsRef, toolsRef],
    throttleMs: 500,
    offsetPx: -100,
  });

  useEffect(() => {
    console.log("Action", actionSection);
    const route = MapNumbertoRoute(actionSection);
    setRoute(route);
  }, [actionSection, setRoute]);

  return (
    <>
      <Navigation scrollIntoView={scrollIntoView} />

      <main id="main-container">
        <Tooltip id="my-tooltip" />
        <HeroSection ref={heroRef} />
        <div className="relative bg-gradient-bg">
          <div className="container !mx-[10%]">
            <AboutMe ref={aboutRef} />
            <div className="relative">
              <Experience ref={experienceRef} />
              <Projects ref={projectsRef} />
              <Tooling ref={toolsRef} />
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
