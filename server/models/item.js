const mongoose = require('mongoose')
const itemSchema = new mongoose.Schema({
  name: String,
  price: String,
  commont: Array,
  category: String,
  details: Array,
  slide: Array
})

module.exports = mongoose.model('Item', itemSchema)