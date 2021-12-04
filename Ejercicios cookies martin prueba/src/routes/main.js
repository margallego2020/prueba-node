//Uso router de express
const express = require('express');
const router = express.Router();

//Defino el controlador 
const mainController = require('../controllers/mainController');

//Las funciones de validación van a estar definidas en un determinado archivo
const {
    validateName,
    validateEmail,
    validateColor,
    validateAge
} = require('../validations/user');

//El middleware va a estar definido por un array de validaciones

const userValidations = [

    validateName,
    validateEmail,
    validateColor,
    validateAge
];

//Defino las rutas para pedir formulario y hacer validaciones
router.get('/', mainController.index);

router.post('/', userValidations, mainController.submit);

module.exports = router;

