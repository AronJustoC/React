export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Agrega Poppins como una nueva familia de fuentes
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
