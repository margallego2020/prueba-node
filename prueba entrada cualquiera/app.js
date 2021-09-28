const express = require('express');
const app = express();
const path = require ('path');


const publicFolderPath = path.resolve(__dirname, './public');

app.use( express.static(publicFolderPath) );

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto: 3000", "http://localhost:3000" );
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
})

app.get('/productDetail', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/productDetail.html'));
})

app.get('/productDetailcopycopy', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/productDetailcopycopy.html'));
})