import app from 'json!./app.ast'
import generate from 'babel-generator'

console.log(generate(app))
