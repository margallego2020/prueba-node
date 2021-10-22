let fs = require('fs');

//Creo un archivo y si no existe el archivo lo crea

//fs.writeFileSync('prueba.txt', 'Prueba 2!!');

//Con appendFileSync lo agrega al final del archivo

//fs.appendFileSync('prueba.txt', 'El final');

//Abro un archivo prueba.txt y le indico en qué código está hecho

let contenido = fs.readFileSync('prueba.txt', {encoding: 'utf-8'});

console.log(contenido);