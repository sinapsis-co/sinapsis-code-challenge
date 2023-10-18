const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const SRC_DIR = path.resolve(__dirname, 'thumbnail-generator-ui');
const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'development',
  watch: true,
  devtool: 'eval-source-map',
  stats: {
    excludeModules: /node_modules/,
  },
  entry: {
    app: path.resolve(SRC_DIR, 'index.jsx'),
  },
  output: {
    path: DIST_DIR,
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  // plugins: [
  //   new htmlPlugin({
  //     template: path.resolve(DIST_DIR, 'index.html'),
  //     filename: 'index.html',
  //   })
  // ],
  devServer: {
    historyApiFallback: true,
  }
};