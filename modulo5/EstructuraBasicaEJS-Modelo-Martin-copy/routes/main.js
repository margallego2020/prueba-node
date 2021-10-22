const { application } = require('express');
const express = require('express');

// Habilito el router para mandar las funciones que está en express
const router = express.Router();

// Llamo al mainController que es el archivo que tiene todas las funciones que está en controllers/mainController

const mainController = require('../controllers/mainController');

// Con router, de acuerdo a la ruta que ponga, que haga tal función en mainController

router.get('/', mainController.index);

router.get('/login', mainController.login);

router.get('/register', mainController.register);

router.get('/products', mainController.products);

// Si me viene cualquier product
// /products/1
// /products/2
// /products/3
router.get('/products/:id', mainController.productsDetail);

module.exports = router;

