const {
  barang,
  pelanggan,
  transaksi
} = require('../models');

class TransaksiController {

  async getAll(req, res) {
    transaksi.find({}).then(result => {
      res.json({
        status: "Succes get all data",
        data: result
      })
    })
  }

  async getOne(req, res) {
    transaksi.findOne({
      _id: req.params.id
    }).then(result => {
      res.json({
        status: "Succes",
        data: result
      })
    })
  }

  async create(req, res) {
    const data = await Promise.all([
      barang.findOne({
        _id: req.body.id_barang
      }),
      pelanggan.findOne({
        _id: req.body.id_pelanggan
      })
    ])

    const total = eval(data[0].harga.toString()) * req.body.jumlah;

    transaksi.create({
      barang: data[0],
      pelanggan: data[1],
      jumlah: eval(req.body.jumlah),
      total: total,
      status: "pending"
    }).then(async (result) => {
      const axios = require('axios');
      let data = JSON.stringify({
        "transaction_details": {
          "order_id": `${result.id}`,
          "gross_amount": total
        },
        "callbacks": {
          "finish": "https://google.com"
        },
        "expiry": {
          "unit": "minutes",
          "duration": 5
        }
      });

      let config = {
        method: 'post',
        url: 'https://app.sandbox.midtrans.com/snap/v1/transactions',
        headers: {
          'Authorization': 'Basic U0ItTWlkLXNlcnZlci1Yclk4ZXp0QmZsS3REbmFNUVpjTEF4Tmk=',
          'Content-Type': 'application/json'
        },
        data: data
      };

      let response = await axios(config);

      let newData = response.data;

      let updateTransaksi = await transaksi.findOneAndUpdate({
        _id: result.id
      }, {
        $set: newData
      }, {
        new: true
      });

      res.json({
        status: "Succes create new transaksi",
        data: updateTransaksi
      })
    })
  }

  async update_status(req, res) {
    let data = req.query;
    let status;

    if (data.status_code == 200) {
      status = "success";
    } else if (data.status_code == 201) {
      status = "pending";
    }

    let updateTransaksi = await transaksi.findOneAndUpdate({
      _id: data.order_id
    }, {
      $set: {
        status: status
      }
    }, {
      new: true
    })

    return res.status(200).json({
      status: "Payment success",
      data: updateTransaksi
    });
  }

  async update_status_post(req, res) {
    let data = req.body;
    let status;

    if (data.status_code == 200) {
      status = "success";
    } else if (data.status_code == 201) {
      status = "pending";
    } else if (data.status_code == 407) {
      status = "failed";
    }

    let updateTransaksi = await transaksi.findOneAndUpdate({
      _id: data.order_id
    }, {
      $set: {
        status: status
      }
    }, {
      new: true
    })

    return res.status(200).json({
      status: "Payment success",
      data: updateTransaksi
    });
  }

  async update(req, res) {
    const data = await Promise.all([
      barang.findOne({
        _id: req.body.id_barang
      }),
      pelanggan.findOne({
        _id: req.body.id_pelanggan
      })
    ])
    let total = eval(data[0].harga.toString()) * req.body.jumlah
    transaksi.findOneAndUpdate({
      _id: req.params.id
    }, {
      barang: data[0],
      pelanggan: data[1],
      jumlah: req.body.jumlah,
      total: total
    }).then(() => {
      return transaksi.findOne({
        _id: req.params.id
      })
    }).then(result => {
      res.json({
        status: "Succes updating data",
        data: result
      })
    })
  }

  async delete(req, res) {
    transaksi.delete({
      _id: req.params.id
    }).then(result => {
      res.json({
        status: "Succes delete data",
        data: null
      })
    })
  }

}

module.exports = new TransaksiController;
