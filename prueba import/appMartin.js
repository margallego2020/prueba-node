//const fs = require('fs');
var funcionesTareas = require ('./funcionesDeTareasMartin');
let accion = process.argv[2];

switch (accion) {
    case 'listar':
        console.log("Listado de tareas");
        const arrayParaVer = funcionesTareas.leerJSON();
        for (let i=0; i < arrayParaVer.length; i++){
            console.log("Posición "+i+" tiene de tarea: " + arrayParaVer[i].titulo + " y su estado es " + arrayParaVer[i].estado);
        }
        break;


    case 'crear':
        const nota = {
            titulo : process.argv[3],
            estado : "pendiente"
        };
        
        funcionesTareas.guardarTarea(nota);
        console.log("Creado: " + nota.titulo + " con estado: " + nota.estado);
        
        break;

    case 'filtrar':
        const estado = process.argv[3];
        const arrayYaFiltr = funcionesTareas.filtrarPorEstado(estado);        
        console.log(arrayYaFiltr);
        break;

    case undefined:
        console.log("Atención - Tienes que pasar una acción");
        break;

    default:
        console.log("No entiendo qué quieres hacer");
        break;

};
