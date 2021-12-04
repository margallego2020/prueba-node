const { validationResult } = require('express-validator');
const mapArray = require('../utils/mapArrayMultiple');

const ONE_MONTH = 1000 * 60 * 60 * 24 * 30;

const mainController = {
  index: (req, res) => {
    // color del fondo
    const color = req.cookies.color; // azul

    let colorFondo = req.session.colorFondo;
    console.log(colorFondo);

    let secret = req.session.secret;
    console.log(secret);

    res.render('index', { color, data: null, errors: [] });
  },

  submit: (req, res) => {
    const formulario = req.body;
    const cookies = req.cookies;

    console.log(formulario);

    req.session.colorFondo = 'Violeta';

    //          // azul            // undefined
    let color = formulario.color || cookies.color;

    if (formulario.saveColor) {
      //                  azul
      res.cookie('color', formulario.color, { maxAge: ONE_MONTH });
    } else {
      res.clearCookie('color');
      color = null;
    }

    res.render('index', { color, data: null, errors: [] });
  }
};

/** ERROR
 * {
    value: '',
    msg: 'Debes completar el nombre',
    param: 'nombre',
    location: 'body'
  }
 */

module.exports = mainController;
