module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      inset: {
        "72px": "72px",
      },
      colors: {
        "#F7FAFC": "#F7FAFC",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
