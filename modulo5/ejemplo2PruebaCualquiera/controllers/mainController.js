const personas = [
    {
        id: 1,
        nombre: 'Ada',
        apellido: 'Lovelace',
        email: 'ada@lovelace.com',
        pais: 'Inglaterra', 
    },
    {
        id: 2,
        nombre: 'George',
        apellido: 'Boole',
        email: 'george@boolean.com',
        pais: 'Inglaterra', 
    },
    {
        id: 3,
        nombre: 'Margaret',
        apellido: 'Hamilton',
        email: 'margaret@nasa.com',
        pais: 'EEUU', 
    },
    {
        id: 4,
        nombre: 'Tim',
        apellido: 'Berners Lee',
        email: 'tim@html.com',
        pais: 'Inglaterra', 
    }
];

const controller = {

    index: (req, res) => {
        return res.render('index', {listadoPersonas: personas});
    },

    register: (req, res) => {
        return res.render('register');
    },

    login: (req, res) => {
        return res.send('Login');
    },

    list: function (req, res) {
        let users = [
            'Dario',
            'Javier',
            'Maru',
            'Ale',
            'Alan'
        ]; 
        
        return res.render('userList', {'users': users});
    }

}

module.exports = controller;
