import { styled } from "@stitches/react";

export const SectionContainer = styled("div", {
  width: "100%",
  paddingTop: "3rem",
});

export const SectionTitleContainer = styled("div", {
  position: "relative",
  display: "flex",
  "&::before": {
    content: "",
    position: "absolute",
    left: 0,
    transform: "translate(-35%, 100%)",
    width: "2rem",
    height: "2rem",
    backgroundColor: "$accent",
    borderRadius: "9999px",
  },

  variants: {
    isLast: {
      true: {
        "&::before": {
          borderRadius: "6px",
          height: "0.85rem",
          width: "4rem",
          top: "100%",
          transform: "translate(-40%, 900%)",
        },
      },
    },
  },
});
