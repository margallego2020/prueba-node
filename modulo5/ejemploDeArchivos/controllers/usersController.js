const { application, json } = require("express");

fs = require('fs');

const usersController = {


    
    register: function(req, res) {
        res.render('register');
    },

    login: function (req, res) {
        return res.send('Login');
    },

    list: function (req, res) {
      //Ahora saco los usuarios de un archivo y los convierto en formato para que pueda usarlos

        let archivoJSON = fs.readFileSync('usuarios.json', {encoding: 'utf-8'});

        let users = JSON.parse(archivoJSON);
       
        res.render('usersList', {'users': users});
    },

    // Con esto veo lo que buscó el usuario
    search: function (req, res) {
        //Me devuelve un objeto con un campo y un valor
        // let loQueBuscoElUsuario = req.query;
        
        
        //Me devuelve solo lo que puse en el campo query
        let loQueBuscoElUsuario = req.query.search; //el nombre search tiene que ser el mismo que 
        //en el userslist en el name del imput de la barra de búsqueda

        //res.send(loQueBuscoElUsuario);
        //Ahora saco los usuarios de un archivo y los convierto en formato para que pueda usarlos

        let archivoJSON = fs.readFileSync('usuarios.json', {encoding: 'utf-8'});

        let users = JSON.parse(archivoJSON);


       /* let users = [
            {id: 1, name: 'Dario'},
            {id: 2, name: 'Javier'},
            {id: 3, name: 'Maru'},
            {id: 4, name: 'Ale'},
            {id: 5, name: 'Alan'}
        ]; */

        let usersResults = [];

        //Busca lo que pongo a buscar en users. Si lo encuentra lo pone en la matriz usersResults
        for (let i=0; i < users.length; i++) {
            if (users[i].name.includes(loQueBuscoElUsuario)) {

                usersResults.push(users[i]);
            }
            
        }
        res.render('usersResults', {usersResults: usersResults})
    },

    create: function (req, res) {
       // res.send(req.body.nombre); //Me dice el nombre que le puse en el formulario
       let usuario = {

            nombre: req.body.nombre,
            edad: req.body.edad,
            email: req.body.email
        }

        //res.send(usuario);

        //Guardar la información

        //Para poder guardarlo en un archivo hay que hacer un array de usuarios, una lista de usuarios.
        
        //Primero: leer qué cosas ya había!!!

        let archivoUsuario = fs.readFileSync('usuarios.json', {encoding: 'utf-8'});

        //Creo la variable usuarios que va a tener el array de usuarios

        let usuarios;

        //Antes me tengo que fijar si el archivo está vacío
        //Si está vacío: a usuarios le pongo un array vacío porque no tengo usuarios.
        //Si no está vacío: abro el json.

        if (archivoUsuario == "") {

            usuarios = [];

        } else {
            //Convierto el archivo viejo de usuarios en un array

            usuarios = JSON.parse(archivoUsuario);

        }
        
        //Lo que hago es agregar al array que ya tenía el usuario nuevo

        usuarios.push(usuario);

        //Hay que convertir la info en JSON de vuelta

        usuariosJSON = JSON.stringify(usuarios);

        //Ahora escribo el array de los usuarios actualizados en formato JSON en el archivo de usuarios.json

        fs.writeFileSync('usuarios.json', usuariosJSON);
        

        //Hay que redirigir al usuario a algún lado

        res.redirect("/users/list"); //después de crear andá a la página /users/list

    },

    edit: function (req, res) {
        let idUser = req.params.idUser; //tomo el parámetro del número de usuario y lo guardo en idUser 
        //res.send(idUser); me imprime el número de usuario que se pasó por parámetro

        let users = [
            {id: 1, name: 'Dario'},
            {id: 2, name: 'Javier'},
            {id: 3, name: 'Maru'},
            {id: 4, name: 'Ale'},
            {id: 5, name: 'Alan'}
        ]; 

        let userToEdit = users[idUser]; //guardo en userToEdit el usuario a editar con el id que puse 
        //en el navegador
        //res.send(userToEdit);

        res.render("userEdit", {userToEdit: userToEdit});


    }
}; 
    
module.exports = usersController;
