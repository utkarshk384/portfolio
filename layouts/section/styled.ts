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
    transform: "translate(-30%, 100%)",
    width: "2rem",
    height: "2rem",
    backgroundColor: "$accent",
    borderRadius: "9999px",
  },
});
