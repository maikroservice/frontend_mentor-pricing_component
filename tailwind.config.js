module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'purple-light': "hsl(236, 72%, 79%)",
        'purple-dark': "hsl(237, 63%, 64%)",
        'very-light-gray': "hsl(240, 78%, 98%)",
        'light-grayish-blue' : "hsl(234, 14%, 74%)",
        'grayish-blue': "hsl(233, 13%, 49%)",
        'dark-grayish-blue': "hsl(232, 13%, 33%)"
      },
      backgroundImage: theme => ({
      'top-right': "url('../assets/images/bg-top.svg')",
      'bottom-left': "url('../assets/images/bg-bottom.svg')"
    })},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
