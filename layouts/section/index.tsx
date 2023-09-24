"use client";

import React from "react";

/* Styled */
import { Heading, Text } from "@/components";
import { SectionContainer, SectionTitleContainer } from "./styled";

type Props = {
  children?: React.ReactNode;
  titleText: string;
  titleId: string;
  depth: string;
  className?: string;
  isLast?: boolean;
};

export const Section: React.FC<Props> = (props) => {
  const { titleText, titleId, depth, className = "", isLast = false } = props;
  return (
    <SectionContainer>
      <SectionTitleContainer isLast={isLast}>
        <div
          className={`absolute  -left-5 ${
            isLast
              ? "translate-y-[300%] -translate-x-[120%]"
              : "translate-y-3/4 -translate-x-full"
          }`}
        >
          <Text weight="700" size="24">
            {depth}
          </Text>
        </div>
        <Heading
          className="pl-12"
          id={titleId}
          as="h2"
          size="64"
          color="accent"
          weight="700"
        >
          {titleText}
        </Heading>
      </SectionTitleContainer>
      <div className={`pt-16 pl-12 ${className}`}>{props.children}</div>
    </SectionContainer>
  );
};
