module.exports = app => {
  const express = require('express')
  const router = express.Router()
  const slide = require('../../models/slide')
  const path = require('path')
  router.get('/slidelist', async (req, res) => {
    const data = await slide.find()
    res.send(data)
  })
  router.post('/slideedit', async (req, res) => {
    const data = await slide.create(req.body);
    res.send(data)
  })
  router.get('/slide/:id', async (req, res) => {
    const data = await slide.findById(req.params.id)
    res.send(data)
  })
  router.put('/slideedit/:id', async (req, res) => {
    const data = await slide.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
    res.send(data)
  })
  router.delete('/slideedit/:id', async (req, res) => {
    const data = await slide.findByIdAndDelete(req.params.id, { useFindAndModify: false })
    res.send({
      success: 0
    })
  })

  app.use('/admin/api', router)
  const multer = require('multer')
  const upload = multer({
    dest: __dirname + '/../../uploads'
  })
  app.post('/admin/api/upload', upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })
}