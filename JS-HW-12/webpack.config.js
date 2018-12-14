const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry:["@babel/polyfill", "./src/index.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['style-loader',MiniCssExtractPlugin.loader,'css-loader','postcss-loader'],
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ['style-loader',MiniCssExtractPlugin.loader,'css-loader','postcss-loader','sass-loader'],
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {}
              }
            ]
        },
        { test: /\.hbs$/,exclude: /node_modules/, use:["handlebars-loader"]}
    ]
  },
  plugins: [
    new CleanWebpackPlugin('build'),
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: './public/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "style.css",
      })
  ],
  devServer: {
    noInfo: true,
    quiet: false,
    stats: 'errors-only',
    clientLogLevel: 'warning',
    compress: true,
    port: 9000,
  }
};
