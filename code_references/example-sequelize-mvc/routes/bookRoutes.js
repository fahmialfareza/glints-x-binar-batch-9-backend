const express = require('express')
const router = express.Router()
const BookController = require('../controllers/bookController.js')
const bookValidator = require('../middlewares/validators/bookValidator.js')

router.get('/', BookController.helloWorld)
router.get('/book', BookController.getAll)
router.post('/book/create', bookValidator.create, BookController.create)
router.put('/book/update', bookValidator.update, BookController.update)
router.delete('/book/delete/:isbn', bookValidator.delete, BookController.delete)

module.exports = router;
