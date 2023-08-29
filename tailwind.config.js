/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "420px",
      },
      colors: {
        primary: "var(--primary)",
        accent: "var(--accent)",
        "base-100": "var(--base-100)",
        content: "var(--text)",
        "neutral-gray": "var(--neutral-gray)",
        "neutral-white": "var(--neutral-white)",
        "neutral-black": "var(--neutral-black)",
      },

      fontFamily: {
        cookie: ["var(--font-cookie)"],
        raleway: ["var(--font-raleway)"],
      },
      backgroundImage: {
        "gradient-bg": "var(--gradient)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("./plugins/typography"), require("./plugins/containers")],
  corePlugins: {
    container: false,
  },
};
