const path = require('path');

const mainController =  {

    //Función que devuelve una respuesta para la página home
    home: (req, res) => {
        const archivo = path.join(__dirname, '../views/home.html');
        res.sendFile(archivo);
    },


    //Función que devuelve una respuesta para la página about
    about: (req, res) => {
        const archivo = path.join(__dirname, '../views/about.html');
        res.sendFile(archivo);
    }
    
};

module.exports = mainController;