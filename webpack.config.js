/* webpack.config.js */
var path = require('path');
var webpack = require('webpack');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devServer: {
    overlay: true,
  },
  entry: './src/index.es6',
  output: {
    path: path.join(__dirname, 'build/'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.es6'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: ['/node_modules/', '/bower_components/'],
        loader: ExtractTextPlugin.extract({
          notExtractLoader: 'style-loader',
          loader: 'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!resolve-url-loader!postcss-loader',
        }),
      },
      {
        test: /\.(js|es6)$/,
        exclude: ['/node_modules/', '/bower_components/'],
        loader: 'babel-loader',
        options: {
          plugins: [
            'transform-react-jsx-source',
            'react-css-modules',
          ],
          presets: [
            'react',
            ["env", {
              "targets": {
                "browsers": ["last 2 versions", "safari >= 7"],
                "modules": false,
                "loose": true,
              },
            }],
          ],
        },
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin({
      filename: 'app.css',
      allChunks: true,
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'sean-wood-portfolio',
      filepath: path.join(__dirname, 'sw.js'),
      maximumFileSizeToCacheInBytes: 4194304,
      minify: true,
      staticFileGlobs: ['assets/**', 'build/**', 'index.html', 'manifest.json'],
      runtimeCaching: [{
        handler: 'cacheFirst',
        urlPattern: 'bower_components/**',
      }],
    }),
  ],
};
