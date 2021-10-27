const { expect } = require('chai')
const generateRandString = require('../lib').generateRandString

describe('App test', function () {
  it('generateRandString Test', function () {
    expect(generateRandString()).to.equal('bar')
  })
})
