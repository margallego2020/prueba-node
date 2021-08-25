var fs = require ('fs');
var tareas = fs.readFileSync('./tareas.json','utf-8');
console.log(tareas);
var arrayTareas = JSON.parse(tareas);
console.log(arrayTareas);

switch (process.argv[2]){
    case ("listar"):
        console.log(arrayTareas);
        break;
    case (undefined):
        console.log("Atención - Tienes que pasas una acción.");
        break;
    default:
        console.log("No entiendo qué quieres hacer.");
        break;
}
