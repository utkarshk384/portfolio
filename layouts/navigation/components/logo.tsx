import _ from "lodash";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { TextPlugin } from "gsap/dist/TextPlugin";

/* Stores */
import { useNavigationStore } from "@/src/stores";

/* Data */
import { data } from "@/src/data";

/* Types */
import type { Routes } from "@/src/stores/navigation";

const Logo: React.FC = () => {
  const { route } = useNavigationStore();
  const UpperTextRef = useRef<HTMLParagraphElement>(null);
  const LowerTextRef = useRef<HTMLParagraphElement>(null);
  const tl = useRef(gsap.timeline());

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
  }, []);

  useEffect(() => {
    GSAPAnimation(
      tl.current,
      [
        UpperTextRef.current as HTMLParagraphElement,
        LowerTextRef.current as HTMLParagraphElement,
      ],
      route
    );
  }, [route]);

  return (
    <p className="flex flex-col pt-4 text-navigation">
      <span className="block h-1/2 text-content" ref={UpperTextRef}></span>
      <span
        id="dynamic-text"
        className="block text-accent"
        ref={LowerTextRef}
      ></span>
    </p>
  );
};

const GSAPAnimation = (
  tl: gsap.core.Timeline,
  refs: HTMLParagraphElement[],
  route: Routes
): void => {
  const [firstTextRef, secondTextRef] = refs;

  const tweenConfig: gsap.TweenVars = {
    text: {
      value: "",
    },
    yoyo: true,
    duration: 1,
  };

  let firstTextValue = "",
    secondTextValue = "";
  const text = data.navigationText[route];
  firstTextValue = text[0];
  secondTextValue = text[1];

  tl.to(firstTextRef, { ...tweenConfig, text: { value: firstTextValue } }).to(
    secondTextRef,
    {
      ...tweenConfig,
      text: { value: secondTextValue },
    }
  );
};

export default Logo;
