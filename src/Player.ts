import { Player as LottiePlayer } from "@lottiefiles/react-lottie-player";

/* Types */
import type {
  IPlayerProps,
  Player as PlayerType,
} from "@lottiefiles/react-lottie-player";

export const Player =
  LottiePlayer as unknown as React.ForwardRefExoticComponent<
    Omit<IPlayerProps, "ref"> & React.RefAttributes<PlayerType>
  >;
