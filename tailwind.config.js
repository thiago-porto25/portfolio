module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: { montagu: ["Montagu Slab", "sans-serif"] },
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
        wiggle: "wiggle 0.3s ease-in-out normal",
        initial: "fade 5s ease-in-out normal",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        fade: {
          "0%, 70%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
