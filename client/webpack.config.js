const { join } = require('node:path')
// NEW for .env file
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: join(__dirname, 'index.tsx'),
  output: {
    path: join(__dirname, '../server/public'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  // NEW snippet to use .env in client side
  plugins: [
    // !!! NEW for .env file
    new Dotenv({
      path: join(__dirname, '../.env'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: join(__dirname, '../server/public'),
  },
}
