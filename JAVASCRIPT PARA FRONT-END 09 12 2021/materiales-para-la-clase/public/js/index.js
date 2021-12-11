window.onload = function (){

// let main = document.querySelector('main');
// let h2 = document.querySelector('.subtitulo');
// let a = document.querySelector('a');
// let p = document.querySelectorAll('p');

let container = document.querySelector('.container');
let subtitulo = document.querySelector('.subtitulo');
let destacado = document.querySelectorAll('p');
let enlace = document.querySelector('a');
let fondo = document.querySelector('body');



// let userName = prompt('Ingrese su nombre');

let nombre = prompt ('Ingrese su nombre');
console.log(nombre);



// if (userName != null) {
//     h2.innerText += ' ' + userName;
// } 
// else {
//     h2.innerText += 'Invitado';
// }

if (nombre != '') { //si el usuario ingresó algo
    subtitulo.innerHTML += nombre;
} else {
    subtitulo.innerHTML += 'INVITADO';
}

// h2.style.textTransform = 'uppercase';

subtitulo.style.textTransform = 'uppercase';



// let userBackground = confirm('¿Desea colocar un fondo de pantalla?');

let confirmar = confirm('Desea colocar un fondo de pantalla?');

// if ( userBackground == true) {
//     body.classList.add('.fondo');
// }
if ( confirmar ) {
    fondo.classList.add('fondo');
    // a.style.color = '​#E51B3E';

    enlace.style.color = '#E51B3E';
}

console.log(destacado);


// for (i=0; i < p.length; i++) {
//     if ( i % 2 == 0 ) {
//         p.classList.add('destacadoPar');
//     } else {
//         p.classList.add('destacadoImpar');
//     }
// };


for (i=0; i < destacado.length; i++) {
    if ( i % 2 == 0 ) {
        destacado[i].classList.add('destacadoPar');
    } else {
        destacado[i].classList.add('destacadoImpar');
    }
};

// main.style.display = 'block';

container.style.display = 'block';

};