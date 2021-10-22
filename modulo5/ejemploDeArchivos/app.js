let express = require ('express');

let app = express();

let mainRoutes = require('./routes/mainRoutes.js');

let usersRoutes = require('./routes/usersRoutes.js');

app.use(express.static('./public'));

//Esto es para que pueda tomar los argumentos del buscador

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: false })); // to support URL-encoded bodies

//Llamo al paquete method override para usar put y delete
const methodOverride = require('method-override');
app.use(methodOverride("_method"));

let path = require('path');

//console.log(path);

//Si quiero saber en dónde se encuentra el archivo de usuarios

//con path.join junto con varios strings la ruta del archivo

let archivoUsuarios = path.join('..', 'files', 'users', 'users.json');

//console.log(archivoUsuarios);

//Me dice la extensión del archivo

let extension = path.extname(archivoUsuarios);

console.log(extension);

let direction = path.dirname(archivoUsuarios);

console.log(direction);

app.set('view engine', 'ejs');

app.use('/', mainRoutes);

app.use('/users', usersRoutes);

app.listen(3000, () => console.log('Servidor levantado en el puerto 3000'));

//Esto es para mostrar algo en pantalla en el navegador cuando en el servidor no se encuentra algo

app.use((req, res, next) => {
    res.status(404).render("not-found")
})

