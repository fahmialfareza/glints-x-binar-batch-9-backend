let mongoose = require("mongoose"); // import mongoose
let {
  user
} = require('../models/mysql'); // import transaksi models

//Require the dev-dependencies
let chai = require('chai'); // import chai for testing assert
let chaiHttp = require('chai-http'); // make virtual server to get/post/put/delete
let server = require('../index'); // import app from index
let should = chai.should(); // import assert should from chai
let authentication_key; // transaksi_id declaration

chai.use(chaiHttp); // use chaiHttp

describe('User', () => {

  describe('/POST Sign Up', () => {
    it('It should make user and get authentication_key (jwt)', (done) => {
      chai.request(server)
        .post('/signup')
        .send({
          email: 'fahmialfareza@icloud.com',
          password: '1234567890',
          passwordConfirmation: '1234567890',
          role: 'transaksi'
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('message').eql('Signup success!');
          res.body.should.have.property('token');
          done();
        })
    })
  })

  describe('/POST Login', () => {
    it('It should make user login and get authentication_key (jwt)', (done) => {
      chai.request(server)
        .post('/login')
        .send({
          email: 'fahmialfareza@icloud.com',
          password: '1234567890'
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('message').eql('Login success!');
          res.body.should.have.property('token');
          authentication_key = res.body.token;
          done();
        })
    })
  })

});

describe('Transaksi', () => {
  before((done) => { //Before each test we empty the database
    transaksi.remove({}, (err) => {
      done();
    });
  });

  /*
   * Test the /GET route
   */
  describe('/GET transaksi', () => {
    it('it should GET all the transaksi', (done) => {
      chai.request(server) // request to server (index.js)
        .get('/transaksi')
        .set({
          Authorization: `Bearer ${authentication_key}`
        })
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
  describe('/POST transaksi', () => {
    it('it should POST a transaksi', (done) => {
      chai.request(server)
        .post('/transaksi/create')
        .set({
          Authorization: `Bearer ${authentication_key}`
        })
        .send({
          id_barang: '5fccb45e683964d75bd4d3bc',
          id_pelanggan: '5fccb3f6683964d75bd4d3b6',
          jumlah: 20
        })
        .end((err, res) => {
          res.should.have.status(200); // Response should have status 200
          res.body.should.be.an('object'); // Body Response should be an object
          res.body.should.have.property('status'); // Body Response should have 'status' property
          res.body.should.have.property('data'); // Body Response should have 'data' property
          res.body.data.should.be.an('object'); // Body Response .data should be an array
          res.body.data.should.have.property('_id'); // data {_id: ....}
          done()
        })
    })

    it('it should error POST a transaksi', (done) => {
      chai.request(server)
        .post('/transaksi/create')
        .set({
          Authorization: `Bearer ${authentication_key}`
        })
        .send({
          id_barang: '5fccb45e683964d75bd4d3b',
          id_pelanggan: '5fccb3f6683964d75bd4d3b6',
          jumlah: 20
        })
        .end((err, res) => {
          res.should.have.status(422); // Response should have status 200
          res.body.should.be.an('object'); // Body Response should be an object
          res.body.should.have.property('errors'); // Body Response should have 'status' property
          res.body.errors.should.be.an('object'); // Body Response .data should be an array
          done()
        })
    })
  })

  /*
   * Test the /GET/:id route
   */
  describe('/GET/:id transaksi', () => {
    it('it should GET a transaksi', (done) => {
      let transaksiPost = {
        id_barang: "5fccb45e683964d75bd4d3bc",
        id_pelanggan: "5fccb3f6683964d75bd4d3b6",
        jumlah: 20
      }
      chai.request(server)
        /* POST */
        .post('/transaksi/create')
        .set({
          Authorization: `Bearer ${authentication_key}`
        })
        .send(transaksiPost)
        .end((err, res) => {
          /* GET */
          transaksi_id = res.body.data._id
          chai.request(server)
            .get('/transaksi/' + transaksi_id)
            .set({
              Authorization: `Bearer ${authentication_key}`
            })
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('status');
              res.body.should.have.property('data');
              res.body.data.should.be.a('object');
              res.body.data.should.have.property('_id').eql(transaksi_id);
              done();
            })
        });
    });
  });

  /*
   * Test the /PUT/:id route
   */
  describe('/PUT/:id transaksi', () => {
    it('it should UPDATE a transaksi given the id', (done) => {
      let transaksiPost = {
        id_barang: "5fccb45e683964d75bd4d3bc",
        id_pelanggan: "5fccb3f6683964d75bd4d3b6",
        jumlah: 20
      }
      let transaksiPut = {
        id_barang: "5fccb45e683964d75bd4d3bc",
        id_pelanggan: "5fccb3f6683964d75bd4d3b6",
        jumlah: 30
      }
      /* POST */
      chai.request(server)
        .post('/transaksi/create')
        .set({
          Authorization: `Bearer ${authentication_key}`
        })
        .send(transaksiPost)
        .end((err, res) => {
          /* PUT */
          transaksi_id = res.body.data._id
          chai.request(server)
            .put('/transaksi/update/' + transaksi_id)
            .set({
              Authorization: `Bearer ${authentication_key}`
            })
            .send(transaksiPut)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('status');
              res.body.should.have.property('data');
              res.body.data.should.be.a('object');
              res.body.data.should.have.property('_id').eql(transaksi_id);
              done();
            });
        });
    });
  });

  /*
   * Test the /DELETE/:id route
   */
  describe('/DELETE/:id transaksi', () => {
    it('it should UPDATE a transaksi given the id', (done) => {
      let transaksiPost = {
        id_barang: "5fccb45e683964d75bd4d3bc",
        id_pelanggan: "5fccb3f6683964d75bd4d3b6",
        jumlah: 20
      }
      /* POST */
      chai.request(server)
        .post('/transaksi/create')
        .set({
          Authorization: `Bearer ${authentication_key}`
        })
        .send(transaksiPost)
        .end((err, res) => {
          /* DELETE */
          transaksi_id = res.body.data._id
          chai.request(server)
            .delete('/transaksi/delete/' + transaksi_id)
            .set({
              Authorization: `Bearer ${authentication_key}`
            })
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('status');
              res.body.should.have.property('data').eql(null);
              done();
            });
        });
    });
  });

  after((done) => { //Before each test we empty the database
    transaksi.remove({}, (err) => {
      done();
    });
  });

})
