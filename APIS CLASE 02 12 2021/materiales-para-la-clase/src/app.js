const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();


//Ejecuto el llamado a mis rutas
const indexRouter = require('./routes/index');
const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const genresRoutesAPI = require('./routes/api/genresRoutesAPI');
const moviesRoutesAPI = require('./routes/api/moviesRoutesAPI');
const { urlencoded } = require('express');

//Aquí pueden colocar las rutas de las APIs


// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el usod e los metodos put ó delete
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);
app.use('/api', genresRoutesAPI);
app.use('/api', moviesRoutesAPI);


//Activando el servidor desde express
app.listen('3001', () => console.log('Servidor corriendo en http://localhost:3001'));
