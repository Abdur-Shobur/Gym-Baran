/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6765F0',
        secondary: '#264373',
        dark: '#262524',
      },
      fontFamily: {
        SportingGrotesqueBold: 'SportingGrotesqueBold, poppins',
        SportingGrotesqueRegular: 'SportingGrotesqueRegular, poppins',
      },
    },
  },
  plugins: [],
}
