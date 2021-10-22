let express = require ('express');

let rutasProductos = require('./routes/productos.js');
let rutasMain = require('./routes/main.js');

let app = express();

app.listen(3000, () => console.log('Conectados bien al servidor'));

// Cuando escriba /productos en la web me toma las cosas que quiero que haga en el archivo que está en  ./routes/productos.js

app.use('/productos', rutasProductos);

app.use('/', rutasMain);




