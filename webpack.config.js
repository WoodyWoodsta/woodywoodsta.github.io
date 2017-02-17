/* webpack.config.js */
var path = require('path');
var webpack = require('webpack');
// TODO: Make a production version

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
        loaders: [
          'style-loader',
          'css-loader?importLoader=1&modules&localIdentName=[hash:base64:4]',
          'postcss-loader'
        ],
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
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ]
};
