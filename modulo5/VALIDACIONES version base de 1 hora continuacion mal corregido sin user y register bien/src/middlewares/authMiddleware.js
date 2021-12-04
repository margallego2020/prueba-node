function authMiddleware(req, res, next) {

    if (!req.session.userLogged) { //si no hay alguien logueado
        return res.redirect('/user/login');

    }

    next(); //si no tengo a nadie en sesión quiero que el request siga con su cadena de peticiones
    
}

module.exports = authMiddleware;

