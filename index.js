const {default: generate} = require('babel-generator')

module.exports = (x) => generate(JSON.parse(x)).code
