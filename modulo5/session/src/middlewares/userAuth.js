

const usuarios = ['Ada', 'Greta', 'Vim' , 'Tim'];

function userAuth(req, res, next) {
    let userEntry = req.query.user;
    
    if (!usuarios.includes(userEntry)){
        res.send('Usuario ' + userEntry  + ' no tiene los privilegios para ingresar');
    }
    next();

}

module.exports = userAuth;