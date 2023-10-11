"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

/* Components */
import { Link } from "./components/link";
import { AnimatedBulb } from "@/components";
import { Hamburger, MobileDrawer } from "./components";

/* Stores */
import { useNavigationStore } from "@/src/stores/navigation";
import { BulbAnim } from "./animations";
import { useThemeStore } from "@/src/stores";
import { NavigationContainer } from "./styled";
import Logo from "./components/logo";

type Props = {
  children?: React.ReactNode;
};

export const Navigation: React.FC<Props> = (props) => {
  const {} = props;

  const { setRoute } = useNavigationStore();
  const { isDark, toggleTheme } = useThemeStore(({ isDark, toggleTheme }) => ({
    isDark,
    toggleTheme,
  }));

  const bulbRef = useRef<SVGSVGElement | null>(null);
  //Gsap Timeline
  const tl = useRef<gsap.core.Timeline>(
    gsap.timeline({
      transformOrigin: "top top",
      paused: true,
      defaults: { ease: "power2.out" },
      delay: -0.75,
    })
  );

  useEffect(() => {
    GsapAnimation(tl.current, isDark);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isDark) tl.current.reverse();
    else tl.current.play(0);
  }, [isDark]);

  useEffect(() => {
    const path = window.location.pathname;
    switch (path) {
      case "/":
        setRoute("home");
        break;
      case "/about":
        setRoute("about");
        break;
      case "/experience":
        setRoute("experience");
        break;
      case "/projects":
        setRoute("projects");
        break;
      case "/tools":
        setRoute("tools");
        break;
    }
  }, [setRoute]);

  return (
    <>
      <MobileDrawer />
      <NavigationContainer className="container">
        <div className="flex items-stretch gap-4">
          <AnimatedBulb ref={bulbRef} onClick={(e) => toggleTheme()} />
          <Logo />
        </div>
        <nav className="items-center hidden w-7/12 select-none lg:flex justify-evenly text-heading-4">
          <Link route="/#home" text="Home" />
          <Link route="/#about" text="About" />
          <Link route="/#experience" text="Experience" />
          <Link route="/#projects" text="Projects" />
          <Link route="/#tools" text="Tools" />
        </nav>
        <Hamburger />
      </NavigationContainer>
    </>
  );
};

const GsapAnimation = (tl: gsap.core.Timeline, isDark: boolean): void => {
  if (isDark) {
    gsap.set("#bulb--icon", { yPercent: -100, x: 1 });
    gsap.set("#bulb--thread", { yPercent: -35 });
    tl.to("#bulb--icon", { yPercent: 0, x: 1 }).to("#bulb--thread", {
      yPercent: 0,
      delay: -0.5,
    });
  } else {
    tl.to("#bulb--icon", { yPercent: -100, x: 1 }).to("#bulb--thread", {
      yPercent: -35,
      delay: -0.5,
    });
  }
};
