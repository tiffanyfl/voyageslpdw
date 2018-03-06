'use strict';
const {expect} = require('chai');
const supertest = require('supertest');
const request = supertest('http://localhost:3000');

describe('booking API', function() {
  describe('When booking for a flight', function() {
    it('without flight id should return a 400 error', function(){
      return request
        .post('/bookings')
        .send({user_id: '1'})
        .expect(400, err => {
          console.log(err);
        });
    });

    it('without authentification should return a 401 error', function(){
      return request
        .post('/bookings')
        .set({user_id: '123', id_flight: "AF-444"})
        .expect(401, err => {
          console.log(err);
        });
    });

    it('si la requete a toutes les infos, on reçoit un 201 et la reference', function(){
      return request
        .post('/bookings')
        .set({'authentification', 'MY_TOKEN')
        .send({id_user: '123', id_flight: 'AF-123'})
        .expect(201)
        .then(responde => {
          
        });
    });

    it('with all data should return a 201');
  });
});
