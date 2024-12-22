const colors = {
  primary: {
    DEFAULT: "#FF4D37", // The bright red/orange used for CTAs
    dark: "#E63B26", // Darker shade of the primary color
  },
  background: {
    DEFAULT: "#0A0A0B", // Main dark background
    card: "#1A1A1C", // Slightly lighter background for cards
  },
  gray: {
    100: "#F8F8F8", // White text
    200: "#E5E5E5", // Light gray text
    300: "#D4D4D4", // Medium gray text
    400: "#A3A3A3", // Darker gray text
    500: "#737373", // Border colors
    600: "#525252", // Muted text
    700: "#404040", // Card borders
    800: "#262626", // Secondary backgrounds
    900: "#171717", // Darker sections
  },
  gradient: {
    start: "#FF4D37", // Start of gradient
    end: "#FF8D3B", // End of gradient
  },
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: colors,
    backgroundImage: {
      "primary-gradient":
        "linear-gradient(to right, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
