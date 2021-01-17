let mongoose = require("mongoose"); // import mongoose
let {
  pelanggan
} = require('../models'); // import pelanggan models

//Require the dev-dependencies
let chai = require('chai'); // import chai for testing assert
let chaiHttp = require('chai-http'); // make virtual server to get/post/put/delete
let server = require('../index'); // import app from index
let should = chai.should(); // import assert should from chai
let pelanggan_id; // pelanggan_id declaration

chai.use(chaiHttp); // use chaiHttp

describe('Pelanggan', () => {
  before((done) => { //Before each test we empty the database
    pelanggan.remove({}, (err) => {
      done();
    });
  });

  /*
   * Test the /GET route
   */
  describe('/GET pelanggan', () => {
    it('it should GET all the pelanggan', (done) => {
      chai.request(server) // request to server (index.js)
        .get('/pelanggan')
        .end((err, res) => {
          res.should.have.status(200); // Response should have status 200
          res.body.should.be.an('object'); // Body Response should be an object
          res.body.should.have.property('status'); // Body Response should have 'status' property
          res.body.should.have.property('data'); // Body Response should have 'data' property
          res.body.data.should.be.an('array'); // Body Response .data should be an array
          done();
        });
    });
  });

  /*
   * Test the /POST route
   */
  describe('/POST pelanggan', () => {
    it('it should POST a pelanggan', (done) => {
      chai.request(server)
        .post('/pelanggan/create')
        .send({
          nama: "Fahmi Alfareza"
        })
        .end((err, res) => {
          pelanggan_id = res.body.data._id;
          res.should.have.status(200); // Response should have status 200
          res.body.should.be.an('object'); // Body Response should be an object
          res.body.should.have.property('status'); // Body Response should have 'status' property
          res.body.should.have.property('data'); // Body Response should have 'data' property
          res.body.data.should.be.an('object'); // Body Response .data should be an array
          res.body.data.should.have.property('_id'); // data: {_id: ....}
          done()
        });
    });
  });

  /*
   * Test the /POST route
   */
  describe('/GET one pelanggan', () => {
    it('it should get one pelanggan', (done) => {
      chai.request(server)
        .get(`/pelanggan/${pelanggan_id}`)
        .end((err, res) => {
          res.should.have.status(200); // Response should have status 200
          res.body.should.be.an('object'); // Body Response should be an object
          res.body.should.have.property('status'); // Body Response should have 'status' property
          res.body.should.have.property('data'); // Body Response should have 'data' property
          res.body.data.should.be.an('object'); // Body Response .data should be an array
          done();
        })
    });
  });

  /*
   * Test the /PUT/:id route
   */
  describe('/PUT/:id pelanggan', () => {
    it('it should UPDATE a pelanggan given the id', (done) => {
      let pelangganPut = {
        nama: "Alfareza, Fahmi"
      }
      chai.request(server)
        .put('/pelanggan/update/' + pelanggan_id)
        .send(pelangganPut)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('data');
          res.body.data.should.be.a('object');
          res.body.data.should.have.property('_id').eql(pelanggan_id);
          done();
        });
    });
  });

  /*
   * Test the /DELETE/:id route
   */
  describe('/DELETE/:id pelanggan', () => {
    it('it should DELETE a pelanggan given the id', (done) => {
      /* DELETE */
      chai.request(server)
        .delete('/pelanggan/delete/' + pelanggan_id)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('data').eql(null);
          done();
        });
    });
  });

  after((done) => { //Before each test we empty the database
    pelanggan.remove({}, (err) => {
      done();
    });
  });

})
