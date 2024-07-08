// tailwind.config.js
module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      animation: {
        marqueeScroll: 'marqueeScroll 10s linear infinite',
      },
      keyframes: {
        marqueeScroll: {
          '0%': {
            transform: 'translateX(-50%)',
          },
          '100%': {
            transform: 'translateX(-0%)',
          },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements' }),  // default: 'standard'
  ],
};
