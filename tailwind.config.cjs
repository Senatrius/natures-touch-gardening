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
        'primary-100': '#197C0B',
        'primary-200': '#8D4000',
        body: '#020800',
        overlay: 'hsla(112, 84%, 26%, .8)',
        watermark: 'hsla(112, 84%, 26%, .15)',
        footerText: '#9AC89F'
      }
    }
  },
  plugins: []
};
