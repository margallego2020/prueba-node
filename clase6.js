// Callbacks

/*let sumar = (numero1, numero2) => numero1 + numero2;
let restar = (numero1, numero2) => numero1 - numero2;
let multiplicar = (numero1, numero2) => numero1 * numero2;
let dividir = (numero1, numero2) => numero1 / numero2;

let calculadora = (numero1, numero2, operacion) => operacion(numero1, numero2);

console.log(calculadora(4,2,sumar));
console.log(calculadora(2,4,restar));
console.log(calculadora(2,4,multiplicar));
console.log(calculadora(4,2,dividir));

function nombreCompleto(nombre, apellido) {
    return nombre + ' ' + apellido;
};
function saludar(nombre, apellido, callback) {
    return '¡Hola ' + callback(nombre,
apellido) + '!';
};
console.log(saludar('Juanito', 'Sánchez', nombreCompleto));
*/
function doble(numero) {
    return numero*2;
};

function triple(numero) {
    return numero*3;
}

function aplicarCallBack(numero, martin){
    return martin(numero);
}

console.log(aplicarCallBack(2, doble));
console.log(aplicarCallBack(4, triple));


function suma(numeroA, numeroB){
    return numeroA+numeroB;
}
function resta(numeroA, numeroB){
    return numeroA-numeroB;
}
function multiplicacion(numeroA, numeroB){
    return numeroA*numeroB;
}
function division(numeroA, numeroB){
    return numeroA/numeroB;
}

function calculadora(numeroA, numeroB, callback){
    return callback(numeroA, numeroB);
}
console.log(calculadora(3,10,suma));
console.log(calculadora(3,10,resta));
console.log(calculadora(3,10,multiplicacion));
console.log(calculadora(3,10,division));

function agregarHttp(url) {
    return "http://"+url;
}

function procesar(url,callback){
    let completo=[];
   for (let i=0; i<url.length;i++){
        completo[i]=callback(url[i]);
    }
   return completo;
}
let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp);
console.log(urlCompletas);


//Métodos de array 2

//map(): tengo un array nuevo con el callback que le aplico.

//filter(): analiza un array y me devuelve un array que cumplen con la condición definida.

//reduce(): analiza un array y lo reduce a un solo valor. Usando  su acumulado.

//forEach(): iterar sobre un array dado de acuerdo a un callback. Lo recorre, no devuelve nada.

/*let notas = [10,4,5,8,9,2,7];

let notasHastaEl100 = notas.map(function(numero){
    return numero * 10;
});

console.log(notasHastaEl100);

let notasAprobadas = notas.filter(function(numero){
    return numero >= 7;
});
console.log(notasAprobadas);

let sumaNotas = notas.reduce(function(estado, numero){
    return estado + numero; //le sumo a estado (acumulador) lo que tiene c/u de los elementos del array.
});

console.log(sumaNotas);

notas.forEach(function(valor, indice){
    console.log("En la posición " + indice + " tengo el valor " + valor);
});
*/
let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

//console.log(estudiantes[1].aprobado);

/*let aprobados = estudiantes.filter(function(martin){
    return estudiantes.aprobado == true;
});

console.log(aprobados);
for (let i=0; i<estudiantes.length;i++){
    if (estudiantes[i].aprobado == true){
        console.log("hey");
    }
}

let horariosPartida = [12, 14, 18, 21];

let horariosAtrasados = horariosPartida.map(function(numero){
    return (numero - 1);
});
console.log(horariosAtrasados);

let vueltas = [5, 8, 12, 3, 22];

    let totalVueltas = vueltas.reduce(function(acum, numero){
        return (acum + numero);
    });
console.log(totalVueltas);*/

