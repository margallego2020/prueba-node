
let edad = [8, 20,12,1,54,40];
let estaPresente = [true, false, true,false, false];
let nombres = ["Jose", "Pedro", "Martin" , "Luis","Nacho"];

let sumaAcum = edad.reduce(function(acum, num){
    return acum + num;
});
console.log(sumaAcum);


    let presentes = estaPresente.filter(function(estaPresente){
        return estaPresente == true;
    });


console.log(presentes);


let nombreMartin = nombres.filter(function (nombre){
    return nombre == "Martin";
})
console.log(nombreMartin);

function buscarNombre(nombreABuscar){
    let nombreMartin = nombres.filter(function (nombres){
    return nombres == nombreABuscar;
    });
    return nombreMartin;
}

console.log(buscarNombre(""));

nombres.forEach(function(nombres){
    console.log(nombres);
})






/*
function suma(A, B){
    return A+B;
}
function resta(A, B){
    return A-B;
}
function multiplicacion(A, B){
    return A*B;
}
function division(A, B){
    return A/B;
}

function calculadora(A, B, callback){
    return callback(A, B);
}
console.log(calculadora(3,10,suma));
console.log(calculadora(3,10,resta));
console.log(calculadora(3,10,multiplicacion));
console.log(calculadora(3,10,division));

function sumar (a,b){
    return a+b;
};
function restar (a,b){
    return a-b;
};
function multiplicar (a,b){
    return a*b;
};
function dividir (a,b){
    return a/b;
};

function calculadora(a, b, callback){
    return callback(a,b);
}

console.log(calculadora(4,10,sumar));
console.log(calculadora(4,10,restar));
console.log(calculadora(4,10,multiplicar));
console.log(calculadora(4,10,dividir));
*/