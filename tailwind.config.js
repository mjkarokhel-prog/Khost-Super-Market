/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        floating: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "bean-rotate": {
          "0%": { transform: "rotate(0deg) translateY(0)" },
          "50%": { transform: "rotate(180deg) translateY(-10px)" },
          "100%": { transform: "rotate(360deg) translateY(0)" },
        },
        "steam-rise": {
          "0%": { opacity: "0", transform: "translateY(10px) scaleX(0.8)" },
          "30%": { opacity: "0.7" },
          "100%": { opacity: "0", transform: "translateY(-45px) scaleX(1.2)" },
        },
      },
      animation: {
        floating: "floating 4s ease-in-out infinite",
        bean: "bean-rotate 10s linear infinite",
        steam: "steam-rise 4s ease-out infinite",
      },
    },
  },
  plugins: [],
};
