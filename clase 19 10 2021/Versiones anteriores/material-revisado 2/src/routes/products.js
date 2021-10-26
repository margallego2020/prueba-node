// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

// Devolver todos los productos  
router.get('/', productsController.index);


// Crear un producto
router.get('/create/', productsController.create);

// Devolver un producto 
router.get('/:id/', productsController.detail);
router.post('/', productsController.store);

// Editar un producto 
router.get('/edit/:id/', productsController.edit); 
router.put('/edit/:id/', productsController.update); 

// Eliminar un producto 
router.delete('/delete/:id', productsController.destroy);


module.exports = router;