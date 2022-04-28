module.exports = {
  content: ["./src/**/*.{html,js,ts,vue}"],
  theme: {
    screens: {
      xs: "0px",
      sm: "300px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      code: "#ad00a2",

      gray: {
        100: "#f7fafc",
        200: "#d3dce6",
        600: "#8492a6",
        800: "#273444",
        900: "#1a202c",
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      mono: ["ui-monospace", "Consolas", "monospace"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
  options: {
    includePaths: ["./node_modules"],
  },
};
