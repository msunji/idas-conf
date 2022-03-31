module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      grey: '#E4E4E4',
      grey100: '#969696',
      blue: '#f1fbff',
      blue100: '#001DA8',
      blue200: '#020280',
      blue300: '#2A2A2A',
      yellow: '#F9C900',
      violet: '#5629BE',
      magenta: '#d42f69',
      magentaLight: '#FFDFEA',
    },
    fontFamily: {
      serif: ['Playfair Display', 'serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
      },
    },
    extend: {
      screens: {
        tablet: '800px',
      },
    },
  },
  plugins: [],
};
