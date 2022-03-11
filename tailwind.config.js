
module.exports = {
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    screens: {
      '2xl': { 'max': '1535px' },
      '2xlm': { 'min': '1536px' },
      'xl': { 'max': '820px' },
      'm': { 'max': '660px' }
    }
  },
  plugins: [],
}