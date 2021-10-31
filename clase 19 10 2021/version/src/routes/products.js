// ************ Require's ************
const express = require('express');
const router = express.Router();
//Multer se usa en los routers que usan archivos. En las peticiones de tipo PUT y POST le llegan los archivos
const multer = require('multer');


// ************ Controller Require ************
const productsController = require('../controllers/productsController');


// ************ Configuración de multer ************
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/products') //Ruta donde se guarda. Va desde la raiz del proyecto
    },

    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname) //Nombre del archivo definido por strings y/o funciones
    },

})


const upload = multer ({storage});//Ejecuto multer pasando como objeto literal la constante storage

// Devolver todos los productos  
router.get('/', productsController.index); 

// Crear un producto
router.get('/create/', productsController.create); 

// Devolver un producto 
router.get('/:id/', productsController.detail); 
router.post('/', upload.single('newProductImage'), productsController.store); /*en single('xxxx') va lo que puse 
                    <input type="file" name="newProductImage">. En este caso newProductImage*/
                    //Ahora tengo que ir al productsController store y tomar el archivo que subimos

// Editar un producto 
router.get('/edit/:id/', productsController.edit); 
router.put('/edit/:id/', upload.single('editedProductImage'), productsController.update); //Tengo que tocar en el edit form


// Eliminar un producto 
router.delete('/delete/:id', productsController.destroy);

/* Quiten el comentario y editen según el enunciado




*/

module.exports = router;