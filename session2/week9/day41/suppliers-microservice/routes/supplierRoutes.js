const express = require('express'); // Import express
const passport = require('passport'); // Import passport

const router = express.Router(); // Make router
const auth = require('../middlewares/auth'); // Import auth
const SuppliersController = require('../controllers/suppliersController'); // Import SuppliersController
const suppliersValidator = require('../middlewares/validators/suppliersValidator'); // Import suppliersValidator

router.get('/', passport.authenticate('user', { session: false }), SuppliersController.getAll); // It will get all of suppliers data
router.get('/:id', [passport.authenticate('user', { session: false }), suppliersValidator.getOne], SuppliersController.getOne); // It will get one supplier data
router.post('/', [passport.authenticate('user', { session: false }), suppliersValidator.create], SuppliersController.create); // It will create a supplier
router.put('/:id', [passport.authenticate('user', { session: false }), suppliersValidator.update], SuppliersController.update); // It will update a supplier
router.delete('/:id', [passport.authenticate('user', { session: false }), suppliersValidator.delete], SuppliersController.delete); // It will delete a supplier

module.exports = router; // Export router
