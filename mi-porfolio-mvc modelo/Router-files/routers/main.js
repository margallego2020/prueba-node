const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main');

// Si la solicitud es GET y la ruta '/' llamamos a la funcion index de mainController
router.get('/', mainController.index);

// Si la solicitud es GET y la ruta '/register' llamamos a la funcion register de mainController
router.get('/register', mainController.register);

// Si la solicitud es GET y la ruta '/login' llamamos a la funcion login de mainController
router.get('/login', mainController.login);

module.exports = router;
