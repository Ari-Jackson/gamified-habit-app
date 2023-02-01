/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background": "url('/src/assets/images/desktop_background-1.jpg')",
        "hero-character":
          "url('/src/assets/images/f5a885b5d781e05edde29c4eb8ec48ee61904b62.png')",
      },
    },
  },
  plugins: [],
};
