//webpack.config.js
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  context: path.resolve(__dirname, "."),
  entry: {
    main: "./index.js",
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "index.js", // <--- Will be compiled to this single file
    library: "[name]",
    libraryTarget: "commonjs",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  target: ["node"],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
};
