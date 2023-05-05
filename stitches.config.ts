import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, keyframes, getCssText, theme } =
  createStitches({
    theme: {
      colors: {
        primary: "var(--primary)",
        accent: "var(--accent)",
        "accent-alternate": "var(--accent-alternate)",
        "base-100": "var(--base-100)",
        content: "var(--content)",
        "content-alternate": "var(--content-alternate)",
      },
    },
    media: {
      xs: "(min-width: 420px)",
      sm: "(min-width: 640px)",
      md: "(min-width: 768px)",
      lg: "(min-width: 1024px)",
      xl: "(min-width: 1280px)",
      "2xl": "(min-width: 1536px)",
    },
  });
