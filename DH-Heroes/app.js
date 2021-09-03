const express = require ('express');
const app = express();
const path = require ('path');

const staticFiles = express.static('public');

app.use(staticFiles);

app.listen(3030, () => {
    console.log('El servidor web está corriendo en la dirección ', 'http://localhost:3030');
});

app.get('/home', (req, res) => {
    const fileToSend = path.join(__dirname, '/views/index.html');
    res.sendFile(fileToSend);
});
app.get('/babbage', (req, res) => {
    const fileToSend = path.join(__dirname, '/views/babbage.html');
    res.sendFile(fileToSend);
});
app.get('/berners-lee', (req, res) => {
    const fileToSend = path.join(__dirname, '/views/berners-lee.html');
    res.sendFile(fileToSend);
});
app.get('/clarke', (req, res) => {
    const fileToSend = path.join(__dirname, '/views/clarke.html');
    res.sendFile(fileToSend);
});
app.get('/hamilton', (req, res) => {
    const fileToSend = path.join(__dirname, '/views/hamilton.html');
    res.sendFile(fileToSend);
});
app.get('/hopper', (req, res) => {
    const fileToSend = path.join(__dirname, '/views/hopper.html');
    res.sendFile(fileToSend);
});
app.get('/lovelace', (req, res) => {
    const fileToSend = path.join(__dirname, '/views/lovelace.html');
    res.sendFile(fileToSend);
});
app.get('/turing', (req, res) => {
    const fileToSend = path.join(__dirname, '/views/turing.html');
    res.sendFile(fileToSend);
});

