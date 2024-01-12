/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      yellow: "#fbffa7",
      orange: "#ff764d",
      light_blue: "#b1c5ff",
      purple: "#d5b3ff",
      green: "#b6ffc0",
      blue: "#0000ff",
      white: "#fff",
      black: "#000",
    },
    extend: {
      animation: {
        navBarAnime: "navBarAnime 0.5s ease-out 0s 1 normal forwards;",
      },
      keyframes: {
        navBarAnime: {
          "0%": {
            opacity: 0,
            transform: "translateY(-50px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
