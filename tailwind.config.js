module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,pug,js,ts}'],
  separator: '_', // to make usable with 'pugjs'
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"Nunito Sans"', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
