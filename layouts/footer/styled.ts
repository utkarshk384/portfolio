import { styled } from "@/styles/stitches";

export const NowPlayingContainer = styled("div", {
  display: "grid",
  overflow: "hidden",
  padding: 0,
  borderRadius: "0.5rem",
  backgroundImage: "var(--neutral-gradient)",
  gridTemplateRows: "2fr 1fr",
  width: "15rem",
  textAlign: "center",

  "@lg": {
    width: "20rem",
    textAlign: "left",
    gridTemplateRows: "1fr",
    gridTemplateColumns: "1fr 2fr",
  },
});
