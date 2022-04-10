const server = require("../index");
const Response = require('../utils/response');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require("chai");
const should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe('myapi', () => {
/*
  * Test the /GET route
  */
  describe('/GET /myapi', () => {
      it('it should GET a hello world', (done) => {
        chai.request(server)
            .get('/myapi')
            .end((err, res) => {
                  res.should.have.status(201);
                  res.body.should.be.a('object');
                  const bodyMessage = res.body.message;
                  expect(bodyMessage).to.be.equal('Hello World');
              done();
            });
      });
  });
  describe('/GET /myapi/pokemon/:name', () => {
    it('it should GET info from the pokemon psyduck', (done) => {
      chai.request(server)
          .get('/myapi/pokemon/psyduck')
          .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
            done();
          });
    });
});

});