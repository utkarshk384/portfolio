import { createStitches } from "@stitches/react";

function clampBuilder(
  minWidthPx: number,
  maxWidthPx: number,
  minFontSize: number,
  maxFontSize: number
) {
  const minWidth = minWidthPx / 16;
  const maxWidth = maxWidthPx / 16;

  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minFontSize;

  return `clamp( ${minFontSize}rem, ${yAxisIntersection}rem + ${
    slope * 100
  }vw, ${maxFontSize}rem )`;
}

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
        "neutral-black": "var(--neutral-black)",
        yellow: "#FACC15",
        "dark-blue": "#13314B",
        black: "#ffffff",
      },
      fontSizes: {
        64: clampBuilder(420, 1024, 2.75, 4), // 64px
        54: clampBuilder(420, 1024, 2, 3.375), // 54px
        44: clampBuilder(420, 1024, 1.75, 2.75), // 44px
        32: clampBuilder(420, 1024, 1.5, 2), // 32px
        28: clampBuilder(420, 1024, 1.375, 1.75), // 28px
        24: clampBuilder(420, 1024, 1.25, 1.5), // 24px
        22: clampBuilder(420, 1024, 1.125, 1.375), // 22px
        20: clampBuilder(420, 1024, 1, 1.25), // 20px
        18: clampBuilder(420, 1024, 0.75, 1.125), // 18px
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
