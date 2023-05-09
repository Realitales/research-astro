/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['"Oswald"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
