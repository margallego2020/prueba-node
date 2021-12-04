let {check, validationResult, body} = require('express-validator');



const users = [
    {
        name: 'Jorge',
        email: 'jorge@mar.com',
        password: 'jorge'
    },

    {
        name: 'Pedro',
        email: 'pedro@mar.com',
        password: 'pedro'
    },
    
    {
        name: 'Pablo',
        email: 'pablo@mar.com',
        password: 'pablo'
    },
    {
        name: 'Martin',
        email: 'martin@mar.com',
        password: 'martin'
    }
];

const usersController = {
    
    login: function(req, res) {
        return res.render('login');
    },

    processLogin2: function (req, res) {
        for (let i = 0; i < users.length; i++) {
            if (req.body.email == users[i].email && 
                bcrypt.compareSync(req.body.password, users[i].password))
                { //Me fijo si el usuario es correcto y que la contraseña sea válida
                res.send('Te encontré');
            }

        }

        res.send('error');

    },

    processLogin: function(req, res) {
         
        let errors = validationResult(req); //pregunto si hay errores
        if (errors.isEmpty()) {
      
            
            let usuarioALoguearse;
            for (let i = 0; i < users.length; i++) {
                if (users[i].email == req.body.email) { //si el email del usuario es lo mismo que puso el formulario
                    if (bcrypt.compareSync(req.body.password, users[i].password)){ //compara si la contraseña está bien con la base de datos
                        usuarioALoguearse = users[i]; //es el usuario que acaba de encontrar
                        break;
                        
                    }
                }     
            }

            if (usuarioALoguearse == undefined) { //si no encontré el usuario
                return res.render('login', {errors: [
                    { msg: 'Credenciales inválidas' } 
                ]});

            }

            req.session.usuarioLogueado = usuarioALoguearse; //asigno el usuario a loguearse a usuario logueado
            
            res.send('Success');

            if (req.body.recordame != undefined) {
                res.cookie('recordame', usuarioALoguearse.email, { maxAge: 60000}); //creo cookie con tiempo de duración
            }

        } else {
            return res.render('login', {errors: errors.errors});
        }
    },

};

module.exports = usersController;
