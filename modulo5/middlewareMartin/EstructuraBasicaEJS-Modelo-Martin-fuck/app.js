const express = require('express');

//Inicializo express
const app = express();


//Toma los archivos que ponga en la carpeta /public
app.use(express.static('./public'));

// Activo el servidot en 3030
app.listen(3030, () => {
    console.log('Servidor levantado en http://localhost:3030');
})

//Inicializo ejs
app.set('view engine', 'ejs');


const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');



//Cuando use '/' se va a manejar desde mainRoutes
app.use('/', mainRoutes);


//Cuando use '/user' se va a manejar desde userRoutes
app.use('/user', userRoutes);





