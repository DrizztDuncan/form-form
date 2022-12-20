/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "theme-blue": "#204379",
        "sec-blue": "#DAE4F1",
        primary: "#B57556",
        secondary: "#E5E5E5",
        "light-green": "#B3B960",
        "light-blue": "#A0BCC8",
      },
      borderRadius: {
        btn: "50px",
        form: "20px",
      },
      dropShadow: {
        btn: "0px 0px 20px rgba(250, 163, 163, 0.91)",
      },
      animation: {
        wave: " wave 1s ease-in-out infinite",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "translate(-100px)" },
          "50%": { transform: "translate(0px)" },
        },
      },
    },
  },
  plugins: [],
};
