const webpack = require('webpack')

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "dist/bundle.js"
  },
  resolve: {
    // Look for modules in .ts(x) files first, then .js
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      // .ts(x) files should first pass through the Typescript loader, and then through babel
      { test: /\.tsx?$/, loaders: ['babel-loader', 'awesome-typescript-loader'] }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify("dev")
      }
    })
  ]
}
