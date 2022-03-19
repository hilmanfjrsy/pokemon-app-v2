const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  // Where files should be sent once they are bundled
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js'
  },
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    port: 3000,
    //  watchContentBase: true
  },
  // Rules of how webpack will take our files, complie & bundle them for the browser 
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'Pokemon App PWA'
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        { from: './public/logo512.png', to: '' },
        { from: './public/favicon.ico', to: '' },
        { from: './public/_redirects', to: '' },
        { from: './public/offline.html', to: '' },
        { from: './public/manifest.json', to: '' },
        { from: './public/robots.txt', to: '' },
        { from: './public/service-worker.js', to: '' },
      ]
    }),
  ],
}