var Path = require('path');
var Merge = require('webpack-merge');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var Common = require('./webpack.common');

module.exports = Merge(Common, {
  mode: 'development',
  output: {
    filename: 'app.js',
    path: Path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
      chunkFilename: 'styles.css',
    }),
  ],
});