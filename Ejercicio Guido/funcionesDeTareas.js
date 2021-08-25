const fs = require('fs');

const archivoTareas = {

    archivo: './tareas.json',

    leerJSON: function () {

        const arregloEnJSON = fs.readFileSync(this.archivo, 'utf-8')

        return JSON.parse(arregloEnJSON);

    },

    escribirJSON: function (tareas) {
        
        const archJSON = JSON.stringify(tareas);

        fs.writeFileSync(this.archivo, archJSON);

    },

    guardarTarea: function (nota) {
        
        const arregloDeNotas = this.leerJSON();

        arregloDeNotas.push(nota);

        this.escribirJSON(arregloDeNotas)
        
    },

    filtrarPorEstado: function (estado) {

        const notas = this.leerJSON();

        const aregloYaFiltrado = notas.filter(elemento => estado == elemento.estado);

        return aregloYaFiltrado;
        
    }
}

module.exports = archivoTareas;