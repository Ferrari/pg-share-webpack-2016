var webpack = require('webpack');
var path = require('path');

var bootstrapCss = path.join(__dirname, '../node_modules/bootstrap/dist/css');
var moduleDir = path.join(__dirname, '../node_modules');

module.exports = {
  entry: {
    app: './index.js'
  },
  output: {
    path: './build',
    publicPath: '/build/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: [moduleDir],
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/, 
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=18192'
      },
      { 
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "file-loader" 
      },
      { 
        test: /\.(woff|woff2)$/, 
        loader:"url-loader?prefix=font/&limit=5000" 
      },
      { 
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "url-loader?limit=10000&mimetype=application/octet-stream" 
      },
      { 
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "url-loader?limit=10000&mimetype=image/svg+xml" 
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'root.jQuery': 'jquery'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.json'],
    root: __dirname,
    modulesDirectories: [
      '../node_modules',
      bootstrapCss
    ]
  },
  devServer: {
    contentBase: __dirname,
    hot: true,
    progress: true
  }
};
