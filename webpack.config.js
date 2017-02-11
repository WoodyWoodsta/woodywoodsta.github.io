/* webpack.config.js */
var path = require('path');

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
        exclude: '/node_modules/',
        loaders: ['style-loader', 'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]'],
      },
      {
        test: /\.(js|es6)$/,
        exclude: '/node_modules/',
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
};
