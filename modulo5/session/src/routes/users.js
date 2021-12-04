const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');
const usersController= require('../controllers/usersController');
const {check} = require('express-validator');

let guestMiddleware = require('../middlewares/guestMiddleware');
let authMiddleware = require('../middlewares/authMiddleware');

const userAuth = require('../middlewares/userAuth');

router.get('/', mainController.index);

router.get('/admin',userAuth , mainController.admin);

// router.get('/register',guestMiddleware , usersController.register);

router.get('/login', usersController.login);


router.post('/login', usersController.processLogin2);


/*
router.post('/login', [
    check('email').isEmail().withMessage('Email inválido'),
    check('password').isLength({min: 3}).withMessage('La contraseña debe tener al menos 8 caracteres')
],usersController.processLogin);

*/
router.get('/check', function(req, res){
    if (req.session.usuarioLogueado == undefined) {
        res.send("No estás logueado");
    } else {
        res.send("El usuario logueado es: " + req.session.usuarioLogueado.email);
    }

})
module.exports = router;

