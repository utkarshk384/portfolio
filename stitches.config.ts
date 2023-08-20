import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, keyframes, getCssText, theme } =
  createStitches({
    theme: {
      colors: {
        primary: "var(--primary)",
        accent: "var(--accent)",
        "base-100": "var(--base-100)",
        content: "var(--text)",
        "neutral-gray": "var(--neutral-gray)",
        "neutral-white": "var(--neutral-white)",
      },
      fontSizes: {
        64: "4em", // 64px
        54: "3.375em", // 54px
        44: "2.75em", // 44px
        32: "2em", // 32px
        28: "1.75em", // 28px
        24: "1.5em", // 24px
        22: "1.375em", // 22px
        20: "1.25em", // 20px
        18: "1.125em", // 18px
      },
      fontWeights: {
        400: 400,
        500: 500,
        600: 600,
        700: 700,
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
