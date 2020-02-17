module.exports = options => {
  return async (req, res, next) => {
    req.model = require(`../models/${req.params.resource}`)
    next()
  }
}