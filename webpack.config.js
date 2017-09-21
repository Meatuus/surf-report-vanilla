const webpack = require('webpack');

const path = require("path");
const config = require("./package.json");

module.exports = {
  entry: path.resolve(__dirname, config.main),  // entry file to all our js modules
  devtool: "source-map",  // add source mapping
  output: {
    path: __dirname,  // path to output files
    filename: "build/bundle.js"
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}
