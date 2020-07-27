const path = require('path');
// const MiniCSSPlugin = require('mini-css-extract-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const entryPath = path.join(__dirname, 'src');
const outputPath = path.join(__dirname, 'dist');

const coloresExtract = new ExtractTextPlugin('colores.css')
const stylesExtract = new ExtractTextPlugin('styles.css')

module.exports = {
  entry: [
    path.join(entryPath, 'index.js'),
  ],
  output: {
    filename: 'bundle.js',
    path: outputPath
  },
  plugins: [
    coloresExtract,
    stylesExtract,
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader'
      },
      {
        test: /styles\.(css|scss|sass)$/,
        loader: stylesExtract.extract([
          'css-loader',
          'sass-loader'
        ])
      },
      {
        test: /colores\.(css|scss|sass)$/,
        loader: coloresExtract.extract([
          'css-loader',
          'sass-loader'
        ])
      },
    ]
  },
  devServer: {
    contentBase: outputPath,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.jsx', '.js']
  }
}