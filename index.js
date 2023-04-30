const express = require('express')
const corses = require('cors')
const app = express()
const port = 5000


app.use(corses()) 


const categories = require("./data/categories.json")

const news = require("./data/news.json")


app.get('/', (req, res) => {
  res.send('Dragon Is Running')
})

app.get('/categories', (req, res) => {
  res.send(categories)
})

app.get('/news', (req, res) => {
  res.send(news)
})




app.listen(port, () => {
  console.log(`Dragon API is Running  ${port}`)
})