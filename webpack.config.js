const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    App: path.resolve(__dirname, 'src/App.js')
  },

  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: '[name].[contentHash].js',
    chunkFilename: '[name].[contentHash].js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  devServer: {
    index: path.resolve(__dirname, 'public/dist/index.html'),
    contentBase: path.join(__dirname, 'public/dist'),
    compress: false,
    writeToDisk: true,
    port: 4010,
    open: 'Google Chrome',
    historyApiFallback: true
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html')
    })
  ]
}
