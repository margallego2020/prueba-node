const express = require('express');
const app = express();
const mainRouter = require('./routes/mainRouter');

app.use(express.static('public'));

app.use('/', mainRouter);

app.listen(3500, () => { console.log('Servidor corriendo en http://localhost:3500');})