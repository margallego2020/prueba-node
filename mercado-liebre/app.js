const express = require ('express');
const app = express();
const path = require ('path');


app.use(express.static(path.resolve(__dirname, "./public")));


app.listen(3030, () => {
    console.log('El servidor web está corriendo en la dirección ', 'http://localhost:3030');
});

app.get('/', (req, res) => {
    const fileToSend = path.join(__dirname, '/views/home.html');
    res.sendFile(fileToSend);
});

 app.get('/register', (req, res) => {
    const fileToSend = path.join(__dirname, '/views/register.html');
    res.sendFile(fileToSend);
});

app.post('/', (req, res) => {
    
    res.redirect('/');
})

app.get('/login', (req, res) => {
    const fileToSend = path.join(__dirname, '/views/login.html');
    res.sendFile(fileToSend);
});


