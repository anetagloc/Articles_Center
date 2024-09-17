const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'bermuda': '#78dcca',
        'darkgreen': '#3c887e',
        "mustard": "#fed766",
        'red': '#ef4444',
        'yellow': '#fef08a',
        'green': '#86efac',
        'slate': '#94a3b8',
        'white': '#fff',
        'grey': '#d1d5db',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ],
}
