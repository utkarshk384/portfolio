import { styled } from "@/styles/stitches";
import { BadgeSizes, ColorVariants, RoundnessVariants } from "./consts";

export const StyledBadge = styled("p", {
  fontSize: "$18",
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gap: "1rem",
  placeItems: "center",
  borderRadius: "8px",
  fontWeight: "$400",
  padding: "0.25rem 1rem",
  width: "max-content",

  variants: {
    color: ColorVariants,
    size: BadgeSizes,
    roundness: RoundnessVariants,
  },
});
