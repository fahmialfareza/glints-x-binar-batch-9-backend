const connection = require('../models/connection.js') // import connection

class TransaksiController {

  // Function getAll transaksi table
  async getAll(req, res) {
    try {
      // SELECT ALL transaksi data
      var sql = "SELECT t.id as id_transaksi, b.nama as barang, p.nama as pelanggan, t.waktu, t.jumlah, t.total FROM transaksi t JOIN barang b ON t.id_barang = b.id JOIN pelanggan p ON t.id_pelanggan = p.id ORDER by t.id"

      // Run query
      connection.query(sql, function(err, result) {
        if (err) {
          res.json({
            status: "Error",
            error: err
          });
        } // If error

        // If success it will return JSON of result
        res.json({
          status: "success",
          data: result
        })
      });
    } catch (err) {
      // If error will be send Error JSON
      res.json({
        status: "Error",
        error: err
      })
    }
  }

  // Function getOne transaksi table
  async getOne(req, res) {
    try {
      // SELECT data from transaksi table where id from params
      var sql = "SELECT t.id as id_transaksi, b.nama as barang, p.nama as pelanggan, t.waktu, t.jumlah, t.total FROM transaksi t JOIN barang b ON t.id_barang = b.id JOIN pelanggan p ON t.id_pelanggan = p.id WHERE t.id = ?" // make an query varible

      // Run query
      connection.query(sql, [req.params.id], function(err, result) {
        if (err) {
          res.json({
            status: "Error",
            error: err
          });
        } // If error

        // If success it will return JSON of result
        res.json({
          status: "success",
          data: result[0]
        })
      });
    } catch (err) {
      // If error will be send Error JSON
      res.json({
        status: "Error",
        error: err
      })
    }
  }

  // Function create transaksi table
  async create(req, res) {
    try {
      // GET harga From barang table
      var sql = 'SELECT harga FROM barang where id = ?'

      // SELECT harga Query
      connection.query(sql, [req.body.id_barang], function(err, result) {
        if (err) {
          res.json({
            status: "Error",
            error: err
          });
        } // If error

        // If success it will make total variable
        var total = result[0].harga * req.body.jumlah

        // INSERT DATA INTO transaksi
        var sqlInsert = 'INSERT INTO transaksi(id_barang, id_pelanggan, jumlah, total) VALUES (?, ?, ?, ?)'

        // Run Insert Transaksi
        connection.query(
          sqlInsert,
          [req.body.id_barang, req.body.id_pelanggan, req.body.jumlah, total],
          (err, result) => {
            if (err) {
              res.json({
                status: "Error",
                error: err
              });
            } // If error

            // SELECT data from transaksi table where id from result
            var sqlSelect = "SELECT t.id as id_transaksi, b.nama as barang, p.nama as pelanggan, t.waktu, t.jumlah, t.total FROM transaksi t JOIN barang b ON t.id_barang = b.id JOIN pelanggan p ON t.id_pelanggan = p.id WHERE t.id = ?" // make an query varible

            // Run query
            connection.query(sqlSelect, [result.insertId], function(err, result) {
              if (err) {
                res.json({
                  status: "Error",
                  error: err
                });
              } // If error

              // If success it will return JSON of result
              res.json({
                status: "success add data",
                data: result[0]
              })
            });
          }
        )
      });
    } catch (err) {
      // If error will be send Error JSON
      res.json({
        status: "Error",
        error: err
      })
    }
  }

  // Function update transaksi table
  async update(req, res) {
    try {

      // UPDATE data transaksi
      var sql = 'UPDATE transaksi t SET id_barang = ?, id_pelanggan = ?, jumlah = ?, total = ? WHERE id = ?'

      connection.query(
        sql,
        [req.body.id_barang, req.body.id_pelanggan, req.body.jumlah, req.body.total, req.params.id],
        (err, result) => {
          if (err) {
            res.json({
              status: "Error",
              error: err
            });
          } // If error

          // If success it will return JSON of result
          res.json({
            status: 'Success',
            data: result
          })
        }
      )
    } catch (err) {
      // If error will be send Error JSON
      res.json({
        status: "Error",
        error: err
      })
    }
  }

  // Function delete transaksi table
  async delete(req, res) {
    try {

      // DELETE data transaksi
      var sql = 'DELETE FROM transaksi t WHERE id = ?'

      connection.query(
        sql,
        [req.params.id],
        (err, result) => {
          if (err) {
            res.json({
              status: "Error",
              error: err
            });
          } // If error

          // If success it will return JSON of result
          res.json({
            status: 'Success',
            data: result
          })
        }
      )
    } catch (err) {
      // If error will be send Error JSON
      res.json({
        status: "Error",
        error: err
      })
    }
  }

}

module.exports = new TransaksiController;
