/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cookie: ["var(--font-cookie)"],
        raleway: ["var(--font-raleway)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    prefix: "daisy-",
    themes: [
      {
        dark: {
          primary: "#4088BF",
          secondary: "#155E7E",
          accent: "#FFC933",
          "base-100": "#13314B",
          "--rounded-box": "0.5rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "9999px",
        },
        light: {
          primary: "#40F",
          secondary: "#17E",
          accent: "#FFC933",
          "base-100": "#13314B",
          "--rounded-box": "0.5rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "9999px",
        },
      },
    ],
  },
};
