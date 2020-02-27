module.exports = app => {
  const express = require('express')
  const router = express.Router()
  const slide = require('../../models/slide')
  const item = require('../../models/item')
  const account = require('../../models/account')
  const cart = require('../../models/cart')
  const news = require('../../models/news')
  const jwt = require('jsonwebtoken')
  router.get('/slide', async (req, res) => {
    const data = await slide.find()
    res.send(data)
  })
  router.get('/item/:id', async (req, res) => {
    let data
    if(req.params.id === '1'){
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
    const flag1 = await cart.findOne({user})
    console.log(flag)
    if(flag && flag1){
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
  router.delete('/deleteCart/:id', async (req, res) => {
    await cart.findByIdAndRemove(req.params.id)
    const data = await cart.find()
    res.send(data)
  })
  router.get('/news', async (req, res) => {
    const data = await news.find()
    res.send(data)
  })
  router.post('/search', async (req, res) => {
    const { keywords} = req.body
    const data = await item.find()
    let result = []
    for(let key of data){
      console.log(key.name)
      if(key.name.includes(keywords)){
        result.push(key)
      }
    }
    res.send(result)
  })
  router.post('/account', async (req, res) => {
    const {username, password} = req.body
    const flag = await account.findOne({username})
    let data
    let token
    if(JSON.stringify(req.body) !== '{}' && !flag){
      data = await account.create(req.body)
      token = jwt.sign({id: data._id}, app.get('secret'))
      res.send({
        msg: 0,
        token: token,
        username: data.username
      })
    }else{
      if(flag.password === password){
        token = jwt.sign({id: flag._id}, app.get('secret'))
        res.send({
          msg: 0,
          token: token,
          username: flag.username
        })
      }else{
        res.send({
          msg: 1
        })
      }
    }
    
    
  })
  app.use('/web/api', router)
} 