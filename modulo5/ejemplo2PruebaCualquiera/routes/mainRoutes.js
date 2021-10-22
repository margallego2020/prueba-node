let express = require('express');

let router = express.Router();

let mainController = require('../controllers/mainController.js');

router.get('/', mainController.index);

router.get('/register', mainController.register);

router.get('/login', mainController.login);

router.get('/list', mainController.list);

module.exports = router;
