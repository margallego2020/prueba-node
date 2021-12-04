const db = require('../database/models');
const sequelize = db.sequelize;

//Otra forma de llamar a los modelos
const Movies = db.Movie;

const moviesController = {
    'list': (req, res) => {
        db.Movie.findAll()
            .then(movies => {
                res.render('moviesList.ejs', {movies})
            })
    },
    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id)
            .then(movie => {
                res.render('moviesDetail.ejs', {movie});
            });
    },
    'new': (req, res) => {
        db.Movie.findAll({
            order : [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then(movies => {
                res.render('newestMovies', {movies});
            });
    },
    'recomended': (req, res) => {
        db.Movie.findAll({
            where: {
                rating: {[db.Sequelize.Op.gte] : 8}
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                res.render('recommendedMovies.ejs', {movies});
            });
    }, //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
    add: function (req, res) {
        db.Movie.findAll()
            .then( (movies) => {
                return res.render('moviesAdd.ejs', { movies } );
            })
            .catch((error) => {
                console.log(error);
            })
        
    },
    create: function (req, res) {
        // TODO
        //Creo un registro tomando todos los datos que vinieron en el req.body

        db.Movie.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            // genre_id: req.body.genre_id
        })
        .then( () => {
             //No devuelvo nada en el then y redijo al listado de peliculas
            return res.redirect('/movies');
            } )
        .catch((error) => {
            console.log(error);
        });
    },
    edit: function(req, res) {
        // TODO
        let  movieId= req.params.id;
        db.Movie.findByPk(movieId)
        .then ( Movie => {
            return res.render('moviesEdit.ejs', { Movie });
        })
        .catch((error) => {
            console.log(error);
        });
    },
    update: function (req,res) {
        //Modifico un registro tomando todos los datos que vinieron en el req.body

        let  movieId= req.params.id;

        db.Movie.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id
        },
        {
            where: {
                id: movieId
            } 

        })
        .then( () => {
             //No devuelvo nada en el then y redijo al listado de peliculas
            return res.redirect('/movies');
            } )
        .catch((error) => {
            console.log(error);
        });

        
        
        // TODO
    },
    delete: function (req, res) {
        // TODO
        movieId = req.params.id;
        db.Movie.findByPk(movieId)
        .then ( (Movie) => {
            return res.render('moviesDelete.ejs', { Movie })
        })
        .catch((error) => {
            console.log(error);
        })
        

    },
    destroy: function (req, res) {
        let movieId = req.params.id;
        db.Movie.destroy({
            where: {
                id: movieId
            },
            force: true
        })
        .then( () => {
            return res.redirect('/movies')
        })
        .catch((error) => {
            console.log(error);
        })
    }

}

module.exports = moviesController;