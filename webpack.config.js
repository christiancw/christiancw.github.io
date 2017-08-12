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
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
                presets:['react', 'es2015']
            }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
  test: /\.svg$/,
  loader: 'babel-loader!react-svg-loader?' + JSON.stringify({
    svgo: {
      // svgo options
      plugins: [{removeTitle: false}],
      floatPrecision: 2
    }
  }),
}
    ]
  }
};
