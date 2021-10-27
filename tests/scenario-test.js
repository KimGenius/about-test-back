const { expect } = require('chai')
const request = require('supertest');
const app = require('../app')

describe('Scenario test', function () {
  it('GET /user', function (done) {
    request(app)
      .get('/boards/x99jwpeq9x')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        expect(res.body).to.be.a('array')
        expect(res.body).to.be.a('array')
        if (err) throw err
        return done()
      });
  });
})
