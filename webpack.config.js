module.exports = {
  entry: './src/index.js',
  output: { path: './build', publicPath: '/build/', filename: 'bundle.js' },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /.jsx?$/,
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        loader: "style-loader!css-loader",
        test: /\.css$/
      },
      {
        loader: 'url-loader?limit=10000',
        test: /\.(png|jpg|jpeg|gif|woff)$/
      }
    ]
  }
}
