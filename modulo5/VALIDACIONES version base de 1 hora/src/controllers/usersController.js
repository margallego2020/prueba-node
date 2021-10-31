const { validationResult } = require('express-validator'); 


const controller = {
	register: (req, res) => {
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

		//Cuando no hubo errores hago un send
		return res.send('Ok, las validaciones pasaron y no tienes errores');
		
	}, 

	login: (req, res) => {
		return res.render('userLoginForm');
	},

	profile: (req, res) => {
		return res.render('userProfile');
	}
}

module.exports = controller;