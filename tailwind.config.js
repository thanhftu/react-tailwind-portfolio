/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        // spin: {
        //   "0%": { transform: "rotate(0deg)" },
        //   "100%": { transform: "rotate(360deg)" },
        // },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      boxShadow: {
        neon1: "0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3",
      },
      backgroundImage: {
        "neon-1": "linear-gradient(90deg,transparent,#2196f3)",
      },
    },
  },
  plugins: [],
};
