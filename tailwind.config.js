module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      blue100: '#001DA8',
      yellow: '#F9C900',
      magenta: '#d42f69',
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
    extend: {},
  },
  plugins: [],
};
