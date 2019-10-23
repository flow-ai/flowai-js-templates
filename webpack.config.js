const webpack = require('webpack'),
      TerserPlugin = require('terser-webpack-plugin'),
      path = require('path')

const dist = {
  mode: 'production',
  entry: './src/index.js',
  target: 'web',
  devtool: false,
  output: {
    filename: 'flowai-js-templates.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: "Flowai"
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  optimization: {
    minimizer: [
      new TerserPlugin()
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  ],
  node: {
    fs: 'empty'
  }
}

module.exports = [dist]
