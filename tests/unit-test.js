const { expect } = require('chai')
const generateRandString = require('../lib').generateRandString

describe('App test', function () {
  it('generateRandString 작동 테스트', function () {
    expect(generateRandString()).to.not.be.empty
  })
  it('generateRandString 길이 테스트', function () {
    expect(generateRandString(200)).to.have.lengthOf(200)
  })
})
