module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        newsreader: ['Newsreader', 'serif'],
        geist: ['Geist', 'sans-serif'],
        'geist-mono': ['Geist Mono', 'monospace'],
      },
      fontSize: {
        xxs: "0.4rem",
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '6xl': '3.815rem',
        '7xl': '4.768rem',
        '8xl': '5.960rem',
        '9xl': '7.450rem',
      },
    },
  },
  plugins: [],
};