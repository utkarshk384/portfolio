import { styled } from "@/styles/stitches";

export const ToolContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  minWidth: "7.75rem",
  minHeight: "8rem",
  gap: "1rem",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  borderRadius: "8px",
  background: "var(--neutral-gradient)",
  boxShadow: "var(--shadow-card)",
  backdropFilter: "blur(8px)",
});
