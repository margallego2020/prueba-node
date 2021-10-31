const users = [
    {
        name: 'Jorge',
        email: 'jorge@mar.com',
        password: 'jorge'
    },

    {
        name: 'Pedro',
        email: 'pedro@mar.com',
        password: 'pedro'
    },
    
    {
        name: 'Pablo',
        email: 'pablo@mar.com',
        password: 'pablo'
    },
    {
        name: 'Martin',
        email: 'martin@mar.com',
        password: 'martin'
    }
];

function recordameMIddleware (req, res, next) {
    next();
    if (req.cookies.recordame != undefined &&
         req.session.usuarioLogueado == undefined) {

            let usuarioALoguearse;
            for (let i = 0; i < users.length; i++) {
                if (users[i].email == req.cookies.recordame) {
                        usuarioALoguearse = users[i]; //es el usuario que acaba de encontrar
                        break;
                    
                }     
            }

            req.session.usuarioLogueado = usuarioALoguearse; //asigno el usuario a loguearse a usuario logueado

    }
}

module.exports = recordameMIddleware;