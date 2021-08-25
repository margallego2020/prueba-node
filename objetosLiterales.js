/*let objeto = {
    propiedad : valor,
    propiedad : valor,
    propiedad : valor,
    propiedad : valor
}*/
let curso = {
    cantidadDeAlumnos : 32,
    docentes : ["Nacho","Javier"],
    horario : "De 19 a 21 hs.",
    notificaciones : function() {
        return "Horario cursada: "+this.horario;

    }
}
console.log(curso);
console.log("Cantidad de alumnos del curso: "+curso.cantidadDeAlumnos);
console.log(curso.notificaciones());

//Función constructora. Es un molde para construir un objeto. Se pone siempre en mayúsculas.
function Curso (cantidadDeAlumnos, docentes, horario){
    this.cantidadDeAlumnos = cantidadDeAlumnos;
    this.docentes = docentes;
    this.horarios = horario;
}

//Crear un nuevo curso usando el molde

let cursoDeProgramacion = new Curso (50,["Javier","Gerardo"],"De 19 a 21 hs.");
let cursoDeMarketing = new Curso (45,["Diego","Debbie"],"De 17 a 19 hs.");

console.log(cursoDeProgramacion);
console.log(cursoDeMarketing);