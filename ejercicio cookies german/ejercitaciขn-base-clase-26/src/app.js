// ************ Require's ************
const express = require('express');
const path = require('path');

const cookieParser = require('cookie-parser');

// ************ Express() ************
const app = express();

// ************ Middlewares ************
app.use(express.static(path.join(__dirname, '../public'))); // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false })); // Para poder leer el body
app.use(express.json()); // Para poder leer el body

// ************ PARA LEER COOKIES ************
app.use(cookieParser());

// ************ PARA LEER COOKIES ************
const session = require('express-session');

app.use(session({ secret: 'Nuestro mensaje secreto' }));

// ************ Template Engine ************
app.set('view engine', 'ejs'); // Define que el motor que utilizamos es EJS
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas

// ************ Route System require and use() ************
const mainRouter = require('./routes/main'); // Rutas main

app.use('/', mainRouter);

// ************ Set the server to listen ************
app.listen(3500, () => {
  console.log('Servidor funcionando en http://localhost:3500');
});
