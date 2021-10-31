const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');
const userAuth = require('../middlewares/userAuth');

router.get('/', mainController.index);

router.get('/admin',userAuth , mainController.admin);

module.exports = router;

