const formKitTailwind = require('@formkit/themes/tailwindcss');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  plugins: [
    formKitTailwind
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
      'primary-light-hover': '#33363C',
      'secondary': '#3BA55D',
      'gray': '#8e9297',
      'gray-light': '#b9bbbe',
      'dark-gray': '#202225',
      'white': '#FFF',
      // 'bg0':              '#1d2021',
      // 'bg1':              '#282828',
      // 'bg2':              '#282828',
      // 'bg3':              '#3c3836',
      // 'bg4':              '#3c3836',
      // 'bg5':              '#504945',
      // 'bg_statusline1':   '#282828',
      // 'bg_statusline2':   '#32302f',
      // 'bg_statusline3':   '#504945',
      // 'bg_diff_green':    '#32361a',
      // 'bg_visual_green':  '#333e34',
      // 'bg_diff_red':      '#3c1f1e',
      // 'bg_visual_red':    '#442e2d',
      // 'bg_diff_blue':     '#0d3138',
      // 'bg_visual_blue':   '#2e3b3b',
      // 'bg_visual_yellow': '#473c29',
      // 'bg_current_word':  '#32302f'
    },
    fontFamily: {
      'roboto': 'roboto'
    },
    extend: {}
  }
};
