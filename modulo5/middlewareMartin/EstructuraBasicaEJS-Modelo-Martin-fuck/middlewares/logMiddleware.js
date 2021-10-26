const fs = require('fs');


function logMiddleware(req, res, next) {
    // fs.writeFileSync('log.txt', 'Se ingresó en la página ' + req.url); //se sobreescribe lo que puse
    fs.appendFileSync('log.txt', 'Se ingresó en la página ' + req.url); //se suma lo que puse

    next(); //con esto llama a los próximos middlewares y la pila de ejecución de express y javascript 
    //sigan su curso natural
}

module.exports = logMiddleware;