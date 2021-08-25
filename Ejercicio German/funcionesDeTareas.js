var fs = require('fs');

function listar() {
  // Leer archivo json
  var tareas = fs.readFileSync('./tareas.json');

  // Convertir a array
  var arrayTareas = JSON.parse(tareas);
  
  // Recorrer array e imprimir
  arrayTareas.forEach(element => {
    console.log(element.titulo);
  });
}

function agregarTarea(nuevaTarea) {
  // Leer las tareas actuales
  let tareas = fs.readFileSync('./tareas.json');
  // Convertir a array
  let arrayTareas = JSON.parse(tareas);

  // Agregar el nuevo elemento
  arrayTareas.push(nuevaTarea);

  // Convertir a string
  let datosAGuardar = JSON.stringify(arrayTareas);

  // Escribir dentro del archivo
  fs.writeFileSync('./tareas.json', datosAGuardar);
}

/*
function filtrar(estado) {
 // mostrar por pantalla las tareas del estado seleccionado
}
*/

// Objeto que se va a exportar
const funcionesDeTareas = {
  listarTareas: listar,
  agregarTarea,
  // filtrar
}

module.exports = funcionesDeTareas;