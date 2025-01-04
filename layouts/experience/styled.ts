import { styled } from "@/styles/stitches";

export const ExperienceMarkerContainer = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",

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

  "@xs": {
    flexDirection: "row",
  },
});

export const ExperienceItemContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  width: "calc(100% / var(--items))",
});
