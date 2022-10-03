const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const SRC_DIR = path.resolve(__dirname, 'thumbnail-generator-ui');
const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  
  devtool: 'eval-source-map',
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      },
    ],
  },
  plugins: [
    new htmlPlugin({
      template: path.resolve(SRC_DIR, 'index.html'),
      filename: 'index.html',
    })
  ]
};