/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      theme: {
        fontFamily: {
          sans: ["Urbanist", "ui-sans-serif", "system-ui", "Helvetica", "Arial", "sans-serif"],
        },
      },
      colors: {
        body: "#121212",
        panel: "#15191C",
        sidebar: "#18191B",
        "highlight-blue": "#2297E4",
        "highlight-red": "#FC4042",
        "highlight-yellow": "#FEB743",
        "highlight-green": "#79C24C",
        "panel-light": "#1C2023",
        "base-grey": "#7C7D7F",
        input: "#7C7D7F",
        "base-border-color": "#31393F",
        "text-default": "#D1D1D1",
      },
    },
  },
  plugins: [],
};
