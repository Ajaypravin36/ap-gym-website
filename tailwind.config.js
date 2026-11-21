/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E63946',
          'red-hover': '#cf2c39',
          'red-glow': 'rgba(230, 57, 70, 0.4)',
          black: '#0B0B0B',
          charcoal: '#141414',
          'charcoal-card': '#181818',
          'charcoal-border': '#262626',
          muted: '#A6A6A6',
          light: '#F4F4F5',
        }
      },
      fontFamily: {
        heading: ['"Bebas Neue"', 'Oswald', 'sans-serif'],
        subheading: ['Oswald', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-red': '0 0 25px -5px rgba(230, 57, 70, 0.5)',
        'glow-red-lg': '0 0 40px -5px rgba(230, 57, 70, 0.65)',
        'inner-dark': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [],
}
