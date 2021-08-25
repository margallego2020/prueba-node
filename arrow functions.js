let laMitad = numero => numero / 2;
//let nombrefuncion = parámetros => variable y lo que quiero que haga

console.log(laMitad(6));

let dividir = (numeroA, numeroB) => numeroA / numeroB;

console.log(dividir(15,3));

let tengoQueTrabajar = dia => {
    if (dia == 'Sábado' || dia == 'Domingo'){
        return 'No voy a trabajar';
    }
    else {
        return 'Tengo que trabajar';
    }
}

console.log(tengoQueTrabajar('Lunes'));
console.log(tengoQueTrabajar('Domingo'));

//Ejemplos

let saludos = () => 'Hola mundo!';
console.log(saludos());


/*let dobleDe = numero => numero * 2;

let suma = (a, b) => a + b;

let horaActual = () => {
    let fecha = new Date();
    return fecha.getHours() + ':' +
    fecha.getMinutes();
}*/

function dameCinco() {
    return [1,2,3,4,5];
}

let dameCinco1 = () => [1,2,3,4,5];
console.log(dameCinco());
console.log(dameCinco1());

function multiplicarPorDos() {
  return 123 * 2 ;
}
let multiplicarPorDos1 = () => 123 * 2;
console.log(multiplicarPorDos());
console.log(multiplicarPorDos1());

function mostrarNombre() {
  return "Mi nombre es Hernán";
}

let mostrarNombre1 = () => "Mi nombre es Hernán";
console.log(mostrarNombre());
console.log(mostrarNombre1());

let saludar = nombre => 'Hola, ' + nombre + '!';
console.log(saludar('Martin'));
