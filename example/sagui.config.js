/**
 * Sagui configuration object
 * see: http://sagui.js.org/
 */
module.exports = {
  pages: ['index'],

  webpack: {
    module: {
      loaders: [
        {
          test: /\.ast$/,
          loader: 'ast'
        }
      ]
    }
  }
}
