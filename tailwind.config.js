/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "vs-gray": "#E9E9E9",
        "vs-red": "#ED654E",
        "vs-green": "#273232",
      },
      fontFamily: {
        merriweather: "Merriweather, serif",
        "merriweather-sans": "Merriweathers, sans-serif",
        "dm-serif": "DM Serif Display, serif",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
