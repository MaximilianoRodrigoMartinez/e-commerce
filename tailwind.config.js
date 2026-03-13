/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-secondary",
    "text-secondary",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4c3adb",
        secondary: "#0f172a",
        accent: "#f97316",
        surface: "#ffffff",
        muted: "#6b7280",
      },
      fontFamily: {
        sans: ["Roboto", "system-ui", "sans-serif"],
        heading: ["Open Sans", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "1200px",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(15, 23, 42, 0.08)",
        subtle: "0 2px 8px rgba(15, 23, 42, 0.04)",
      },
    },
  },
  plugins: [],
};
