window.onload = function(){

    let fondo = document.querySelector('body');
    let listadoPeliculas = document.querySelector('.moviesListTitulo');

    let modo = confirm('Desea modo oscuro?');
    if (modo) {
        fondo.style.backgroundColor = '#7f7f7f';
        fondo.classList.add('fondoMoviesList');
    }

    listadoPeliculas.innerHTML = 'LISTADO DE PELICULAS';
    listadoPeliculas.style.color = 'white';
    listadoPeliculas.style.backgroundColor = 'teal';
    listadoPeliculas.style.padding = '20px';

}

// window.onload = function(){
//     let body = document.querySelector('body');
//     let moviesListTitulo = document.querySelector('.moviesListTitulo');

//     let modo = confirm('Desea modo oscuro');
//     if(modo){
//         body.style.backgroundColor = '#7f7f7f';
//         body.classList.add('fondoMoviesList');
//     }
    
//     console.log(body);
//     moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
//     moviesListTitulo.style.color ='white';
//     moviesListTitulo.style.backgroundColor = 'teal';
//     moviesListTitulo.style.padding = '20px';

// }