"use client";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import React, { useEffect, useRef } from "react";

/* Layouts */
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

type Props = {
  children?: React.ReactNode;
};

const MapNumbertoRoute = (num: number) => {
  if (num === 0) return "home";
  else if (num === 1) return "about";
  else if (num === 2) return "experience";
  else if (num === 3) return "projects";
  else if (num === 4) return "tools";
  else return "home";
};

export const LayoutWrapper: React.FC<Props> = (props) => {
  const {} = props;

  /* Stores */
  const { setRoute } = useNavigationStore();

  /* Refs */
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);

  /* Hooks */
  const actionSection = useScrollSpy({
    activeSectionDefault: 0,
    refs: [heroRef, aboutRef, experienceRef, projectsRef, toolsRef],
    throttleMs: 500,
  });

  useEffect(() => {
    const route = MapNumbertoRoute(actionSection);
    setRoute(route);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionSection]);

  return (
    <>
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
    </>
  );
};
