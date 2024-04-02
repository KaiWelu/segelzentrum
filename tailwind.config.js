/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // this adds the color scheme of the corporate design
        "primary-1": "#414042",
        "primary-2": "#9f0524",
        "secondary-1": "#939598",
        // this is an example
        "light-4": "#5C5C7B",
      },
      fontFamily: {
        commissioner: ["Commissioner", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
