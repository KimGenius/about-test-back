function getRandomTargetMember(targetMember = []) {
  let result = []
  for (let i = 0; i < 2; i++) {
    const randTargetMember = targetMember[getRandomInt(0, targetMember.length)]
    if (result.includes(randTargetMember)) {
      i--
      continue
    }
    result.push(randTargetMember.trim())
  }
  return result
}

function getRandomInt(min, max) {
  if (max < min) {
    return "min 값은 max 보다 클 수 없습니다."
  }
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

module.exports = {
  getRandomTargetMember,
  getRandomInt
}
