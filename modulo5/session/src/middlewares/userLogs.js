const fs = require('fs');
const path = require('path');


const logPath = path.join(__dirname,'../logs/userLogs.txt');

function userLogs (req, res, next) {
    fs.appendFileSync(logPath, "El usuario ingresó en la ruta: " + req.url + "\n");

    next();
}

module.exports = userLogs;