const express = require('express');
const router = express.Router();
const genresControllerAPI = require('../../controllers/api/genresControllerAPI');

router.get('/genres', genresControllerAPI.list);
router.get('/genres/detail/:id', genresControllerAPI.detail);


module.exports = router;