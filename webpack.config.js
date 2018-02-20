const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
      },
      {
        test: /\.(ts|tsx)?$/, 
        loader: "awesome-typescript-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/, 
        loader: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/, 
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    })
  ]
};