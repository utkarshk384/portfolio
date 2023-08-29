export type BadgeColors = keyof typeof ColorVariants;
export type BadgeSize = keyof typeof BadgeSizes;
export type RoundnessType = keyof typeof RoundnessVariants;

export const ColorVariants = {
  yellow: {
    background: "$yellow",
    color: "$neutral-black",
  },
  darkBlue: {
    background: "$dark-blue",
    color: "$neutral-white",
  },
};

export const BadgeSizes = {
  xs: {
    fontSize: "$18",
  },
  sm: {
    fontSize: "$20",
  },
  base: {
    fontSize: "$22",
  },
  lg: {
    fontSize: "$24",
  },
  xl: {
    fontSize: "$28",
  },
};

export const RoundnessVariants = {
  rounded: {
    borderRadius: "8px",
  },
  pill: {
    borderRadius: "9999px",
  },
};
