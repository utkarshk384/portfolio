"use client";

import gsap from "gsap";
import React, { useEffect, useMemo } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

/* Styled */
import { Heading, Text } from "@/components";
import { SectionContainer, SectionTitleContainer } from "./styled";

/* Hook */
import { usePlugin, useTweens } from "@/src/hooks/gsap";

/* Utils */
import mergeRefs from "@/src/utils/mergeRefs";

type Props = {
  children?: React.ReactNode;
  titleText: string;
  titleId: string;
  depth: string;
  className?: string;
  isLast?: boolean;
  wrapperClassName?: string;
};

const Animation = (
  ctx: gsap.Context,
  id: string,
  ref: React.MutableRefObject<HTMLDivElement>
) => {
  gsap.to(`#${id}`, {
    opacity: 0,
    scrollTrigger: {
      trigger: ref.current,
      scrub: 0,
      markers: true,
      start: "top 25%",
      end: "75% top",
    },
  });
};

export const Section = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    titleText,
    titleId,
    depth,
    className = "",
    isLast = false,
    wrapperClassName = "",
  } = props;

  /* Memos */
  const innerDivId = useMemo(() => `${titleId}-inner-container`, [titleId]);

  usePlugin(ScrollTrigger);
  const scopeRef = useTweens((ctx, ref) => Animation(ctx, innerDivId, ref));

  return (
    <SectionContainer
      id={`${titleId}-container`}
      ref={mergeRefs(scopeRef, ref)}
      className={wrapperClassName}
    >
      <SectionTitleContainer isLast={isLast}>
        <div
          className={`absolute -left-5 ${
            isLast
              ? "translate-y-[300%] -translate-x-[120%]"
              : "translate-y-3/4 -translate-x-full"
          }`}
        >
          <Text
            weight="700"
            size="24"
            className="-rotate-90 translate-x-5 xl:rotate-0 xl:translate-x-0"
          >
            {depth}
          </Text>
        </div>
        <div id={innerDivId}>
          <Heading
            className="pl-12 mt-4 lg:mt-0"
            id={titleId}
            as="h2"
            size="64"
            color="accent"
            weight="700"
          >
            {titleText}
          </Heading>
        </div>
      </SectionTitleContainer>
      <div className={`pt-16 pl-12 ${className}`}>{props.children}</div>
    </SectionContainer>
  );
});

Section.displayName = "Section";
