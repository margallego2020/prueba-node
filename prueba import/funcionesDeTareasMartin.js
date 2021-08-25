
var fs = require('fs');

const funcionesTareas = {
    archivo: './tareasMartin.json',

    leerJSON:  function () {
        console.log("Lee el archivo");
        const arregloEnJSON = fs.readFileSync(this.archivo, 'utf-8');
        return JSON.parse(arregloEnJSON);
    },

    escribirJSON: function (tareas) {
        console.log("Escribe el archivo");
        const archJSON = JSON.stringify(tareas);
        fs.writeFileSync(this.archivo, archJSON);
    },
    
    guardarTarea: function (nota) {
        console.log("Agrega una tarea");
        const arregloDeNotas = this.leerJSON();
        arregloDeNotas.push(nota);
        this.escribirJSON(arregloDeNotas);

    },

    filtrarPorEstado: function (estado) {
        console.log("Filtra el archivo por estado");
        const notas = this.leerJSON();
        const arregloYaFiltrado = notas.filter(elemento => estado == elemento.estado);
        return arregloYaFiltrado;
    }

}

module.exports = funcionesTareas;

