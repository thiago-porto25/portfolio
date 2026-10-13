module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { accent: "#e0526f", wine: "#a31f48" },
      animation: {
        "spin-slow": "spin 5s linear infinite",
        wiggle: "wiggle 0.3s ease-in-out normal",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
      },
    },
  },
  plugins: [],
};
