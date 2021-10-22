let express = require('express');

let router = express.Router();

let usersController = require('../controllers/usersController.js');

// router.get('/', usersController.index);

router.get('/register', usersController.register);

router.get('/login', usersController.login);

router.get('/list', usersController.list);

router.get('/search', usersController.search);

router.get('/filter', usersController.filter);





module.exports = router;
