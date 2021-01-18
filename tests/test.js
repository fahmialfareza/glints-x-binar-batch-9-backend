let { user } = require('../models'); // import transaksi models

//Require the dev-dependencies
let chai = require('chai'); // import chai for testing assert
let chaiHttp = require('chai-http'); // make virtual server to get/post/put/delete
let server = require('../index'); // import app from index
let should = chai.should(); // import assert should from chai

chai.use(chaiHttp); // use chaiHttp

describe('User', () => {

  describe('/POST Sign Up', () => {
    it('It should make user and get authentication_key (jwt)', (done) => {
      chai.request(server)
        .post('/signup')
        .send({
          email: 'fahmialfareza1@icloud.com',
          password: '1234567890',
          passwordConfirmation: '1234567890',
          role: 'transaksi'
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('message').eql('Signin success!');
          res.body.should.have.property('token');
          done();
        })
    })
  })

  describe('/POST Sign In', () => {
    it('It should make user login and get authentication_key (jwt)', (done) => {
      chai.request(server)
        .post('/signin')
        .send({
          email: 'fahmialfareza1@icloud.com',
          password: '1234567890'
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('message').eql('Signin success!');
          res.body.should.have.property('token');
          authentication_key = res.body.token;
          done();
        })
    })
  })

});
