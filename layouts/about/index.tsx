"use client";

import gsap from "gsap";
import React from "react";
import Image from "next/image";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

/* Components */
import { Text } from "@/components";
import { Section } from "../section";

/* Hooks */
import { BREAKPOINTS } from "@/src/hooks/useWindowSize";
import { usePlugin, useTimeline, useTweens } from "@/src/hooks/gsap";

/* Utils */
import mergeRefs from "@/src/utils/mergeRefs";

/* Types */
import type { gsapTl, gsapCtx } from "@src/hooks/gsap";

type Props = {
  children?: React.ReactNode;
};

const Animiation = (ctx: gsapCtx, tl: gsapTl) => {
  const mm = gsap.matchMedia();

  tl.current.from(".animation-text", {
    duration: 0.5,
    y: "100%",
    opacity: 1,
    stagger: {
      each: 0.2,
    },
    ease: "power3.out",
  });

  mm.add(`(max-width: ${BREAKPOINTS.xl}px)`, () => {
    gsap.set("#profile-image", {
      y: 0,
    });
  });

  mm.add(`(min-width: ${BREAKPOINTS.xl}px)`, () => {
    gsap.set("#profile-image", {
      y: "-100px",
    });

    gsap.to("#profile-image", {
      duration: 0.5,
      delay: -0.5,
      scrollTrigger: {
        trigger: "#about-container",
        scrub: 1.5,
        start: "10% top",
        end: "40% 40%",
      },
      y: "+=200px",
    });
  });
};

export const AboutMe = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {} = props;

  usePlugin(ScrollTrigger);
  const scopeRef = useTweens<HTMLDivElement>((ctx) => {
    Animiation(ctx, tl);
  });

  const tl = useTimeline({}, scopeRef.current);

  return (
    <Section
      ref={mergeRefs(ref, scopeRef)}
      wrapperClassName="body-line body-line-t-rounded"
      depth="100 Mts"
      titleId="about"
      titleText="About Me"
    >
      <div className="flex flex-col-reverse xl:grid grid-cols-[3fr_1fr] gap-12">
        <div
          data-trigger-box
          className="relative flex flex-col justify-center gap-4"
        >
          <div className="overflow-hidden">
            <Text className="animation-text" weight="500" size="20">
              Hello! My name is Utkarsh Kumar a vegetarian, an musicophile and a
              passionate full-stack developer from Bhutan. The genre of music
              that I usually listen to are pop, hip-hop, electronic and
              occasionally folk.
            </Text>
          </div>
          <div className="overflow-hidden">
            <Text className="animation-text" weight="500" size="20">
              I started to fiddle with code since 2013 by hitting{" "}
              <Text
                as="span"
                size="18"
                className="px-2 py-1 rounded-lg bg-accent !text-black"
              >
                F12
              </Text>{" "}
              to open the developer console so I can alter the HTML content of
              games website. This taught me a lot about how HTML, Javascript and
              CSS work to make an website and soon drove enough interest within
              me to become a well versed developer.
            </Text>
          </div>
          <div className="overflow-hidden">
            <Text className="animation-text" weight="500" size="20">
              I have worked with many technologies such as React JS, Express JS,
              Go Fiber, Django, Svelte, Solid JS etcetera and have also created
              websites that provide good UX to its users.
            </Text>
          </div>
        </div>
        <div
          id="profile-image"
          className="relative self-center overflow-hidden rounded-lg justify-self-end"
        >
          <div className="w-3/4 sm:w-full">
            <Image
              width={353}
              height={100}
              className="object-cover object-right"
              alt="Picture of Utkarsh Kumar"
              src="/my-picture.webp"
            />
          </div>
        </div>
      </div>
    </Section>
  );
});

AboutMe.displayName = "About Me";
