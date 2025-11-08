const ContainerPlugin = ({ addUtilities }) => {
  addUtilities({
    ".container": {
      margin: "0 auto",
      width: "80%",
      "@media only screen and (min-width: 1200px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi)":
        {
          width: "80%",
        },
    },
    ".inner-container": { width: "95%" },
  });
};

module.exports = ContainerPlugin;
