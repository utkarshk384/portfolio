import gsap from "gsap";
import React, { useCallback, useEffect, useRef } from "react";

/* Stores */
import { useNavigationDrawer } from "@/src/stores";

/* Components */
import { Link } from "./link";
import { Player } from "@/src/Player";

/* Layouts */
import { Drawer } from "@/components/drawer";

/* Lottie Animations */
import * as wave from "@/animations/wave.json";

type Props = {
  children?: React.ReactNode;
  scrollIntoView: (el: Element) => void;
};

export const MobileDrawer: React.FC<Props> = (props) => {
  const { scrollIntoView } = props;

  /* Stores */
  const { isDrawerOpen, setDrawerOpen } = useNavigationDrawer();

  /* Refs */
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline>(gsap.timeline({ paused: true }));

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current.fromTo(
        ".mobile-links",
        { opacity: 0, x: "50%" },
        { opacity: 1, x: "0%", stagger: 0.1, delay: 0.5 }
      );
    }, drawerRef);

    return () => ctx.revert();
  }, [isDrawerOpen]);

  const onMountAnimation = useCallback(() => {
    if (isDrawerOpen) {
      tl.current?.seek(0);
      tl.current?.play();
    } else tl.current?.reverse();
  }, [isDrawerOpen]);

  return (
    <div ref={drawerRef}>
      <Drawer
        isDrawerOpen={isDrawerOpen}
        contentClasses="overflow-hidden pt-14"
        setDrawerOpen={setDrawerOpen}
        onMount={onMountAnimation}
      >
        <div className="flex flex-col items-center gap-10 p-4 text-subheading-2">
          <Link
            scrollIntoView={scrollIntoView}
            className="mobile-links"
            route="/home"
            text="Home"
          />
          <Link
            scrollIntoView={scrollIntoView}
            className="mobile-links"
            route="/about"
            text="About"
          />
          <Link
            scrollIntoView={scrollIntoView}
            className="mobile-links"
            route="/experience"
            text="Experience"
          />
          <Link
            scrollIntoView={scrollIntoView}
            className="mobile-links"
            route="/projects"
            text="Projects"
          />
          <Link
            scrollIntoView={scrollIntoView}
            className="mobile-links"
            route="/tools"
            text="Tools"
          />
        </div>

        <div className="absolute left-0 flex flex-col w-full -bottom-10">
          <Player
            src={wave}
            style={{ width: "100%" }}
            loop
            controls
            autoplay={true}
          />
          <div className="w-full h-64 bg-primary" />
        </div>
      </Drawer>
    </div>
  );
};
