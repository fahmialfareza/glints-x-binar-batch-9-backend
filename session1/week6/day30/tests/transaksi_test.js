let mongoose = require("mongoose"); // import mongoose
let {
  transaksi
} = require('../models'); // import transaksi models

//Require the dev-dependencies
let chai = require('chai'); // import chai for testing assert
let chaiHttp = require('chai-http'); // make virtual server to get/post/put/delete
let server = require('../index'); // import app from index
let should = chai.should(); // import assert should from chai
let transaksi_id; // transaksi_id declaration

chai.use(chaiHttp); // use chaiHttp

describe('Transaksi', () => {
  beforeEach((done) => { //Before each test we empty the database
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
        .send({
          id_barang: '5fccb45e683964d75bd4d3bc',
          id_pelanggan: '5fccb3f6683964d75bd4d3b6',
          jumlah: 20
        })
        .end((err, res) => {
          transaksi_id = res.body.data._id;
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
  describe('/POST transaksi', () => {
    it('it should get one transaksi', (done) => {
      /* POST */
      chai.request(server)
        .post('/transaksi/create')
        .send({
          id_barang: '5fccb45e683964d75bd4d3bc',
          id_pelanggan: '5fccb3f6683964d75bd4d3b6',
          jumlah: 20
        })
        .end((err, res) => {
          transaksi_id = res.body.data._id
          chai.request(server)
            .get(`/transaksi/${transaksi_id}`)
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
        .send(transaksiPost)
        .end((err, res) => {
          /* PUT */
          transaksi_id = res.body.data._id
          chai.request(server)
            .put('/transaksi/update/' + transaksi_id)
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
        .send(transaksiPost)
        .end((err, res) => {
          /* DELETE */
          transaksi_id = res.body.data._id
          chai.request(server)
            .delete('/transaksi/delete/' + transaksi_id)
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

})
