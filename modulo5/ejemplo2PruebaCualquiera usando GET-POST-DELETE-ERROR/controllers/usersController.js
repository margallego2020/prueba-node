const { application } = require("express");

const usersController = {


    
    register: function(req, res) {
        res.render('register');
    },

    login: function (req, res) {
        return res.send('Login');
    },

    list: function (req, res) {
       let users = [
            {id: 1, name: 'Dario'},
            {id: 2, name: 'Javier'},
            {id: 3, name: 'Maru'},
            {id: 4, name: 'Ale'},
            {id: 5, name: 'Alan'}
        ]; 
       
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

        let users = [
            {id: 1, name: 'Dario'},
            {id: 2, name: 'Javier'},
            {id: 3, name: 'Maru'},
            {id: 4, name: 'Ale'},
            {id: 5, name: 'Alan'}
        ]; 

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
