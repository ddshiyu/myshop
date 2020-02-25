const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
  user: String,
  goods: {type: mongoose.SchemaTypes.ObjectId, ref:'Item'},
  num: Number
})

module.exports = mongoose.model('Cart', cartSchema)