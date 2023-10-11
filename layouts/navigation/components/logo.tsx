import _ from "lodash";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { TextPlugin } from "gsap/dist/TextPlugin";

/* Stores */
import { useNavigationStore } from "@/src/stores";

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
    // <div
    // 	className={`flex flex-col flex-nowrap items-center ${
    // 		visible
    // 			? ""
    // 			: "px-4 pb-7 -ml-2 rounded-2xl justify-between bg-secondary bg-opacity-80 backdrop-blur-xl"
    // 	}`}
    // >
    // 	<div className={`${styles["logo"]} `}>
    // 		<p className="text-primary" ref={UpperTextRef}></p>
    // 	</div>
    // 	<div className={`${styles["logo"]}`}>
    // 		<p className="text-accent" ref={LowerTextRef}></p>
    // 	</div>
    // </div>
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
  switch (route) {
    case "home":
      (firstTextValue = "Utkarsh's"), (secondTextValue = "Portfolio");
      break;
    case "about":
      (firstTextValue = "About"), (secondTextValue = "Me");
      break;
    case "experience":
      (firstTextValue = "My"), (secondTextValue = "Experiences");
      break;
    case "projects":
      (firstTextValue = "My"), (secondTextValue = "Projects");
      break;
    case "tools":
      (firstTextValue = "My"), (secondTextValue = "Tools");
      break;
  }

  tl.to(firstTextRef, { ...tweenConfig, text: { value: firstTextValue } }).to(
    secondTextRef,
    {
      ...tweenConfig,
      text: { value: secondTextValue },
    }
  );
};

export default Logo;
