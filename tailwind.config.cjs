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
        wave: " wave 5s ease-in-out infinite ",
        paddle: "spin 2s  linear infinite ",
        firework: "burst 3s ease-in-out  infinite ",
        // fade: "fadeOut 1s  ease-in-out  infinite ",
      },

      keyframes: {
        wave: {
          "0%, 100%": { transform: "translate(-100px)" },
          "50%": { transform: "translate(0px)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(25deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        burst: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
        // fadeOut: {
        //   "0%": { transform: "opacity(1)" },
        //   "100%": { transform: "opacity(0)" },
        // },
      },
      backgroundImage: {
        "dot-bg": "url('./random-dot.png')",
      },
    },
  },
  plugins: [],
};
