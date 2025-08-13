import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all files in src for Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        "jcin-light-blue": "#003da5",
        "jcin-dark-blue": "#003087",
        "jcin-yellow": "#ffc20e",
        "jcin-teal": "#26A69A",
        "jcin-black": "#000000",
        "jcin-white": "#FFFFFF",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "serif"],
        mulish: ["Mulish", "fantasy"],
        roboto: ["Roboto", "monospace"],
        poppins: ["Poppins", "sans-serif"],
        "open-sans": ['"Open Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
