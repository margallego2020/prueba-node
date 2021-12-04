const { body } = require('express-validator');

const validateName = body('nombre')
  .notEmpty()
  .withMessage('Debes completar el nombre');

const validateEmail = body('email')
  .notEmpty()
  .withMessage('Debes completar el email');

const validateColor = body('color')
  .notEmpty()
  .withMessage('Debes completar el color');

const validateAge = body('edad')
  .notEmpty()
  .withMessage('Otro')
  .isInt()
  .withMessage('La edad debe ser un numero');

module.exports = {
  validateName,
  validateEmail,
  validateColor,
  validateAge
};
