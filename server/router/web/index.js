module.exports = app => {
  const express = require('express')
  const router = express.Router()
  const slide = require('../../models/slide')
  const item = require('../../models/item')
  const account = require('../../models/account')
  const cart = require('../../models/cart')
  const jwt = require('jsonwebtoken')
  router.get('/slide', async (req, res) => {
    const data = await slide.find()
    res.send(data)
  })
  router.get('/item/:id', async (req, res) => {
    let data
    console.log(req.params.id)
    if(req.params.id === '1'){
      console.log('gg')
      data = await item.find()
    }else{
      data = await item.find({category: req.params.id})
    }
    res.send(data)
  })
  router.get('/detail/:id', async (req, res) => {
    const data = await item.findById(req.params.id)
    res.send(data)
  })
  router.post('/addToCart', async (req, res) => {
    const {user, goods, num} = req.body
    const flag = await cart.findOne({goods})
    console.log(flag)
    if(flag){
      await cart.findOneAndUpdate({goods},{'$inc':{'num':1}})
    }else{
      await cart.create(req.body)
    }
    const data = await cart.find()
    res.send(data)
  })
  router.post('/getCart', async (req, res) => {
    const data = await cart.find().where({
      user: req.body.username
    }).populate('goods')
    res.send(data)
  })
  router.post('/account', async (req, res) => {
    const data = await account.findOne(req.body)
    if(!data || data.length === 0){
      res.send({
        msg: 1,
      })
    }else {
      const token = jwt.sign({id: data._id}, app.get('secret'))
      res.send({
        msg: 0,
        token: token,
        username: data.username
      })
    }
  })
  app.use('/web/api', router)
} 