/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Path to your main HTML file
    './assets/**/*.{html,js}', // Path to other HTML and JavaScript files in the assets directory
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')({
      strategy: 'class', // only generate global styles
    }),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};