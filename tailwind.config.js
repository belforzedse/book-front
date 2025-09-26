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
