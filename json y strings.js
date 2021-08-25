let amigos = ["Coco","Pablito","Sus","Franco"];
let amigosJSON=JSON.stringify(amigos); //lo paso a JSON
let amigosOriginal=JSON.parse(amigosJSON)// de jsoan lo paso a node
console.log(amigos);//original
console.log(amigosJSON);//convertido a json
console.log(amigosOriginal);//convertido a original

let persona = {
    nombre : "Carli",
    edad:26,
    domicilio: "Calle falsa 123"
}
console.log(persona);

let personaJSON = JSON.stringify(persona);
console.log(personaJSON);

let personaOriginal= JSON.parse(personaJSON);
console.log(personaOriginal);

//STRINGS
// Length

let mensaje = "Gran día para practicar Javascript!";
let mensaje1 = "                      Gran día para practicar Javascript!";
console.log(mensaje.length  );

//indexof
//Quiero saber dónde se encuentra la palabra día.
//número dónde empieza si lo encuentra. Si no lo encuentra -1

console.log(mensaje.indexOf('día'));
//Slice = toma una porción determinada de un cadena de texto.
//.slice(índice desde quiero comenzar a tomar el texto, índice hasta dónde quiero cortar)

console.log(mensaje.slice(0,24));
console.log(mensaje);

//.trim() elimina los espacios en blanco al principio y al final de un string
console.log(mensaje1);
console.log(mensaje1.trim());

//.split() convierte string en un array separando cada palabra en cada posición del array en función de un delimitador 
console.log(mensaje.split()); //convierto mensaje en un array
console.log(mensaje.split(' ')); //convierto mensaje en un array

//.replace(lo que busco, lo que quiero reemplazar) reemplaza un texto dentro de un string. 
//NO ALTERA LA CADENA DE TEXTO ORIGINAL
console.log(mensaje.replace('Javascript','todo')); 


let frase='Breaking Bad rules!';
console.log(frase.length);
console.log(frase.slice(9,12));
console.log(frase.slice(13));
console.log(frase.slice(-10));//del final para atrás


function dominio (cadena){
    return "http://www." + cadena;
}
console.log(dominio("digitalhouse.com.ar"));

let texto="Que lindo día verdad";
console.log(texto.length);

function reemplazoFastFast(texto,palabraReemplazar,palabraReemplazada){
    return texto.replace(palabraReemplazar,palabraReemplazada);
}
let textoSinGuiones = reemplazoFastFast('Este texto es mala onda','mala','buena');
console.log(textoSinGuiones);

function menciona (texto, palabraABuscar){
    let encuentra=texto.indexOf(palabraABuscar);
    if (encuentra!=-1){
        return true;
    }
    else {
        return false;
    }
}
console.log(menciona('Existen muchos lenguajes de programación y JavaScript es uno de ellos','programación'));

let textoASacar='¡Hola!, soy Carli';
let licenciada=textoASacar.slice(12);
console.log(licenciada);
console.log(textoASacar.slice(11));
console.log(textoASacar.slice(10));

//objeto literal
let perro={
    nombre: "Martin",
    edad: 4,
    vacunado: true
}
console.log(perro);

//ejercicio deportista
let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function entrenarHoras(cantHoras){
        this.energia=this.energia-cantHoras*5;
        this.experiencia=this.experiencia+cantHoras*2;
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);