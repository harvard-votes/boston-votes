module.exports = {
    content: [
      "./src/**/*.{html,js,ts,jsx,tsx}",
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    
    theme: {
      extend: {
        backgroundImage: {
          'my_bg_image' : "url('/public/assets/Illustration1.png')",
        }
      },
    },
    plugins: [],
  }
