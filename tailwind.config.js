const colors = require("tailwindcss/colors");

/**@type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.violet[700],
          ...colors.violet,
        },
      },
      scale: {
        700: "7.00",
        300: "3.00",
        200: "2.00",
      },
      transformOrigin: {
        "top-left-1/3-3/4": "33% 75%",
      },
      fontFamily: {
        main: ["Kalnia"],
      },
      animation: {
        ping: "ping 2s cubic-bezier(0, 0, 0.6, 0.5)  ",
        spin: "spin 1s linear ",
        cursor: "cursor .6s linear infinite alternate",
      },
      keyframes: {
        type: {
          "0%": { width: "0ch" },
          "5%, 10%": { width: "1ch" },
          "15%, 20%": { width: "2ch" },
          "25%, 30%": { width: "3ch" },
          "35%, 40%": { width: "4ch" },
          "45%, 50%": { width: "5ch" },
          "55%, 60%": { width: "6ch" },
          "65%, 70%": { width: "7ch" },
          "75%, 80%": { width: "8ch" },
          "85%, 90%": { width: "9ch" },
          "95%": { width: "10ch" },
        },
      },
    },
  },
};
