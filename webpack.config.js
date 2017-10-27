const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./src/client/App.jsx",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
