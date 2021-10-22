const express = require('express');

const mainRouter = require('./routes/mainRouter');

//Inicializo express
const app = express();

//Lo uso para que pueda usar las rutas
const path = require('path');


//Toma los archivos que ponga en la carpeta /public
app.use(express.static('./public'));

//Toma los archivos que ponga en la carpeta /views
app.set('views', path.join(__dirname, 'views'));


//Inicializo ejs
app.set('view engine', 'ejs');

//Cuando use '/' se va a manejar desde mainRouter
app.use('/', mainRouter);

// Activo el servidot en 3500


app.listen(3500, () => { console.log('Servidor corriendo en http://localhost:3500');})
