'use strict';

var webpack = require('webpack');

module.exports = {
  entry: './client/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?url=false',
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
              use: [{
                loader: 'react-svg-loader',
                options: {
                  es5: true,
                  svgo: {
                    plugins: [{
                      removeAttrs: {attrs: 'xmlns.*'}
                    }]
                  }
                }
             }]
},
{
  test: /jsx?$/,
  exclude: /(node_modules|bower_components)/,
  loader: 'babel-loader',
  query: {
          presets:['react', 'es2015']
      }
},
{
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  }
};
