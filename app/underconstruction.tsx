"use client";

import React from "react";
import { styled } from "@stitches/react";
import { Player } from "@lottiefiles/react-lottie-player";

/* Animation */
import * as underConstruction from "@/animations/under_construction.json";
import { Heading, Text } from "@/components";

type Props = {
  children?: React.ReactNode;
};

export const UnderConstruction: React.FC<Props> = (props) => {
  const {} = props;
  return (
    <GlassBg className="scale-x-125">
      <div className="grid w-3/4 h-full mx-auto place-items-center">
        <div className="flex flex-col justify-center">
          <Player src={underConstruction} autoplay className="h-[20rem]" loop />
          <div className="flex flex-col justify-center gap-2">
            <Heading className="text-center" size="44">
              Coming Soon
            </Heading>
            <Text className="text-center">Stay Tuned!</Text>
          </div>
        </div>
      </div>
    </GlassBg>
  );
};

const GlassBg = styled("div", {
  position: "absolute",
  top: "2rem",
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(255, 255, 255, 0.32)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(16px)",
  "-webkit-backdrop-filter": "blur(16px)",
});
