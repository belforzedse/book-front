/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E3A8A",
          dark: "#2C3E91",
        },
        secondary: "#FDF6EC",
        header: {
          start: "#4C1D95",
          mid: "#312E81",
          end: "#1D4ED8",
        },
        accent: {
          DEFAULT: "#F97316",
          dark: "#EA580C",
        },
        danger: "#DC2626",
        neutral: "#6B7280",
        background: "#FFFDF7",
        card: "#FAFAFA",
      },
    },
  },
  plugins: [],
}

export default config
