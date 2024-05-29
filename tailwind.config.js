/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "numberColor": "#243c5a",
        "blue": "#1E73BF",
        "blue-50": "#57A2DE",
        "hoverBlue": "#316A99",
        "whiteColor": "#F5F5F5",
        "grayColor": "#4F4F4F",
      },
    },
  },
  plugins: [],
};
