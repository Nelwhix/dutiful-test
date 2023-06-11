/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {
        colors: {
            'primary': '#1E1E4B',
            'secondary': '#532F82',
            'weirdpurple': '#B6B6E5'
        }
    },
  },
  plugins: [require("daisyui")],
}

