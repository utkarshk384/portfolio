"use client";
import dynamic from "next/dynamic";

/* Types */
import type {
  IPlayerProps,
  Player as PlayerType,
} from "@lottiefiles/react-lottie-player";

export const Player = dynamic(
  async () => {
    const ReactLottie = await import("@lottiefiles/react-lottie-player");
    return ReactLottie.Player;
  },
  { ssr: false }
) as React.ForwardRefExoticComponent<
  Omit<IPlayerProps, "ref"> & React.RefAttributes<PlayerType>
>;
