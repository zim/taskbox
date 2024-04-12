/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        // "base-green": "#0B7C84",
        "hover-green": "#086066",
        "active-green": "#06484D",
        "mid-green": "#D2EFF1",
        "base-green": "#086269",
        "base-blue": "#003366",
        "light-gray": "#DBE5E6",
        "border-gray": "#D7DCEC",
        "medium-gray": "#4F5259",
        "light-white": "#FCFCFC",
        "dark-white": "#F9FBFC",
        "light-green": "#F8FCFC",
        "new-green": "#EBF5F5",
        "medium-green": "#EDF7F7",
        "message-bg": "#F6FAFA",
        "message-green": "#D2EFF1",
        "message-green-border": "#A5DFE3",
        "dark-green": "#0B7C84",
        "icon-green": "#0B6269",
        "hover-dark-green": "#1B4447",
        "dark-gray": "#171823",
        "new-gray": "#DDDDDD",
        "hover-gray": "#F3F5F5",
        "hover-border": "#CCD9FF",
      },
      fontSize: {
        sm10: "10px",
        txt11: "11px",
        txt10: "10px",
        txt9: "9px",
      },
    },
  },
  plugins: [],
};
