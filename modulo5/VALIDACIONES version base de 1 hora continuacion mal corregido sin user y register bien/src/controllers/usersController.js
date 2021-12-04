const { validationResult } = require('express-validator'); 
const bcryptjs = require('bcryptjs');
const User = require('../models/User'); //voy a usar el modelo user que hice



const controller = {
	register: (req, res) => {
		// res.cookie('testing', 'Hola mundo!', { maxAge: 1000 *  30 }); //creo una cookie

		return res.render('userRegisterForm');
	},

	processRegister: (req, res) => {
		const resultValidation = validationResult(req); //validationResult espera el request
		//Me dice cuáles campos tuvieron error luego de las validaciones
		 
		
		if (resultValidation.errors.length > 0) { //si hay errores
			return res.render('userRegisterForm', {
			errors: resultValidation.mapped(),
			oldData: req.body //es lo que viajó en el body del request
			});  
	//mapped convierte al array en un objeto literal en donde cada objeto literal va a tener las 
	//propiedades que antes tenía
		}

		//Con esto me fijo si está repetido el email del usuario
		let userInDB = User.findByField('email', req.body.email);

		if (userInDB) {
			return res.render('userRegisterForm', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body //es lo que viajó en el body del request
			});

		}
		

		let userToCreate = {
			...req.body, //es todo lo que tiene el req.body
			password: bcryptjs.hashSync(req.body.password,10), //hasheo la password del body
			avatar: req.file.filename,

		}

		let userCreated = User.create(userToCreate); //Creame el usuario
		//Cuando no hubo errores hago un send
		// return res.send('Ok, las validaciones pasaron y no tienes errores');
		return res.redirect('/users/login');
		
	}, 

	login: (req, res) => {
		

		return res.render('userLoginForm');

	},

	loginProcess: (req, res) => {

		let userToLogin = User.findByField('email', req.body.email);
		
		if (userToLogin) { //si existe el usuario 
			let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password );
			if (isOkThePassword) {//comparo la contraseña que me viene en el req cpn el 
			// de la base de datos
				delete userToLogin.password; //borro la password del userToLogin por seguridad
				req.session.userLogged = userToLogin;

				if(req.body.remember_user) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2 })

				}
				return res.redirect('../users/profile');
			} 

			return res.render('userLoginForm', {//cuando no está el email manda el mensaje de error
				errors: {
					email: {
						msg: 'Las credenciales son inválidas'
					}
				}
			});

		};
		
		return res.render('userLoginForm', {//cuando no está el email manda el mensaje de error
			errors: {
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				}
			}
		});
	},

	profile: (req, res) => {
		return res.render('userProfile', {
			user: req.session.userLogged
		});
	},

	logout: (req, res) => {
		res.clearCookie('userEmail'); //destruyo la cookie userEmail 
		req.session.destroy(); //borra todo lo que está todo en sesión
		console.log();
		return res.redirect('/');
	}
}

module.exports = controller;