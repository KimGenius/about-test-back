const { expect } = require('chai')
const { getRandomTargetMember, getRandomInt } = require('../lib')

describe('밥 맛있는지 테스트', function () {
  describe('getRandomInt 작동 테스트', function () {
    it('정상 작동 테스트', function () {
      for (let i = 0; i < 50; i++) {
        const result = getRandomInt(1, 3)
        expect(result).to.be.a('number')
        expect(result).to.be.above(0)
        expect(result).to.be.below(3)
      }
    })
    it('max < min 테스트', function () {
      const result = getRandomInt(3, 1)
      expect(result).to.be.a('string')
      expect(result).to.equal("min 값은 max 보다 클 수 없습니다.")
    })
  })
  describe('getRandomTargetMember 길이 테스트', function () {
    it('정상 작동 테스트', function () {
      const result = getRandomTargetMember(["김0재", "김1재", "김2재", "김3재"])
      expect(result).to.be.a('array')
      expect(result).to.have.lengthOf(2)
      expect(result[0]).to.not.equal(result[1])
    })
  })
})
