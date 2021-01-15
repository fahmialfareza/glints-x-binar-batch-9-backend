const express = require('express'); // Import express
const passport = require('passport'); // Import passport

const router = express.Router(); // Make router
const auth = require('../middlewares/auth'); // Import auth
const GoodsController = require('../controllers/goodsController'); // Import GoodsController
const goodsValidator = require('../middlewares/validators/goodsValidator'); // Import goodsValidator

let checkUser = async (req, res, next) => {
  if (req.header('Authorization')) {
    passport.authenticate('user', {
      session: false
    }, function(err, user, info) {
      if (err) {
        return next(err);
      }

      if (!user) {
        res.status(401).json({
          status: 'Error',
          message: info.message
        });
        return;
      }

      req.user = user;

      next();
    })(req, res, next);
  } else {
    next();
  }
};

router.get('/', checkUser, GoodsController.getAll); // It will get all of goods data
router.get('/:id', [passport.authenticate('user', { session: false }), goodsValidator.getOne], GoodsController.getOne); // It will get one good data
router.post('/', [passport.authenticate('user', { session: false }), goodsValidator.create], GoodsController.create); // It will create a good
router.put('/:id', [passport.authenticate('user', { session: false }), goodsValidator.update], GoodsController.update); // It will update a good
router.delete('/:id', [passport.authenticate('user', { session: false }), goodsValidator.delete], GoodsController.delete); // It will delete a good

module.exports = router; // Export router
