module.exports = app => {
  const express = require('express')
  const router = express.Router()
  const slide = require('../../models/slide')
  const item = require('../../models/item')
  const path = require('path')
  router.get('/', async (req, res) => {
    const data = await req.model.find()
    res.send(data)
  })
  router.post('/', async (req, res) => {
    const data = await req.model.create(req.body)
    res.send(data)
  })
  router.get('/:id', async (req, res) => {
    const data = await req.model.findById(req.params.id)
    res.send(data)
  })
  router.put('/:id', async (req, res) => {
    const data = await req.model.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
    res.send(data)
  })
  router.delete('/:id', async (req, res) => {
    const data = await req.model.findByIdAndDelete(req.params.id, { useFindAndModify: false })
    res.send({
      success: 0
    })
  })
  
    const multer = require('multer')
    const upload = multer({
      dest: __dirname + '/../../uploads'
    })
    app.post('/admin/api/upload', upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })
  router.get('/', async (req, res) => {
    const data = await item.find()
    res.send(data)
  })
  router.post('/', async (req, res) => {
    const data = await item.create(req.body)
    res.send(data)
  })
  router.get('/:id', async (req, res) => {
    const data = await item.findById(req.params.id)
    res.send(data)
  })
  router.put('/:id', async (req, res) => {
    const data = await item.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
    res.send(data)
  })
  // 定义资源中间件
  const resourceMiddleWare = require('../../middleware/resource')
  app.use('/admin/api/:resource', resourceMiddleWare(),router)
  

}