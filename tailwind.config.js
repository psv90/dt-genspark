/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0B0E13',
          2: '#10151D',
          3: '#0F141B'
        },
        accent: {
          DEFAULT: '#00E676', // neon green
          cyan: '#00C2FF',
          pink: '#FF3D8D',
          yellow: '#FFD600'
        }
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 230, 118, 0.25)'
      },
      borderRadius: {
        compact: '10px'
      }
    }
  },
  plugins: []
};
