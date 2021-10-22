const path = require('path');

const mainController = {
  // Funcion que devuelve una respuesta para la pagina index
  index: (req, res) => {
    const archivo = path.join(__dirname, '../views/home.html');

    res.sendFile(archivo);
  },
  // Funcion que devuelve una respuesta para la pagina register
  register: (req, res) => {
    const archivo = path.join(__dirname, '../views/register.html');

    res.sendFile(archivo);
  },
  // Funcion que devuelve una respuesta para la pagina login
  login: (req, res) => {
    const archivo = path.join(__dirname, '../views/login.html');

    res.sendFile(archivo);
  }
};

module.exports = mainController;
