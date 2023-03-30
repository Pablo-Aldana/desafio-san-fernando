module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        dsfyellow: "#fcd005",
        navy: "#2b3856",
        kaki: "#CDB38A",
        dsfprimary: "#DBC096",
        dsfterciary: "#6E7A4E",
        dsftext: "#454442",
        dsfgray: "#d3d3d3",
        dsfgreen: "#245b43",
      },
    },
    fontFamily: {
      russoone: ['"Russo One"', "sans-serif"],
      orbitron: ['"Orbitron"', "sans-serif"],
      captureit: ['"Capture it"', "sans-serif"],
      captureit2: ['"Capture it 2"', "sans-serif"],
      montserrat: ['"Montserrat"', "sans-serif"],
      capturesmallz: ['"Capture Smallz"', "sans-serif"],
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
