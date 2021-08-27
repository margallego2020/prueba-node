
/*let arrayVacio=[];
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


let fechaDeHoy = new Date;
console.log(fechaDeHoy);
console.log(fechaDeHoy.getDate());
console.log(fechaDeHoy.getMonth()+1);
console.log(fechaDeHoy.getFullYear());

*/



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
    return callback (a, b);
}


let numeroA = process.argv[3];
let numeroB = process.argv[4];
let operar = process.argv[2];

console.log(operar + ' ' + typeof(operar));
//console.log(numeroA + ' ' + typeof(numeroA));
//console.log(numeroB +  ' ' + typeof(numeroB));


/*
switch (operar) {
    case "sumar":
        {
            console.log(calculadora(numeroA,numeroB,sumar));
            break;
        }
    case "restar":
        {
            console.log(calculadora(numeroA,numeroB,restar));
            break;
        }
    case "multiplicar":
        {
            console.log(calculadora(numeroA,numeroB,multiplicar));
            break;
        }
    case "dividir":
        {
            console.log(calculadora(numeroA,numeroB,dividir));
            break;
        }
}*/

console.log(typeof(numeroA));
console.log(typeof(numeroB));


switch (typeof(numeroA)) {
    case null:
        {
            return 0;
            break;
        }
    case 'string':
        {
            if (typeof(numeroA) != NaN){
                return Number(numeroA);
            } 
            else {
                return "Mensaje de error";
            }
            break;
        }

    default: {
        return "Mensaje de error resto";
        break;
    }

}

