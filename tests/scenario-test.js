const { expect } = require('chai')
const request = require('supertest')
const app = require('../app')

describe('Scenario test', function () {
  it('POST /boards', function (done) {
    request(app)
      .post('/boards')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
  it('GET /boards', function (done) {
    request(app)
      .get('/boards')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        expect(res.body).to.be.a('array')
        expect(res.body).to.have.lengthOf.above(0)
        if (err) throw err
        return done()
      })
  })
})
