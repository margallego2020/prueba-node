window.onload = function () {

    let moviesAddTitulo = document.querySelector('.moviesAddTitulo');
    let formulario = document.querySelector('#formulario'); //es la section
    let article = document.querySelector('article');

    moviesAddTitulo.innerHTML = 'AGREGAR PELICULA';
    moviesAddTitulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
};

// RESOLUCION GUIDO

// window.onload = function(){

//     let titulo = document.querySelector('.moviesAddTitulo')
//     let formulario = document.querySelector('#formulario');
//     let article = document.querySelector('article');

//     titulo.innerHTML = 'AGREGAR PELÍCULA';

//     titulo.classList.add('titulo');
//     article.classList.add('fondoTransparente');
//     formulario.classList.add('fondoCRUD');
// }
