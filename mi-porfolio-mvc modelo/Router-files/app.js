const express = require('express');
const mainRouter = require('./routers/main');
const productsRouter = require('./routers/products');

// Inicializando express
const app = express();

// Declarando que a partir de '/' se va a manejar desde mainRouter
app.use('/', mainRouter);

// Declarando que a partir de '/productos' se va a manejar desde productsRouter
app.use('/products', productsRouter);

// Escuchamos en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
