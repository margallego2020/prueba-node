/*IF TERNARIO

condición ? expresión para true : expresión para false;

condición ? expresión para true : " "; no hago nada para el false


SWITCH

switch (expresión a evaluar) {
    Por cada caso:

    case caso1:
        lo que quiero hacer
        break -> salgo del switch

        Si hay varios casos que hacen lo mismo se pone:
        case caso 1:
        case caso 2: 
                acción.
    default: sería como un else. Si no se cumplen los otros se usa este.
            Puede o no escribirse el break.
}
*/

//If ternario

let fruta = 'Manzana';

let resultado = fruta == 'Manzana' ? 'Me gustan las manzanas' : 'No son manzanas'; //Asume que es un return
console.log(resultado);

//Switch

let semaforo = 'No hay luz';

switch (semaforo) {
    case 'Verde':
        console.log('Puedo cruzar');
        break;
    case 'Amarillo':
        console.log('Precaución');
        break;
    case 'Rojo':
        console.log('No cruces, hay que esperar');
        break;
    default:
        console.log('No funciona el semáforo');
        break;
}


let bicicletaA = {
    rodado: 18,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"
}

/*let bicicletaConRodadoGrande = bicicletaA.rodado>bicicletaB.rodado?bicicletaA.marca:bicicletaB.marca;

console.log(typeof(bicicletaConRodadoGrande));
console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande)*/

let bicicletaConRodadoGrande = bicicletaA.rodado>bicicletaB.rodado?bicicletaA:bicicletaB;

console.log(typeof(bicicletaConRodadoGrande));
console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca)

