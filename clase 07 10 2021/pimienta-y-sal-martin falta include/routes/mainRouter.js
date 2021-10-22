const { application } = require('express');
const express = require('express');

// Habilito el router para mandar las funciones que está en express
const router = express.Router();

// Llamo al mainController que es el archivo que tiene todas las funciones que está en controllers/mainController

const mainController = require('../controllers/mainController');

// Con router, de acuerdo a la ruta que ponga, que haga tal función en mainController

router.get('/', mainController.index);

router.get('/detalle/:id', mainController.detalleMenu);

router.get('/detalle/', mainController.detalleMenu);

/*router.get('/register', mainController.register);

router.get('/products', mainController.products);*/

module.exports = router;