const User = require('../models/User');




function userLoggedMiddleware (req, res, next) {
    // console.log('Pasé por el MD de user logged');
    
    res.locals.isLogged = false; //res.locals son variables que puedo compartir a través de todas las vistas
   
    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = User.findByField('email', emailInCookie);

    if(userFromCookie) {
        req.session.userLogged = userFromCookie;

    }

    if (req.session.userLogged) { //si hay un usuario logueado}
        res.locals.isLogged = true;
        req.locals.userLogged = req.session.userLogged;
         
    }



    next(); 
}

module.exports = userLoggedMiddleware;