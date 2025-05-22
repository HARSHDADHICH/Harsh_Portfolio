/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // High Contrast theme colors
        'hc-bg': 'var(--hc-bg)',
        'hc-text': 'var(--hc-text)',
        'hc-primary': 'var(--hc-primary)',
        // Colorful theme colors
        'colorful-primary': 'var(--colorful-primary)',
        'colorful-secondary': 'var(--colorful-secondary)',
        'colorful-accent': 'var(--colorful-accent)',
      },
      borderColor: {
        'hc-text': 'var(--hc-text)',
      },
    },
  },
  plugins: [],
};