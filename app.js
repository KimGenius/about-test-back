const cors = require('cors')
const express = require('express')
const app = express()
app.use(express.json())
const port = 4000
const {getRandomTargetMember} = require("./lib")
const db = require("./db")
app.use(cors({origin: true, credentials: true}))

app.post('/bab', async (req, res) => {
  let {newMember, targetMember} = req.body
  newMember = newMember.trim()
  targetMember = targetMember.trim()
  if (!newMember) return res.status(400).json({message: '신규 입사자를 입력해주세요'})
  if (!targetMember) return res.status(400).json({message: '기존 팀원을 입력해주세요'})
  const [rows] = await db.execute(`SELECT resultMember
                                   FROM bab
                                   WHERE newMember = '${newMember}'`)
  const historyList = []
  for (const row of rows) {
    const data = row.resultMember.split(',')
    historyList.push(data[0])
    historyList.push(data[1])
  }
  const splitTargetMember = targetMember.split(',').map(member => {
    return member.trim()
  })
  for (history of historyList) {
    const isHistory = splitTargetMember.indexOf(history)
    if (isHistory > -1) splitTargetMember.splice(isHistory, 1)
  }
  if (splitTargetMember.length < 2) {
    return res.status(409).json({
      message: '밥을 같이 먹지 않은 팀원이 2명 미만입니다.'
    })
  }
  await db.execute(`INSERT INTO bab(newMember, targetMember, resultMember) VALUES('${newMember}', '${targetMember}', '${getRandomTargetMember(splitTargetMember).join(',')}')`)
  return res.status(201).json()
})




app.get('/bab', async (req, res) => {
  const [rows] = await db.execute("SELECT * FROM bab ORDER BY createdAt DESC")
  res.json(rows)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app
