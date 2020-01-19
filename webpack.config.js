const path = require('path');

module.exports = {
  entry: './src/app.js',
  mode: process.env.NODE_ENV,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', 'css']
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    compress: true,
    historyApiFallback: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: '/(node_modules|bower_components)/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [require('autoprefixer')];
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
};
