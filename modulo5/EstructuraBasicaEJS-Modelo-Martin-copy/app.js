const express = require('express');

const mainRouter = require('./routes/main');

//Inicializo express
const app = express();

//Lo uso para que pueda usar las rutas
const path = require('path');


//Toma los archivos que ponga en la carpeta /public
app.use(express.static('./public'));

//Inicializo ejs
app.set('view engine', 'ejs');

//Cuando use '/' se va a manejar desde mainRouter
app.use('/', mainRouter);

// Activo el servidot en 3030
app.listen(3030, () => {
    console.log('Servidor levantado en http://localhost:3030');
})



