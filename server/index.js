
const express = require('express')
const app = express()
// 设置跨域
app.use(require('cors')())
app.use(express.json())
app.set('secret','543543gfdg')
app.use('/uploads', express.static(__dirname + '/uploads'))
app.use('/admin', express.static(__dirname+'/admin'))
app.use('/', express.static(__dirname+'/web'))
require('./router/admin')(app)
require('./router/web')(app)
require('./plugins/dbs')(app)

app.listen('3000', () => {
  console.log('http://localhost:3000')
})