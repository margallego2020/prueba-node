
// Cargo las funciones que quiero que haga
// Las derivo por render al archivo ejs que le diga

const controller = {

    register: (req, res) => {
        return res.render('userRegisterForm');
    },

    login: (req, res) => {
        return res.render('userLoginForm');
    },
    
    profile: (req, res) => {
        return res.render('userProfile');
    },
    

}

module.exports = controller;