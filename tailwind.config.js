module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // 'main': '#273B42',
      'main': '#26344F',
      'secondary': '#FBFBFB',
    },
    fontFamily: {
      'roboto': ['roboto']
    }, 
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
