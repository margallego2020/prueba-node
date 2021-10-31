// ************ Require's ************
const express = require('express');

const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: false})); //veo la info del formulario via POST

app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public

app.listen(3000, () => {
  console.log("Servidor funcionando en http://localhost:3000")
})

app.set('view engine', 'ejs'); // Define que el motor que utilizamos es EJS
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas

const mainRoutes = require('./routes/mainRoutes'); 
const usersRoutes = require('./routes/usersRoutes'); 

app.use('/', mainRoutes);
app.use('/users', usersRoutes);
