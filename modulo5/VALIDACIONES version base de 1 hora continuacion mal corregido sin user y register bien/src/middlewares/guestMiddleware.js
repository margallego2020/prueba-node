function guestMiddleware(req, res, next) {

    if (req.session.userLogged) { //si hay alguien logueado
        return res.redirect('/user/profile');

    }

    next(); //si no tengo a nadie en sesión quiero que el request siga con su cadena de peticiones
    
}

module.exports = guestMiddleware;
