const mongoose = require('mongoose')
const itemSchema = new mongoose.Schema({
  name: String,
  price: String,
  url: Array,
  category: String,
  details: Array,
})

module.exports = mongoose.model('Item', itemSchema)