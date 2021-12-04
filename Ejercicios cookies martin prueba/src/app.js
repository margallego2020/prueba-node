//SECCION REQUIRE

//Para usar express
const express = require('express'); 

//Para usar path
const path = require('path');


//Habilito express
const app = express();

//Para usar cookies
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//Habilito leer parámetros del req.body y req.params
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


//Le digo en dónde está la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

//Para validar los campos y leer cookies
const session = require('express-session');
app.use(session( { secret: 'Nuestro mensaje secreto'}));

//Para usar EJS
//Le digo que uso de motor EJS
app.set('view engine','ejs');  

//Defino la ubicación de la carpeta de vistas
app.set('views', path.join(__dirname, '/views'));

//Habilito los routers
const mainRouter = require('./routes/main');

app.use('/', mainRouter);

//Habilito el puerto 3000 para ser escuchado
app.listen(3000, () => {
    console.log('Servidor funcionando en http://localhost:3000');
} );
