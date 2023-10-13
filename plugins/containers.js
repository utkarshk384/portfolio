const ContainerPlugin = ({ addUtilities }) => {
  addUtilities({
    ".container": {
      maxWidth: "96rem",
      margin: "0 auto",
      width: "90%",
      "@media only screen and (min-width: 1200px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi)":
        {
          width: "70%",
        },
    },
    ".inner-container": { width: "95%" },
  });
};

module.exports = ContainerPlugin;
