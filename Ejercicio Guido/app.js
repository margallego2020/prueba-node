let funcionesDeTareas = require('./funcionesDeTareas');

let accion = process.argv[2];
switch (accion) {

    case 'listar':

        console.log('Listado de tareas');

        let tareas = funcionesDeTareas.leerJSON();

        for (let i = 0; i < tareas.length; i++) {
            console.log(i + '. ' + tareas[i].titulo + ' - ' + tareas[i].estado);
        }

        break;

    case 'crear':

        let nota = {
            titulo: process.argv[3],
            estado: "pendiente"
        }

        funcionesDeTareas.guardarTarea(nota);

        console.log("Tarea creada: " + nota.titulo);

        break;

    case 'filtrar':

        const estado = process.argv[3];

        const arrYaFiltrado = funcionesDeTareas.filtrarPorEstado(estado);

        arrYaFiltrado.forEach(element => console.log(element.titulo));

        break;
        
    case undefined:

        console.log('Atención - Tenés que pasarme una acción');

        break;

    default:

        console.log('No entiendo qué querés hacer');

        break;
}
