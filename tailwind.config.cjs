/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-gray-100": "#F2F2F2",
        "theme-gray-200": "#D9D9D9",
        "theme-gray-300": "#808080",
        "theme-gray-400": "#333333",
        "theme-gray-500": "#262626",
        "theme-gray-600": "#1A1A1A",
        "theme-gray-700": "#0D0D0D",
        "theme-purple": "#8284FA",
        "theme-purple-dark": "#5E60CE",
        "theme-blue": "#4EA8DE",
        "theme-blue-dark": "#1E6F9F",
        "theme-danger": "#E25858",
      },
    },
  },
  plugins: [],
};
