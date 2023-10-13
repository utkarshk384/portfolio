import React from "react";

/* Components */
import { Player } from "@/src/Player";

/* Hooks */
import { useLottie } from "@/src/hooks";

/* Wave */
import wave from "@/animations/wave.json";

export const HeroWave: React.FC = () => {
  const { playerRef, setLottie } = useLottie();

  return (
    <div className="absolute bottom-0 w-full -z-1 mb-[-0.1rem]">
      <Player
        className="flex items-end z-1 lottie-color-fix"
        onEvent={(e) => e === "load" && setLottie(true)}
        ref={(e) => playerRef.current?.push(e)}
        src={wave}
        loop
        controls
        autoplay={false}
      />
    </div>
  );
};
