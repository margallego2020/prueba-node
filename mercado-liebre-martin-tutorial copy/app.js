const express = require ('express');
const path = require ('path');

const app = express();

app.use( express.static(path.resolve(__dirname, './public')) );

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));

app.get ('/', (req, res) => {

    res.sendFile(path.resolve(__dirname, './views/index.html'));
})

app.get ('/pr', (req, res) => {

    res.sendFile(path.resolve(__dirname, './views/index product.html'));
})