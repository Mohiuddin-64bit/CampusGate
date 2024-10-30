/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#E86132", // Replace with your desired primary color
          // You can customize other colors here as well
        },
      },
      "night",
    ],
  },
};