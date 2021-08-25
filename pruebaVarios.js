/*let nombresVarios = ['Jorge','Gerardo','Pablo','Pedro', 'Victor'];
console.log(nombresVarios);
nombresVarios.push('Martin','Nacho');
console.log(nombresVarios);
nombresVarios.pop();
console.log(nombresVarios);
nombresVarios.shift();
console.log(nombresVarios);
nombresVarios.unshift('Mariano','Paul');
console.log(nombresVarios);
let nombresVarios1 = nombresVarios.join();
console.log(nombresVarios1);
let nombresVarios2 = nombresVarios.join(' - ');
console.log(nombresVarios2);
console.log(nombresVarios.includes('José'));
console.log(nombresVarios.includes('Pedro'));

function dominio(texto){
    return "http://www."+texto;
}

console.log(dominio('uade.edu.ar'));

function encontre(texto, palabra){
    return texto.includes(palabra);
}
console.log(encontre('Esto es divertido','divertido'));
console.log(encontre('Esto es divertido','perro'));

function encontreCurso(texto, palabra){
    let encuentra=texto.indexOf(palabra);
    encuentra == -1 ? false: true;
}
console.log(encontreCurso('Esto es divertido','divertido'));
console.log(encontreCurso('Esto es divertido','perro'));

let mmmm='Esto es divertido';
let cucucu=mmmm.indexOf('divertido');
console.log(cucucu == -1 ? false: true);
cucucu=mmmm.indexOf('lata');




let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function entrenarHoras(cantHoras){
        this.energia=this.energia-cantHoras*3;
        this.experiencia=this.experiencia-2*cantHoras;
    
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(3);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);

//Función Constructora
function Persona(nombre, peso){
    this.nombre=nombre;
    this.peso=peso;
}

let Persona1 = new Persona('Martin',70);
let Persona2 = new Persona('Peter',83);
console.log(Persona1, Persona2);


let sumarNumeros = (a,b,c,d) => a+b+c+d;
console.log(sumarNumeros(1,4,6,2));

let multiplicarNumeros = (a,b,c) => {
    let martin1=a*b*c;
    return martin1;
}
multiplicarNumeros(2,4,4);

let saludar = (nombre, apellido) => 'Mi nombre es '+nombre+' y mi apellido es '+apellido;
console.log(saludar('Martin','Gallego'));

let nombre = 'Mengano';*/

/*'use strict';

for (let j = 2; j < process.argv.length; j++) {
    console.log(j + ' -> ' + (process.argv[j]));
}
let nombre=process.argv[2];
console.log(nombre);
function verNombre(nombre){
switch (nombre){
    case 'Victor':
        console.log('Gato');
        break;
    case 'Jorge':
        console.log('Genio');
        break;
    default:
        console.log('Trolos');
        break;
    
}
}
verNombre(nombre);

function factorialArgumentos(){
'use strict';
let factorial = 1;
for (let j = 2; j < process.argv.length; j++) {
    factorial=factorial*process.argv[j];
}
return factorial;
}
console.log(factorialArgumentos());

function sumarArgumentos(){
    'use strict';
    let sumarArg = 0;
    for (let j = 2; j < process.argv.length; j++) {
        sumarArg=sumarArg+parseInt(process.argv[j]);
    }
    return sumarArg;
    }
    console.log(sumarArgumentos());*/

  function validacionDato(dato){
     
     switch (typeof(dato)) {
         case 'number':
            return dato;
            break;

        case 'null':
            return 0;
            break;
        case 'string':
              if (parseInt(dato)==isNaN
              return dato;
              break;
          case number:
              return dato;
              break;
          default:
              return('Error en tipo de información');
              break;

      }
      
  }
  console.log(validacionDato(123));
  console.log(validacionDato(null));*/

  dato='5';
  let mar=typeof(dato);
  switch (mar) {
        case 'number':
          console.log('numero');
          break;
        case 'string':
            console.log('string');
            break;
  }  



