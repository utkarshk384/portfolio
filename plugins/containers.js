const ContainerPlugin = ({ addUtilities }) => {
  addUtilities({
    ".container": { 
      maxWidth: "96rem", 
      margin: "0 auto", 
      width: "90%",
      "@media screen and (min-device-width: 1200px) and (-webkit-min-device-pixel-ratio: 2),(min-resolution: 192dpi)": {
        width: "80%",
      },
    },
    ".inner-container": { width: "95%" },
  });
};

module.exports = ContainerPlugin;