let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];
console.log(listaDeSuperMercado);
listaDeSuperMercado.forEach(function(dato){
    console.log(dato);
});
 //Objeto Date

 let fechactual1 = new Date();
 console.log(fechactual1);
 console.log(fechactual1.getDay()); //número de la semana. Empieza en 0 Domingo.
 console.log(fechactual1.getDate()); //Día del mes en curso
 console.log(fechactual1.getMonth()); //Mes en curso. Empieza en 0 Enero y termina en Diciembre 11
 console.log(fechactual1.getFullYear()); //Anio

 //Para crear una fecha específica: crear instancia del objeto

 let miCumple = new Date(1985,11,24);

 let fechaActual = new Date();
 console.log(fechaActual);
 console.log(fechaActual.toUTCString());
 console.log(fechaActual.getFullYear());
 console.log(fechaActual.getMonth());
 console.log(fechaActual.getDay());
 console.log(fechaActual.getDate());

 
 let anio = fechaActual.getFullYear();
 let mes = fechaActual.getMonth();
 let dia = fechaActual.getDate();

 let meses = ["Enero","Febrero","Marzo", "Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

 console.log("Hoy es el " + dia + " de " + meses[mes] + " del " + anio);

 estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

//console.log(estudiantes[1].aprobado);

let aprobados = estudiantes.filter(function(estudiantes){
    return estudiantes.aprobado == true;
});
let desaprobados = estudiantes.filter(function(estudiantes){
    return estudiantes.aprobado == false;
});
console.log(aprobados);
console.log(desaprobados);


//console.log("Día: "+fecha.getDate())
//console.log('Hoy es el día '+fecha.getDate()+' del mes '+fecha.getMonth+1+' del año '+fecha.getFullYear());

//Destructuring. Extrae datos de arrays u objetos literales

//Array:

let cursos = ["Programación","MKT","UX","Data Science","UX"];

let [programacion, mkt, ] = cursos;

console.log(cursos);
console.log(programacion);
console.log(mkt);


let persona = {
    nombre : "Carli",
    edad : 26,
    domicilio : "Calle falsa 123"
};

let {nombre, edad} = persona;

console.log(persona);
console.log(nombre);
console.log(edad);

let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia'];

let [,bariloche,,,] = destinosDelMundo;
let [,,, china] = destinosDelMundo;
console.log(destinosDelMundo);
console.log(bariloche);
console.log(china);

let auto  = {marca: 'Ferrari', kilometros: 31, color: "Rojo"};
let {marca, color} = auto;
console.log(auto);
console.log(marca);
console.log(color);

/*spread operator (operador de propagación)
Me permite esparcir los datos de 2 arrays en uno nuevo.
let array = [... array uno, ...array dos];
Primero va array uno, después array dos
*/

let peliculasAccion =  ["End Game", "Iron Man 3", "Capitan America"];
let peliculasComedia = ["Mi pobre angelito","Que paso ayer?"];
let peliculas1 = [peliculasAccion, peliculasComedia]; //tiene 2 arrays adentro
let peliculas2 = [...peliculasAccion, ...peliculasComedia]; //están todas las peliculas en un solo array

console.log(peliculas1);
console.log(peliculas2);

let generoComedias = {
    nombreGenero : "Comedia",
    popularidad : 3
}

let miPobreAngelito = {
    nombre : "Mi pobre angelito",
    duracion : 120,
    ...generoComedias //se copia en el objeto los atributos del objeto generoComedias
}

let quePasoayer = {
    nombre : "Que paso ayer?",
    duracion : 110,
    ...generoComedias    
}

console.log(miPobreAngelito);
console.log(quePasoayer);

function peliculasVistas(...nombresDePeliculas) {  
    //con los ... puedo pasar todos los parámetros que quiera. Cada uno de los
    //parámetros forma parte de un array
    for (let i=0; i < nombresDePeliculas.length; i++){
        console.log("La persona ya vio " + nombresDePeliculas[i]);

    }
    //console.log(nombresDePeliculas);

}; 
peliculasVistas("End game", "Iron Man 3", "Alien 23");// Nos devuelve un array
//rest parameter (parámetro rest)
