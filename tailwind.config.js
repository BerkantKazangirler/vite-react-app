/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      spacing: {
        '100': '31rem',
        '128': '32rem',
        '256': '56rem',
      },
      colors: {
        'netural-dark-blue':'#202632',
        'netural-blue':'#343c4c',
      },
      boxShadow: {
        full: "0px 0px 32px 0px rgba(82,255,168,0.75);",
      }
    },
    container: {
      screens: {
        sm: '400px',
        md: '600px',
        lg: '728px',
        xl: '984px',
        '2xl': '1240px',
      },
    }
  },
  plugins: [],
}

