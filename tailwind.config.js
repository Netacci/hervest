module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      primary: '#E2698D',

      text: '#B4B5C1',
      secondary: '#265859',
      white: '#ffffff',
      gray: '#828282',
      grayBg: '##F2F1F3',

      navHover: '#FDF6F8',
      linebreak: 'rgba(33, 63, 125, 0.1)',
    },
  },
  plugins: [],
};