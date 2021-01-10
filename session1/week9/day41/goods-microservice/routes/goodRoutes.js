const express = require('express'); // Import express
const passport = require('passport'); // Import passport

const router = express.Router(); // Make router
const auth = require('../middlewares/auth'); // Import auth
const GoodsController = require('../controllers/goodsController'); // Import GoodsController
const goodsValidator = require('../middlewares/validators/goodsValidator'); // Import goodsValidator

router.get('/', passport.authenticate('user', { session: false }), GoodsController.getAll); // It will get all of goods data
router.get('/:id', [passport.authenticate('user', { session: false }), goodsValidator.getOne], GoodsController.getOne); // It will get one good data
router.post('/', [passport.authenticate('user', { session: false }), goodsValidator.create], GoodsController.create); // It will create a good
router.put('/:id', [passport.authenticate('user', { session: false }), goodsValidator.update], GoodsController.update); // It will update a good
router.delete('/:id', [passport.authenticate('user', { session: false }), goodsValidator.delete], GoodsController.delete); // It will delete a good

module.exports = router; // Export router
