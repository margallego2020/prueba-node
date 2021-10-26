const { application } = require('express');
const express = require('express');

// Importo el middleware
const logDBMiddleware = require('../middlewares/logDBMiddleware');

//Uso del express-validator lo que me devuelve el campo 'body'
const { body } = require('express-validator');

// Habilito el router para mandar las funciones que está en express
const router = express.Router();

// Almaceno en un array el resultado de las validaciones
const validateCreateForm = [
    //valido que el campo first_name no esté vacío. 
    // Si el campo está vacío le mando un mensaje de error con withMessage
    body('first_name').notEmpty().withMessage('Debes completar el campo de nombre'),
    body('last_name').notEmpty().withMessage('Debes completar el campo de apellido'),
    body('email').isEmail().withMessage('Debes completar un email válido') 

];




// Llamo al mainController que es el archivo que tiene todas las funciones que está en controllers/mainController

const mainController = require('../controllers/mainController');

// Con router, de acuerdo a la ruta que ponga, que haga tal función en mainController

router.get('/', mainController.index);

router.get('/login', mainController.login);

router.get('/register', mainController.register);

// POST que no existe pero para ejemplo de express-validator

router.post('/register', validateCreateForm, mainController.almacenar);

router.get('/products', mainController.products);

// Si me viene cualquier product
// /products/1
// /products/2
// /products/3
router.get('/products/:id', logDBMiddleware, mainController.productsDetail);

module.exports = router;

