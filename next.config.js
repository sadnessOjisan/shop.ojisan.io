const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  images: {
    domains: ["images.microcms-assets.io"],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, "css-loader"],
    });
    // ref: https://github.com/seek-oss/vanilla-extract/issues/4#issuecomment-808792494
    config.plugins.push(
      new VanillaExtractPlugin(),
      new MiniCssExtractPlugin({
        // without these Next.js will look for the generated stylesheets from the wrong place
        filename: "static/chunks/[chunkhash].css",
        chunkFilename: "static/chunks/[chunkhash].css",
      })
    );
    return config;
  },
};
