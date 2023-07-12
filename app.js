// 載入套件
const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')

// 連接 mongoDB
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', () => console.log('mongoDB error'))
db.once('open', () => console.log('mongoDB connected'))

// 設定引擎
const app = express()
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')

// 設定路由
app.get('/', (req, res) => {
  res.render('index')
})

// 監聽器
const port = 3000
app.listen(port, () => {
  console.log(`Express running on localhost:${port}`)
})
