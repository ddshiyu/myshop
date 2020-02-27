const mongoose = require('mongoose')
const newsSchema = new mongoose.Schema({
  title: String,
  body: String,
  url: String
},{
  timestamps: true
})
module.exports = mongoose.model('News', newsSchema)