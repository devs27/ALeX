/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        amrita: {
          50: '#FDF2F4',
          100: '#FCE7EB',
          200: '#F9D0D9',
          300: '#F4A9B9',
          400: '#EC7593',
          500: '#DE436F',
          600: '#C82455',
          700: '#A4123F', // Pantone 7426 C Primary Official
          800: '#881337',
          900: '#580C23',
          950: '#380514',
          maroon: '#A4123F',
          burgundy: '#881337',
          deep: '#4C0519',
          light: '#FDF2F4',
        },
        surface: {
          light: '#F8FAFC',
          dark: '#0B0F17',
          'card-light': '#FFFFFF',
          'card-dark': '#131B2A',
          'border-light': '#E2E8F0',
          'border-dark': '#1E293B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      boxShadow: {
        'amrita': '0 4px 20px -2px rgba(164, 18, 63, 0.12)',
        'amrita-lg': '0 10px 30px -4px rgba(164, 18, 63, 0.18)',
      }
    },
  },
  plugins: [],
}
