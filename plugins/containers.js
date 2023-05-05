const ContainerPlugin = ({ addUtilities }) => {
  addUtilities({
    ".container": { maxWidth: "96rem", margin: "0 auto", width: "90%" },
    ".inner-container": { width: "95%" },
  });
};

module.exports = ContainerPlugin;
