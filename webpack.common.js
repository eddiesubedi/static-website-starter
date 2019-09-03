var fs = require('fs');
var Path = require('path');
var Glob = require('glob');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var header = fs.readFileSync(__dirname + '/src/partials/header.html');
var footer = fs.readFileSync(__dirname + '/src/partials/footer.html');
var htmlPaths = Glob.sync(Path.resolve(__dirname, 'src') + '/*.html');
var htmlWebpackPlugins = htmlPaths.map(function createNewHtmlWebpackPlugin(htmlPath) {
  var filename = htmlPath.replace(/^.*[\\\/]/, '');
  return new HtmlWebpackPlugin({
    filename,
    template: htmlPath,
    header,
    footer,
  });
});

module.exports = {
  entry: './src/app/index.js',
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', 'postcss-loader',
        ],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true,
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "assets"
          }
        },
      },
    ],
  },
  plugins: [
    ...htmlWebpackPlugins,
  ],
}