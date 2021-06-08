/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        default: '1.5rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem'
      }
    }
  },
  variants: {
    tableLayout: ['responsive']
  },
  plugins: [],
  purge: false
}
