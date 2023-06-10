/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "site-gray": {
          100: "#f5f5f5",
          50: "#f5f5f580",
          30: "#f5f5f54d",
        },
        "site-black": {
          100: "#5f5f5f",
          50: "#5f5f5f80",
          30: "#5f5f5f4d",
        },
        "site-red": {
          100: "#ebd8d8",
          50: "#ebd8d880",
          30: "#ebd8d84d",
        },
        "site-green": {
          100: "#5cc2ae",
          50: "#5cc2ae80",
          30: "#5cc2ae4d",
        },
      },
    },
  },
  plugins: [],
};
