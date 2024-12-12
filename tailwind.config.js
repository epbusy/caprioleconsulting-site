/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f2',
          100: '#fee2e2', 
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#D75860', // Main primary color
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        secondary: {
          50: '#fff8f1',
          100: '#feecdc',
          200: '#fcd9bd',
          300: '#fdba74',
          400: '#F4A149', // Main secondary color
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        accent: {
          50: '#faf5f5',
          100: '#f5ebeb',
          200: '#e6d1d3',
          300: '#d6b7ba',
          400: '#A95569', // Main accent color
          500: '#a65d57',
          600: '#9a4b44',
          700: '#803b36',
          800: '#6b332f',
          900: '#5c2d2a',
        },
        teal: {
          50: '#f0f9fb',
          100: '#e0f2f6',
          200: '#bae3ec',
          300: '#86cde0',
          400: '#2F7C96', // Main teal color
          500: '#0891b2',
          600: '#0e7490',
          700: '#155e75',
          800: '#164e63',
          900: '#083344',
        },
        brown: {
          50: '#faf5f3',
          100: '#f5ebe7',
          200: '#ead5cd',
          300: '#dbb7a7',
          400: '#AD584C', // Main brown color
          500: '#a65d57',
          600: '#9a4b44',
          700: '#803b36',
          800: '#6b332f',
          900: '#5c2d2a',
        }
      },
    },
  },
  plugins: [],
};