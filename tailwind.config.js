module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "contact-us": "url('/images/maps.png')",
      },
      colors: {
        primary: {
          bg: "#0F1B3E",
          text: "#fff",
        },
        secondary: {
          bg: "#d8ba71",
        },
        error: {
          primary: "#d8ba71",
          white: "#fff",
        },
      },
    },

    container: {
      center: true,
      screens: {
        xs: "90vw",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1450px",
      },
    },
    screens: {
      xs: { max: "640px" },
      sm: { min: "640px" },
      md: { min: "768px" },
      lg: { min: "1024px" },
    },
  },
  plugins: [],
};
