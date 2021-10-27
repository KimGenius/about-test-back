function generateRandString() {
  return Math.random().toString(36).substr(2, 20)
}

module.exports = {
  generateRandString
}
