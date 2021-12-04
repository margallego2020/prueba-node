/* 
1. Guardar al usuario en la DB  
2. Buscar al usuario que se quiere loguear por su email
3. Buscar a un usuario por su ID
4. Editar la información de un usuario
5. Eliminar a un usuario en la DB  */

const fs = require ('fs');
const path = require('path');

const User = {

    fileName: '../database/users.json', //archivo que hace referencia a la base de datos
    
    getData: function () { //leo y me devuelve el archivo JSON users convertido en un array
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8')); 

    },

    generateId: function () { //Con esto genero el ID
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser) { //si hay usuarios le agrego uno al último número del id
            return lastUser.id + 1;
        }
        return 1; //cuando no tengo usuarios le pongo id=1
    },

    findAll: function() { //listar todos los usuarios
        return this.getData();
    },

    findByPk: function (id) { //busca al usuario por id
        let allUsers = this.findAll(); 
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },


    findByField: function (field, text) { //busca al usuario por campo y texto
        let allUsers = this.findAll(); 
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },


    create: function (userData) {
        let allUsers = this.findAll(); 
        let newUser = {
            id: this.generateId(),
            ...userData //toma toda la información que me llegó del objeto literal userData

        }
        allUsers.push(newUser); //le agrego a los usuarios que tengo el nuevo usuario
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser; //si está todo ok retorno true
    },

    delete: function (id) {
        let allUsers = this.findAll(); 
        let finalUsers = allUsers.filter(oneUser => oneUser.id != id); //tomame todos menos el id que te pasé
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
        return true;

    }
}

module.exports = User;

// console.log(User.delete(4));

