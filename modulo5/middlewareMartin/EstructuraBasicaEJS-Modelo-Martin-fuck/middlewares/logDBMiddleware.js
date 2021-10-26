const fs = require('fs');


function logDBMiddleware(req, res, next) {
    // fs.writeFileSync('log.txt', 'Se ingresó en la página ' + req.url); //se sobreescribe lo que puse
    fs.appendFileSync('logDB.txt', 'Se creó un registro en la página ' + req.url); //se suma lo que puse

    next(); //con esto llama a los próximos middlewares y la pila de ejecución de express y javascript 
    //sigan su curso natural
}

module.exports = logDBMiddleware;