const express = require('express');
const router = express.Router();

// let req.session.numeroVisitas=0;

router.get('/', function(req, res, next) {
    res.render('index', {title: 'Express'});
});


router.get('/pruebaSession', function(req, res) {
   if (req.session.numeroVisitas == undefined) {  //si no existe el contador de visitas
        req.session.numeroVisitas = 0;
    }

    req.session.numeroVisitas++;

   res.send('Session tiene el número: ' + req.session.numeroVisitas);
}),

router.get('/mostrarNumeroSession', function(req, res) {
    res.send('Session tiene el número: ' + req.session.numeroVisitas);
})

module.exports = router;

