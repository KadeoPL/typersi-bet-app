/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        background: "var(--background)",

        surface: "var(--surface)",
        surfaceLight: "var(--surfaceLight)",

        textPrimary: "var(--textPrimary)",
        textSecondary: "var(--textSecondary)",
        textMuted: "var(--textMuted)",

        success: "var(--success)",
        warning: "var(--warning)",
        danger: "var(--danger)",

        border: "var(--border)",
        borderLight: "var(--borderLight)",
      },
    },
  },

  plugins: [],
};
