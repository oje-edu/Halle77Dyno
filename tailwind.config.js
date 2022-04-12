module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#e2e8f0",
          DEFAULT: "#cbd5e1",
          dark: "#94a3b8",
        },
        secondary: {
          light: "#a7f3d0",
          DEFAULT: "#6ee7b7",
          dark: "#34d399",
        },
      },
      fontFamily: {
        body: ["Merriweather"],
        text: ["Quicksand"],
      },
    },
  },
  variants: {},
  plugins: [],
};
