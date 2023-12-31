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
};

export const Section: React.FC<Props> = (props) => {
  const { titleText, titleId, depth, className = "" } = props;
  return (
    <SectionContainer>
      <SectionTitleContainer>
        <div className="absolute -translate-x-full -left-5 translate-y-3/4">
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
