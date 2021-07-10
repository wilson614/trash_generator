const express = require('express')
const exphbs = require('express-handlebars')
const generator = require('./generator')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req,res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const trash = generator(req.body)
  res.render('index', { trash })
})

app.listen(port, () => {
  console.log(`This server is running on http://localhost:${port}`)
})