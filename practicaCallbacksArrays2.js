
let arrayVacio=[];
arrayVacio == 0 ? console.log("True") : console.log ("False");
arrayVacio == [] ? console.log("True") : console.log ("False");




let numeros = [2,4,99,6,80,12,31,42];
let fraseCool = "Es tiempo de reflexionar";
let numMayores50 = numeros.filter(function (numero){
    return (numero > 50);
});

let numMenores50 = numeros.filter(function (numero){
    return (numero <=50);
})

console.log(numMayores50);
console.log(numMenores50);

let acumulado = numeros.reduce(function(acum, numeros){
    return acum + numeros;
});

console.log(acumulado);
numeros.forEach(function (numero) {
        console.log(numero);
});

let elCuadruple = numeros.map(function(numeros){
    return numeros * 4;
});

console.log(elCuadruple);

let arg1 = process.argv[2];

let numerosMenoresADet = numeros.filter(function(numeros){
    return numeros < arg1;
});

let numerosMayoresADet = numeros.filter(function(numeros){
    return numeros >= arg1;
});

console.log(numerosMenoresADet);
console.log(numerosMayoresADet);

function sumar (a,b){
    return a + b;
}
function restar (a,b){
    return a - b;
}
function multiplicar (a,b){
    return a * b;
}
function dividir (a,b){
    return a / b;
}

function calculadora (a, b, callback){
    return callback(a, b);
}
console.log(calculadora(4,3,sumar));
console.log(calculadora(4,3,restar));
console.log(calculadora(4,3,dividir));
console.log(calculadora(4,3,multiplicar));

