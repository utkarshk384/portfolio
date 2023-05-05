const defaults = {
  fontFamily: "var(--raleway-font), sans-serif",
  fontStyle: "normal",
  letterSpacing: "1px",
};

const headings = {
  ".text-heading-1": { ...defaults, ...generateClasses(700, "4em", "75px") },
  ".text-heading-2": {
    ...defaults,
    ...generateClasses(700, "3.375em", "63px"),
  },
  ".text-heading-3": {
    ...defaults,
    ...generateClasses(700, "2.75em", "52px"),
  },
  ".text-heading-4": {
    ...defaults,
    ...generateClasses(700, "1.14em", "38px"),
  },
  ".text-heading-5": { ...defaults, ...generateClasses(700, "1.5em", "145%") },
};

const subHeadings = {
  ".text-subheading-1": {
    ...defaults,
    ...generateClasses(500, "1.75em", "33px"),
  },
  ".text-subheading-2": {
    ...defaults,
    ...generateClasses(500, "1.375em", "26px"),
  },
  ".text-subheading-3": {
    ...defaults,
    ...generateClasses(500, "1.125em", "21px"),
  },
};

function generateClasses(weight, size, lineHeight) {
  return {
    fontWeight: weight,
    fontSize: size,
    lineHeight: lineHeight,
  };
}

const TypographyPlugin = ({ addUtilities }) => {
  addUtilities({
    ...headings,
    ...subHeadings,
    ".text-paragraph-1": {
      ...defaults,
      ...generateClasses(500, "1.25em", "25px"),
    },
    ".text-navigation": {
      fontFamily: "var(--cookie-font), cursive",
      fontStyle: "normal",
      letterSpacing: "1px",
      ...generateClasses(400, "3em", "25px"),
    },
  });
};

module.exports = TypographyPlugin;
