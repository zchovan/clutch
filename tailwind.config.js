module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // 'main': '#273B42',
      // 'main': '#26344F',
      // 'main': '#1D3557',
      // 'main': '#457B9D',
      // 'secondary': '#FBFBFB',
      // 'main-light': '#457B9D',
      // 'main-light': '#A8DADC',
      // 'secondary': '#F1FAEE',
      // 'secondary': '#FFFFFF'
      'primary': '#202225',
      'primary-light': '#2F3136',
      'primary-lighter': '#36393F',
      'secondary': '#3BA55D',
      'gray': '#8e9297',
      'gray-light': '#b9bbbe'
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
