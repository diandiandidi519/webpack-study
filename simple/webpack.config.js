const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const TestPlugin = require("../plugin/plugin");

const config = {
  entry: "./src/index.js",
  // devtool: "eval-source-map",
  output: {
    filename: "[name].js",
    chunkFilename: "[name].[contenthash:8].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new TestPlugin(),
    // new HtmlWebpackPlugin({
    //   template: "index.html",
    // }),
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [],
  },
  // optimization: {
  //   usedExports: true,
  // },
  optimization: {
    // 为了方便阅读理解打包后的代码，关闭代码压缩和模块合并
    minimize: false,
    concatenateModules: false,
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
