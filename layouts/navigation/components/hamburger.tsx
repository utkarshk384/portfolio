import gsap from "gsap";
import { useEffect, useRef } from "react";

/* Stores */
import { useNavigationStore } from "@/src/stores";

/* Animations */
import { HamburgerAnim } from "../animations";

export const Hamburger: React.FC = () => {
  const { isDrawerOpen, setDrawerOpen } = useNavigationStore();

  const rootRef = useRef<HTMLButtonElement>(null);
  let timeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      timeline.current = gsap.timeline({ paused: true });
      HamburgerAnim(timeline.current!);
    }, rootRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isDrawerOpen) timeline.current?.play();
    else timeline.current?.reverse();
  }, [isDrawerOpen]);

  useEffect(() => {
    console.log({ isDrawerOpen });
  }, [isDrawerOpen]);
  const handleClick = (): void => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="z-20 lg:hidden">
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
    height={64}
    width={64}
    viewBox="0 0 46.27 32.26"
    className="fill-current"
  >
    <rect id="rect-one" width={46.27} height={6.23} rx={2.67} />
    <rect id="rect-two" y={13.02} width={46.27} height={6.23} rx={2.67} />
    <rect id="rect-three" y={26.03} width={46.27} height={6.23} rx={2.67} />
  </svg>
);
