module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./client/index.js",
  output: {
    filename: "./server/public/bundle.js",
    path: __dirname,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
};
