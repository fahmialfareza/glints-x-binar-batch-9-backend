//Require the dev-dependencies
let chai = require('chai'); // import chai for testing assert
let chaiHttp = require('chai-http'); // make virtual server to get/post/put/delete
let server = require('../index'); // import app from index
let should = chai.should(); // import assert should from chai

chai.use(chaiHttp); // use chaiHttp

describe('Hello', () => {

  describe('/GET hello', () => {
    it('Should get Hello World', (done) => {
      chai.request(server)
        .get('/hello')
        .end( (err, res) => {
          res.should.have.status(404);
          res.body.should.have.an('object');
          res.body.should.have.property('message').equal('Hello World!');
          done();
        }
      );
    });

    it('Should get Hello Cuy', (done) => {
      chai.request(server)
        .get('/hello')
        .end( (err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('array');
          res.body.should.have.property('message').equal('Hello World!');
          done();
        }
      );
    });
  })

});

describe('User', () => {

  describe('/GET user', () => {
    it('Should get user', (done) => {
      chai.request(server)
        .get('/hello')
        .end( (err, res) => {
          res.should.have.status(200);
          done();
        }
      );
    })
  })

});

describe('Product', () => {

  describe('/GET product', () => {
    it('Should get product', (done) => {
      chai.request(server)
        .get('/hello')
        .end( (err, res) => {
          res.should.have.status(200);
          done();
        }
      );
    })
  })

});
