//Defino en validatonResult los resultados que tira la validación
const { validationResult } = require('express-validator');


const mapArray = require('../utils/mapArrayMultiple');

//Defino la variable ONE-MONTH para usar en la dureción de la cookie en un mes
const ONE_MONTH = 1000 * 60 * 60 * 24 * 30;

const mainController = {
    index: (req, res ) => {
        

        //El color es el que viene definido por la cookie
        //Por default es azul
        const color = req.cookies.color;

        //Muestra el color del fondo definido en el campo colorFondo de la cookie
        let colorFondo = req.cookies.colorFondo;
        console.log(colorFondo);

        //Muestra el mensaje de secret definido en session
        let secret = req.session.secret;
        console.log(secret);

        //Llamo al formulario y mando como datos el color de la cookie y como es la primera vez le indico que no hay errores
        res.render('index', { color, data: null, errors : [] });

    },

    submit: (req, res) => {
        //Guardo en formulario y cookies lo que hay guardado en el body de cada uno de ellos
        const formulario = req.body;
        const cookies = req.cookies;

        console.log(formulario);

        req.session.colorFondo = 'Violeta';

        //Tomo del color lo que viene por las cookies o lo que viene por el del formulario

        //azul        //azul              //undefined
        color = formulario.color || cookies.color

        //Si hay un color guardado en el formulario tomalo, sino borrá la cookie y el valor del color

        if (formulario.saveColor) {
                        //azul
            res.cookie('color', formulario.color, { maxAge: ONE_MONTH});

        } else {
            res.clearCookie('color');
            color = null;
        }

        res.render('index', { color, data: null, errors : [] });

    }

}


module.exports = mainController;

