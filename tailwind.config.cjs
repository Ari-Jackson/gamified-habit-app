/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "market-background": "url(src/assets/images/desktop_background.jpg)",
        "lake-background": "url('/src/assets/images/desktop_background-1.jpg')",
        "inn-background": "url(src/assets/images/desktop_background-2.jpg)",
        "hero-background": "url(src/assets/images/desktop_background-3.jpg)",
        "cliff-background": "url(/src/assets/images/desktop_background-4.jpg)",
        "mask-hero-character":
          "url('/src/assets/images/11331b5cf7f853a4717cf8df4ccad807e47c1b09.png')",
        "hero-character":
          "url('/src/assets/images/f5a885b5d781e05edde29c4eb8ec48ee61904b62.png')",
      },
      fontFamily: {
        tech: ['"Share Tech Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
