const express = require('express');

//Tomo en mainRouter lo que está en archivo main de routers
const mainRouter = require('./routers/main');

//Inicializo express
const app = express();

//Lo uso para que pueda usar las rutas

const path = require('path');

//Le digo en dónde están los archivos estáticos

app.use(express.static(path.resolve(__dirname, './public') ) );



//A partir de ahora la '/' se va a manejar desde mainRouter

app.use ('/', mainRouter);



//Escucho el puerto 3000

app.listen(3000, () => {

    console.log('Servidor funcionando en http://localhost:3000');

});

