export type FontSizes = keyof typeof FONT_SIZES;
export type FontWeights = keyof typeof FONT_WEIGHTS;
export type FontColors = keyof typeof FONT_COLORS;
export type TextCases = keyof typeof FONT_TEXT_CASE;

export const FONT_SIZES = {
  "64": {
    fontSize: "$64 !important",
    lineHeight: "auto",
  },
  "54": {
    fontSize: "$54",
    lineHeight: "auto",
  },
  "44": {
    fontSize: "$44",
    lineHeight: "auto",
  },
  "32": {
    fontSize: "$32",
    lineHeight: "auto",
  },
  "28": {
    fontSize: "$28",
    lineHeight: "auto",
  },
  "24": {
    fontSize: "$24",
    lineHeight: "auto",
  },
  "22": {
    fontSize: "$22",
    lineHeight: "auto",
  },
  "20": {
    fontSize: "$20",
    lineHeight: "auto",
  },
  "18": {
    fontSize: "$18",
    lineHeight: "auto",
  },
};

export const FONT_WEIGHTS = {
  "400": {
    fontWeight: "$400",
  },
  "500": {
    fontWeight: "$500",
  },
  "600": {
    fontWeight: "$600",
  },
  "700": {
    fontWeight: "$700",
  },
};

export const FONT_COLORS = {
  primary: {
    color: "$primary",
  },
  base100: {
    color: "$base-100",
  },
  accent: {
    color: "$accent",
  },
  content: {
    color: "$content",
  },
  neutralGray: {
    color: "$neutral-gray",
  },
  neutralWhite: {
    color: "$neutral-white",
  },
};

export const FONT_TEXT_CASE = {
  uppercase: {
    textTransform: "uppercase",
  },
  lowercase: {
    textTransform: "lowercase",
  },
  capitalize: {
    textTransform: "capitalize",
  },
  none: {
    textTransform: "none",
  },
};
