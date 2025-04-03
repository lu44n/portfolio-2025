/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          dark: "161513",
          softdark: "#191919",
          light: "222222",
          softlight: "2A2A2A",
          lighter: "8491A0",
        },
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(to right, #FF8660, #9A33FF)",
        "orange-gradient": "linear-gradient(to right, #FF8660, #D5491D)",
        "blue-gradient": "linear-gradient(to right, #5BADFF, #1373D1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
