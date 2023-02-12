/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary-100': '#1CA109',
        'primary-200': '#8D4000',
        body: '#020800',
        overlay: 'hsla(113, 89%, 33%, .8)',
        watermark: 'hsla(113, 89%, 33%, .15)',
        footerText: '#9AC89F'
      }
    }
  },
  plugins: []
};
