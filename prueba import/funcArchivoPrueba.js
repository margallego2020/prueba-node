var fs = require ('fs');
const { escribir } = require('./funcionesDeTareasMartin');

var archivo = './tareasArchPrueba.json';

function abrirArchivo(){
    const arrayArregloEnJson = fs.readFileSync(archivo,'utf-8'); //abro el archivo archivoPrueba.json
    return JSON.parse(arrayArregloEnJson);
}

function leerArchivo(){
    var archivoParaVer = abrirArchivo();
    for (let i=0; i < archivoParaVer.length; i++){
        console.log(i + " tiene de actividad " + archivoParaVer[i].titulo + " y su estado es " + archivoParaVer[i].estado);
    }
}

function escribirArchivo(tareas){
    const archJSON = JSON.stringify(tareas);
    fs.writeFileSync(archivo, archJSON);

};

function guardarTarea(){
    let nota = {
            titulo : process.argv[2],
            estado : "pendiente"
            };
    console.log("Se va a agregar: " + nota.titulo);
    console.log(nota);
    
    let arregloDeNotas = abrirArchivo();
    arregloDeNotas.push(nota);
    escribirArchivo(arregloDeNotas);
}

function filtrar (estado){
    console.log(estado);
    const notas = abrirArchivo();
    console.log(notas);
    const arrayYaFiltrado = notas.filter( elemento => estado == elemento.estado);
    console.log(arrayYaFiltrado);
}

    



leerArchivo();
filtrar('en progreso');