function getRandomTargetMember(targetMember = []) {
  let result = []
  for (let i = 0; i < 2; i++) {
    const randTargetMember = targetMember[getRandomInt(0, targetMember.length)]
    if (result.includes(randTargetMember)) {
      i--
      continue
    }
    result.push(randTargetMember)
  }
  return result
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

module.exports = {
  getRandomTargetMember
}
