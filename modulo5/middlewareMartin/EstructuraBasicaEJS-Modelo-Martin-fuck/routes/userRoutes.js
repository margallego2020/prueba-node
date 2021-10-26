
const express = require('express');

// Habilito el router para mandar las funciones que está en express
const router = express.Router();

// Llamo al usersController que es el archivo que tiene todas las funciones que está en controllers/usersController

const usersController = require('../controllers/userController');


// Con router, de acuerdo a la ruta que ponga, que haga tal función en mainController

// Formulario de registro
router.get('/register', usersController.register);

// Formulario de login
router.get('/login', usersController.login);

// Perfil de usuario
router.get('/profile/:userId', usersController.profile);


module.exports = router;

