const assert = require('assert')
const generateRandString = require('../lib').generateRandString

describe('App test', function () {
  it('generateRandString Test', function () {
    assert.equal(generateRandString(), 'hello')
  })
})
