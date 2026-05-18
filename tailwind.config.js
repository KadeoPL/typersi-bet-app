/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E8FF00",
        secondary: "#0E1525",
        background: "#050B16",
        surface: "#111827",

        textPrimary: "#FFFFFF",
        textSecondary: "#A1A8B8",
        textMuted: "#6B7280",

        success: "#22C55E",
        warning: "#FACC15",
        danger: "#EF4444",

        border: "#FFFFFF14",
        borderLight: "#FFFFFF1F",
      },
    },
  },
  plugins: [],
};
