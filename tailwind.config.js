/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NetflixSansMedium: ["NetflixSans-Medium", "sans-serif"],
        NetflixSansLight: ["NetflixSans-Light", "sans-serif"],
        NetflixSansRegular: ["NetflixSans-Regular", "sans-serif"],
        NetflixSansBold: ["NetflixSans-Bold", "sans-serif"],
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false // <== disable this!
  },
}