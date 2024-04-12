/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "base-green": "#0B7C84",
        "hover-green": "#086066",
        "active-green": "#06484D",
      },
      fontSize: {
        sm10: "10px",
      },
    },
  },
  plugins: [],
};
