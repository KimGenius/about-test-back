const cors = require('cors')
const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
const {generateRandString} = require("./lib")
mongoose.connect('mongodb://localhost:27017/about-test')
app.use(cors({origin: true, credentials: true}))

const Board = mongoose.model('Board', {
  name: String,
  content: String,
  createdAt: {type: Date, default: Date.now},
})

app.post('/boards', async (req, res) => {
  const name = generateRandString()
  const board = new Board({name, content: generateRandString()})
  await board.save()
  res.send(`${name} 추가 완료`)
})

app.get('/boards', async (req, res) => {
  res.json(await Board.find())
})

app.get('/boards/:author', async (req, res) => {
  res.json(await Board.find({name: {"$regex": req.params.author, "$options": "i"}}))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

