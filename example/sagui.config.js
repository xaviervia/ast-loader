/**
 * Sagui configuration object
 * see: http://sagui.js.org/
 */
module.exports = {
  pages: ['index'],

  webpack: {
    loaders: [
      {
        test: /\.ast$/,
        loader: 'ast'
      }
    ]
  }
}
