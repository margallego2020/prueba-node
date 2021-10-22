let express = require ('express');

let app = express();

let mainRoutes = require('./routes/mainRoutes.js');

app.use(express.static('./public'));

app.set('view engine', 'ejs');

app.use('/', mainRoutes);


app.listen(3000, () => console.log('Servidor levantado en el puerto 3000'));

