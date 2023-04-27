/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NetflixSans: ["NetflixSans-Medium", "sans-serif"]
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false // <== disable this!
  },
}