import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

import { Heading, Text } from "@/components";
import { useUniqueId } from "@/src/hooks";
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const TextEase = CustomEase.create(
  "custom",
  "M0,0 C0.126,0.382 0.392,0.128 0.592,0.226 0.738,0.298 0.818,1.001 1,1 "
);
gsap.registerPlugin(CustomEase);
gsap.registerEase("TextEase", TextEase);

type Props = {
  children?: React.ReactNode;
};

export const HeroText: React.FC<Props> = (props) => {
  const {} = props;

  /* Refs */
  const animationRef = useRef<HTMLDivElement | null>(null);

  /* Memos */
  const texts = useMemo(
    () => [
      "Full-stack Developer",
      "UX Designer",
      "Musicophile",
      "Cloud Enthusiast",
    ],
    []
  );
  const uniqueTextId = useUniqueId("text-");
  const tl = useRef<gsap.core.Timeline | null>(null);

  /* Effects */

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true, repeat: -1 });
    const height = 70,
      duration = 1;

    let ctx = gsap.context(() => {
      texts.map((_, i) => {
        gsap.set(`h2[data-text-index="${i}"]`, {
          y: height,
        });
      });

      tl.current?.to(`h2[data-text-index]`, {
        y: 0,
        duration,
        ease: "power1.inOut",
        stagger: 1,
      });
      tl.current?.to(`h2[data-text-index]`, {
        y: -height,
        ease: "power1.inOut",
        stagger: 1,
        delay: -texts.length * 0.65,
      });
    }, animationRef);
    tl.current.play();

    return () => {
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative" ref={animationRef}>
      <div className="relative overflow-hidden h-14">
        {texts.map((text, i) => (
          <Heading
            as="h2"
            className="absolute"
            data-text-index={i}
            size="44"
            color="accent"
            weight="700"
            key={uniqueTextId + i}
          >
            {text}
          </Heading>
        ))}
      </div>
    </div>
  );
};
