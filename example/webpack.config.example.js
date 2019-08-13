const path = require('path')

module.exports = {
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  mode: 'development',
  devtool: 'eval',
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../website'),
    publicPath: '',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js)$/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
}
