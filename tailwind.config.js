module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,pug,js,ts}'],
  separator: '_', // to make usable with 'pugjs'
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"Work Sans"', 'sans-serif'],
      serif: ['"PT Serif"', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
