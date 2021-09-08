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
