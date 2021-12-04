const path = require('path');
const multer = require('multer');



const storage = multer.diskStorage({ 
    destination: (req, file, cb) => {
        cb (null, './public/images/avatars');
    },

    filename: (req, file, cb) => {
       
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`; //path.extname te devuele la extensión de file
        cb (null, fileName);
    
    }

})//storage es el disco en donde se va a almacenar la información

const uploadFile = multer ({ storage });//genero la constante que me genera el método para subir los archivos

module.exports = uploadFile;