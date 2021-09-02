let express = require ('express');
let app = express ();
let path = require ('path');

//console.log(app);

// creo/monto un servidor

app.listen(3000, () => console.log("Esto fue exitoso"));

/*app.get ('/', function(req, res) {
    res.send('Bienvenidos al sitio');

});*/

//Le explico a express las rutas que va a tener el sitio. Qué páginas puedo escribir en mi sitio. /contactos. /productos
//Estas son las rutas que sabe contestar nuestro sitio web.
app.get('/', function(req, res){
    res.send('Bienvenidos al sitio');
});
app.get('/contacto', function(req, res){
    res.send('Dejanos tu contacto!');
});

app.get('/un-array', function(req, res){
    res.send([1,2,3,4]);
});

app.get('/un-objeto', function(req, res){
    res.send({name: "Dario"});
});

app.get('/archivo', function(req, res){
    //console.log(__dirname); ubicación en donde me encuentro
    //res.sendFile('./index.html');
    let htmlPath = path.resolve(__dirname, './index.html');
    //console.log(htmlPath);
    res.sendFile(htmlPath);
})
