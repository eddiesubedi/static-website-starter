var Path = require('path');
var Merge = require('webpack-merge');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

var Common = require('./webpack.common');

module.exports = Merge(Common, {
  mode: 'production',
  output: {
    filename: 'app.[contentHash].js',
    path: Path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[contentHash].css',
      chunkFilename: 'styles.[contentHash].css',
    }),
    new CleanWebpackPlugin(),
  ],
});