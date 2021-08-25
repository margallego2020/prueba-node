var funcionesDeTareas = require('./funcionesDeTareas');

let accion = process.argv[2];

switch (accion) {

  case 'listar':
    funcionesDeTareas.listarTareas();
    break;

  case 'agregar':
    let tituloNuevo = process.argv[3];
    let nuevaTarea = { titulo: tituloNuevo, estado: 'pendiente' };
    console.log('Agregando tarea: ', nuevaTarea.titulo);
    funcionesDeTareas.agregarTarea(nuevaTarea);
    break;

  case 'filtrar':
    // let estado = leer de la terminal
    // funcionesDeTareas.filtrar(estado)
    break;

  case undefined:
    console.log('Nada');
    break;
    
  default:
    console.log('No entiendo la accion');
    break;
}
