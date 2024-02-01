// // import tailwind from 'tailwindcss'
// // import tailwindConfig from './tailwind.config.js'
// // import autoprefixer from 'autoprefixer'

// const tailwind = require('tailwindcss')
// const tailwindConfig = require('./tailwind.config.js')
// const autoprefixer = require('autoprefixer')

// module.exports = {
//   plugins: [tailwind(tailwindConfig), autoprefixer]
// }

module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {}
  }
}
