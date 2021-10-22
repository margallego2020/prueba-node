
const usersController = {


    
    register: function(req, res) {
        return res.render('register');
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

    
    filter: function (req, res) {
        //Me devuelve un objeto con un campo y un valor
        // let loQueBuscoElUsuario = req.query;
        res.send("Estamos en filter")
        let users = [
            {id: 1, name: 'Dario'},
            {id: 2, name: 'Javier'},
            {id: 3, name: 'Maru'},
            {id: 4, name: 'Ale'},
            {id: 5, name: 'Alan'}
        ]; 
        
        //Me devuelve solo lo que puse en el campo query
        //loQueBuscoElUsuario = req.query; //el nombre search tiene que ser el mismo que 
        //en el userslist en el name del imput de la barra de búsqueda

        //res.send(loQueBuscoElUsuario);

        
            
        

        /*let usersResults = [];

        //Busca lo que pongo a buscar en users. Si lo encuentra lo pone en la matriz usersResults
        for (let i=0; i < users.length; i++) {
            if (users[i].name.includes(loQueBuscoElUsuario)) {

                usersResults.push(users[i]);
            }
            
        }
        res.render('usersResults', {usersResults: usersResults})*/
    }

       
} 
    





module.exports = usersController;
