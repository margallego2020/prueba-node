const path = require('path'); 

const { body } = require('express-validator'); 

module.exports = [

  body('fullName').notEmpty().withMessage('Tienes que escribir un nombre'),//valida si este campo no está vacío
    body('email')
        .notEmpty().withMessage('Tienes que escribir un correo electrónico')//valida si este campo no está vacío
         //si tengo un error para notEmpty no sigo con las validaciones, se cortó ahí. 
        .bail() //bail detiene las validaciones si el error saltó. Si no salta el error sigue con las demás
        // validaciones y deja pasar el resto de las validaciones
        .isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'), //valida si este campo no está vacío
    body('country').notEmpty().withMessage('Tienes que elegir un pais'), //valida si este campo no está vacío
    //Voy a validar los archivos que subo
    body('avatar').custom((value, { req }) => {
        let file = req.file; //obtengo el archivo de la propiedad file del request
        let acceptedExtensions = ['.jpg', '.png', '.gif'];
        

        if (!file) { //si no tengo archivos
            throw new Error('Tienes que subir una imagen'); //te tira este mensaje de error
        } else {
            let fileExtension = path.extname(file.originalname);//saco la extensión del archivo que viene
            if (!acceptedExtensions.includes(fileExtension)) {//si al extensión del archivo que viene 
                //no tiene las extensiones permitidas, mensaje de error
                    throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`); 
            }
        }

      return true;

      })
    ]