const mongoose = require('mongoose')
const SlideSchema = mongoose.Schema({
  name: {
    type: String
  },
  url: {
    type: String
  }
})
module.exports = mongoose.model('Slide', SlideSchema)