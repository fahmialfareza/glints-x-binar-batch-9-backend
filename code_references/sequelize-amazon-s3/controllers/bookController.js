const book = require("../models").Book
const {
  check,
  validationResult,
  matchedData,
  sanitize
} = require('express-validator'); //form validation & sanitize form params

class BookController {

  async helloWorld(req, res) {
    res.send('Hello World');
  }

  async getAll(req, res) {
    book.findAll().then(book => {
      res.json(book)
    })
  }

  async create(req, res) {
    book.create({
      name: req.body.name,
      isbn: req.body.isbn,
      year: req.body.year,
      author: req.body.author,
      description: req.body.description,
      image: req.file === undefined ? "" : req.file.url
    }).then(newBook => {
      res.json({
        "status": "success",
        "message": "Book added",
        "data": newBook
      })
    })
  }

  async update(req, res) {
    const update = {
      name: req.body.name,
      isbn: req.body.isbn,
      year: req.body.year,
      author: req.body.author,
      description: req.body.description,
      image: req.file === undefined ? "" : req.file.url
    }
    book.update(update, {
        where: {
          isbn: req.body.isbn
        }
      })
      .then(() => {
        return book.findOne({
          where: {
            isbn: req.body.isbn
          }
        })
      })
      .then(b => {
        res.json({
          "status": "success",
          "message": "Book updated",
          "data": b
        })
      })
  }

  async delete(req, res) {
    book.destroy({
        where: {
          isbn: req.params.isbn
        }
      })
      .then(affectedRow => {
        if (affectedRow) {
          return {
            "status": "success",
            "message": "Book deleted",
            "data": null
          }
        }

        return {
          "status": "error",
          "message": "Failed",
          "data": null
        }

      })
      .then(r => {
        res.json(r)
      })
  }

}

module.exports = new BookController;
