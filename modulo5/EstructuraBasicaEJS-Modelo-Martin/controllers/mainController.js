// Cargo las funciones que quiero que haga
// Las derivo por render al archivo ejs que le diga

const controller = {

    index: (req, res) => {
        res.render('index');
    },

    login: (req, res) => {
        res.render('login');
    },
    
    register: (req, res) => {
        res.render('register');
    },

    products: (req, res) => {
        res.render('products');
    },

}

module.exports = controller;