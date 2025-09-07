/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-hide": {
          /* For Firefox */
          "scrollbar-width": "none",
          /* For IE, Edge */
          "-ms-overflow-style": "none",
        },
        ".scrollbar-hide::-webkit-scrollbar": {
          display: "none", /* Chrome, Safari, Opera */
        },
      };
      addUtilities(newUtilities);
    },
    require("tailwindcss-animate"), // 👈 add this
  ],
}
