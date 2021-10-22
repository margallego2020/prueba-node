const express = require ("express");
const path = require("path");
const app = express();

//listen en localHost 3000

app.listen( 3000 , () => { console.log("Servidor levantado "," http://localhost:3000/home")
});


//.use sirven de archivos estaticos como css e imagenes

const staticFiles = express.static("public");
app.use(staticFiles);

//get 

// genero una respuesta atravez de un get traigo mi "/views/home.html" con el  metodo path que esta guardado en una variable senFile

app.get("/home", (req,res) => {
    const fileToSent = path.join(__dirname, "/views/home.html" );
    res.sendFile(fileToSent);
});

app.get("/register", (req,res) => {
    const fileToSent = path.join(__dirname, "/views/register.html" );
    res.sendFile(fileToSent);
});

app.get("/login", (req,res) => {
    const fileToSent = path.join(__dirname, "/views/login.html" );
    res.sendFile(fileToSent);
});

app.post("/register", (req,res) => {
    res.redirect("/home");
});

app.post("/login", (req,res) => {
    res.redirect("/home");
});





