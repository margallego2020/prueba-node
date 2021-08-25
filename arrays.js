let edades = [2,12,45,13,5];
let variados = ["martin", true, edades];

console.log(variados[2][3]);

let nombres=["Juana","Mariana","Pablo"];
//con el shift le saco lo que tiene al principo del array, el indice 0
let elPrimero=nombres.shift();
console.log(elPrimero);
console.log(nombres);
let colores =["amarillo","verde"];
//con el unshift agrego al principio del array, al indice 0 lo que quiera
colores.unshift("blanco","rojo");
console.log(colores);
//con .join une todos los strings del array con , por defecto
//es un string, NO UN ARRAY
let diasEntreSemana = ['Lunes','Martes','Miercoles','Jueves','Viernes'];
console.log(diasEntreSemana.indexOf("Domingo"));
console.log(diasEntreSemana.lastIndexOf("Lunes"));
console.log(diasEntreSemana.join());
console.log(diasEntreSemana.join(" - "));

let notas = [3,5,8,10,9,7,8,8];
let posicionDelOcho=notas.indexOf(8);
console.log(posicionDelOcho);
let ultimaPosicionDelOcho=notas.lastIndexOf(8);
console.log(ultimaPosicionDelOcho);

//similar a .indexOf. Retorna un booleano.
//true si lo encuentra, false si no lo encuentra

let frutas = ['Manzana','Pera','Frutilla'];
console.log(frutas.includes('Frutilla'));
console.log(frutas.includes('Banana'));



