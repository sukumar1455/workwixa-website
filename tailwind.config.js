/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f0ff',
          100: '#ebe0fe',
          200: '#d4bffc',
          300: '#b794f8',
          400: '#9b6ef4',
          500: '#7c46f1',
          600: '#6b35e0',
          700: '#5b21c6',
          800: '#3d1488',
          900: '#2b0a58',
          950: '#1a0538',
        },
        accent: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
      },
      fontFamily: {
        sans: ['Nunito Sans', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Nunito Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        lift: '0 18px 50px -20px rgba(43, 10, 88, 0.35)',
        float: '0 30px 80px -24px rgba(43, 10, 88, 0.45)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeup: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        fadeup: 'fadeup 0.7s ease-out both',
      },
    },
  },
  plugins: [],
}
