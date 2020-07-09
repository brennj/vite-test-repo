// @ts-check
const reactPlugin = require("vite-plugin-react");

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: "react",
  plugins: [reactPlugin],
  optimizeDeps: {
    link: ["@test/component"],
  },
};

module.exports = config;
