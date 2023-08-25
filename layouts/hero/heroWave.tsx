import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

/* Hooks */
import { useWindowSize, useLottie } from "@/src/hooks";

/* Wave */
import wave from "@/animations/wave.json";

export const HeroWave: React.FC = () => {
  const { bp, sizes } = useWindowSize();
  const { playerRef, setLottie } = useLottie();

  return (
    <div
      className="absolute bottom-0 w-full -z-1"
      style={{
        marginBottom: sizes.width > bp.lg ? "-0.1rem" : "0.5rem",
      }}
    >
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
