module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing:{
        vh70:'70vh',
        '68r': '68rem',
        '160%': '160%',
        'n20vw': '-16vw',
        'n9vw': '-9vw',
        'n30vw': '-16vw',
        '20vh': '20vh'
      },
      inset: {
       'n3rem': '-3rem',
        '31r': '31rem',
      },
    },

    colors: {
      black: '#000',
      darkBlue: "#2d314d",
      limeGreen: "rgb(49, 211, 92)",
      brightCyan: "rgb(43, 183, 218)",
      GrayishBlue: "#9698a6",
      LightGrayishBlue: "#f3f4f6",
      VeryLightGray: "#fafafa",
      transparent: "transparent",
      white: 'white'
    },

    fontFamily: {
      mainFont: ["Rubik", "sans-serif"]
    },
    // zIndex: {
    //   // 'n10': '-10',
    // }
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    borderColor: ['responsive', 'hover'],
  },
  plugins: []
};
