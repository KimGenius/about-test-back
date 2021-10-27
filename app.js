const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/about-test')

const Board = mongoose.model('Board', {
  name: String,
  content: String,
  createdAt: {type: Date, default: Date.now},
})

function generateRandString() {
  return Math.random().toString(36).substr(2, 20)
}

app.post('/boards', async (req, res) => {
  const name = generateRandString()
  const board = new Board({name , content: generateRandString() })
  await board.save()
  res.send(`${name} 추가 완료`)
})

app.get('/boards', async(req, res) => {
  res.json(await Board.find())
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
