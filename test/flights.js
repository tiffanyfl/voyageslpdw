'use strict';
const {expect} = require('chai');
const supertest = require('supertest');
const request = supertest('http://localhost:3000');

describe('voyage API', function() {
  describe('When looking for a flight CDG > BOG without a date', function() {
    it('should return a 400 error', function() {
      return request
        .get('/flights')
        .query({origin: 'CDG', destination: 'BOG'})
        .expect(400, err => {
          console.log(err);
        });
    });

    it('should return a 200 for a flight CDG > BOG today', function() {
      return request
        .get('/flights')
        .query({origin: 'CDG', destination: 'BOG', date: new Date()})
        .expect(200)
        .then(response => {
          const body = response.body;
          expect(body).to.be.an('array');
          expect(body.length).to.be.equal(2);
          expect(body[0].origin).to.be.equal('CDG');
        });
    });
  });
});
