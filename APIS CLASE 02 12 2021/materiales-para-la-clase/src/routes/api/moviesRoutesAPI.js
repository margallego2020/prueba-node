const express = require('express');
const router = express.Router();
const moviesControllerAPI = require('../../controllers/api/moviesControllerAPI');

router.post('/movies/create', moviesControllerAPI.create);
router.delete('/movies/delete/:id', moviesControllerAPI.destroy);

module.exports = router;