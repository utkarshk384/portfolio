import { styled } from "@/stitches.config";

export const NavigationContainer = styled("div", {
  position: "sticky",
  top: 0,
  zIndex: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingInline: "1rem",
  borderEndEndRadius: "1.5rem",
  borderEndStartRadius: "1.5rem",

  transition: "all 0.3s ease-in",
  backgroundColor: "rgba(var(--base-100-rgba), 0.7)",
  backdropFilter: "blur(5px)",
  "-webkit-backdrop-filter": "blur(5px)",
});
