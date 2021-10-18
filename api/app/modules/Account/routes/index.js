var express = require('express');
var router = express.Router();
const jwtVerify = require('../../../Http/Middleware/jwt')

const AuthController = require('../controllers/AuthController');
const userController = new (require('../controllers/UserController'));

// router.get('/', AuthController.login);
router.post('/login', AuthController.login);
router.post('/create', AuthController.create);
router.post('/fetch', jwtVerify, userController.fetch);

module.exports = router;
