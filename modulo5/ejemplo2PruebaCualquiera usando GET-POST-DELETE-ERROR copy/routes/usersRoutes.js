let express = require('express');

let router = express.Router();

let usersController = require('../controllers/usersController.js');

// router.get('/', usersController.index);

//Esto sirve para pedir el formulario de registración

router.get('/register', usersController.register);

//Esto sirve cuando ya envié la información del formulario de registración

router.post('/register', usersController.create);

router.get('/login', usersController.login);

router.get('/list', usersController.list);

router.get('/search', usersController.search);

//Quiero ver la información que tengo del usuario a modificar tal idUser

router.get('/edit/:idUser', usersController.edit);

//Esto actualiza la información

router.put('/edit', function(req, res) {
    res.send("Fui por PUT");
})

//Esto borra el registro que le mandé eliminar

router.delete('/delete/:userId', function(req, res) {
    res.send("Soy delete");
})

router.get('/filtrarCels/:idUser', usersController.edit);





module.exports = router;
