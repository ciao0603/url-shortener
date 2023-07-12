const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index')
})

const port = 3000
app.listen(port, () => {
  console.log(`Express running on localhost:${port}`)
})
