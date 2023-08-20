"use client";

import React from "react";

/* Hooks */
import { HeroText } from "./heroText";

/* Components */
import { Heading } from "@/components";
import { LightDarkIcon } from "./SunMoonIcon";
import { HeroWave } from "./heroWave";

/* Types */
type Props = {
  children?: React.ReactNode;
};

export const HeroSection: React.FC<Props> = (props) => {
  const {} = props;

  return (
    <div id="#portfolio" className="container relative h-[80vh]">
      <div className="pt-48 main-container text-primary">
        <LightDarkIcon />
        <Heading>Hey there 👋, I am Utkarsh Kumar a</Heading>
        <HeroText />
        <HeroWave />
      </div>
    </div>
  );
};
