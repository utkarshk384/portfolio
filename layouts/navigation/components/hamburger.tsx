import gsap from "gsap";
import { useEffect, useRef } from "react";

/* Stores */
import { useNavigationDrawer } from "@/src/stores";

/* Animations */
import { HamburgerAnim } from "../animations";
import useWindowSize from "@/src/hooks/useWindowSize";

export const Hamburger: React.FC = () => {
  /* Store */
  const { isDrawerOpen, setDrawerOpen } = useNavigationDrawer();

  /* Hooks */
  const { sizes, bp } = useWindowSize();

  /* Refs */
  const rootRef = useRef<HTMLButtonElement>(null);
  let timeline = useRef<gsap.core.Timeline | null>(null);

  /* Effects */
  useEffect(() => {
    let ctx = gsap.context(() => {
      timeline.current = gsap.timeline({ paused: true });
      HamburgerAnim(timeline.current!);
    }, rootRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (sizes.width > bp.md) setDrawerOpen(false);
  }, [bp.md, setDrawerOpen, sizes.width]);

  useEffect(() => {
    if (isDrawerOpen) timeline.current?.play();
    else timeline.current?.reverse();
  }, [isDrawerOpen]);

  /* Handlers */
  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div
      className={`z-20 lg:hidden ${isDrawerOpen ? "pointer-events-none" : ""}`}
    >
      <button ref={rootRef} className="text-primary" onClick={handleClick}>
        <Icon />
      </button>
    </div>
  );
};

const Icon: React.FC = () => (
  <svg
    id="prefix__Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    height={32}
    width={32}
    viewBox="0 0 46.27 32.26"
    className="fill-current"
  >
    <rect id="rect-one" width={46.27} height={6.23} rx={2.67} />
    <rect id="rect-two" y={13.02} width={46.27} height={6.23} rx={2.67} />
    <rect id="rect-three" y={26.03} width={46.27} height={6.23} rx={2.67} />
  </svg>
);
