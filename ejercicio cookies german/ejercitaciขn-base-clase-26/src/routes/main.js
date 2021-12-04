// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

// Requerimos las funciones de validacion
const {
  validateName,
  validateEmail,
  validateColor,
  validateAge
} = require('../validations/user');

// Generamos nuestro array de validaciones (middleware)
const userValidations = [
  validateName,
  validateEmail,
  validateColor,
  validateAge
];

router.get('/', mainController.index);
// Implementamos las validaciones en la ruta
router.post('/', userValidations, mainController.submit);

module.exports = router;
