import { styled } from "@stitches/react";

export const ExperienceMarkerContainer = styled("div", {
  position: "relative",
  display: "flex",
  gap: "0.5rem",
  "&::before": {
    content: "",
    position: "absolute",
    top: "50%",
    left: "-1rem",
    transform: "translateX(-100%)",
    width: "2rem",
    height: "0.5rem",
    backgroundColor: "$accent",
    borderRadius: "9999px",
  },
});
