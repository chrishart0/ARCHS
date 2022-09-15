/** @type {import('next').NextConfig} */

// const Uglify = require("uglifyjs-webpack-plugin");

module.exports = {
  images: {
    loader: "akamai",
    path: "/",
  },

  // webpack(cfg) {
  //   cfg.plugins = cfg.plugins.filter((plugin) => plugin.constructor.name !== "UglifyJsPlugin");
  //   return cfg;
  // },
};
