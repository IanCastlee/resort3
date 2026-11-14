/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        haven: {
          bg: '#FAF8F5',
          cream: '#F4EFEA',
          stone: '#EAE3DA',
          sand: '#DFCFBA',
          gold: '#C4A47C',
          goldDark: '#A88358',
          goldLight: '#E5D5C1',
          slate: '#1E3E47',
          deep: '#132E35',
          dark: '#0B1D22',
          muted: '#7A8C8E',
          border: 'rgba(19, 46, 53, 0.12)',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        ultra: '0.28em',
      },
      borderRadius: {
        arch: '120px 120px 16px 16px',
      },
    },
  },
  plugins: [],
};
