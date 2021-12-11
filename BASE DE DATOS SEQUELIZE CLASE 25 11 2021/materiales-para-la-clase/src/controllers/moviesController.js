const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const { resolveInclude } = require('ejs');


//Aqui tienen una forma de llamar a cada uno de los modelos
// const {Movies,Genres,Actor} = require('../database/models');

//Aquí tienen otra forma de llamar a los modelos creados
const Movie = db.Movie;
const Genre = db.Genre;
const Actor = db.Actor;

/* Otra forma de hacer lo de arriba
const { Movie, Genre } = require('../database/models');
 */

const moviesController = {
    'list': (req, res) => {
        db.Movie.findAll()
            .then(movies => {
                res.render('moviesList.ejs', {movies})
            })
    },
    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id, {
            include: [{association: 'genre'},{association: 'actors'}] 
        })
            .then(movie => {
                res.render('moviesDetail.ejs', {movie});
            });
    },
    //Agregado
    genreDetail: (req, res) => {
        Genre.FIndByPk(req.params.id, {
            include: [{ association: 'movies'}]
        })
        .then( (genre) => {
            res.render('genresDetail', {genre})
        } )

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
    },
    //Aqui dispongo las rutas para trabajar con el CRUD
    add: function (req, res) {
        Genre.findAll()
        .then(allGenres => {
            return res.render('moviesAdd', { allGenres } )
        })
        .catch( (error) => (
            console.log(error)
        ))
        
    
    },
    create: function (req,res) {
        Movie.create ({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id
        })
        .then( () => {
            return res.redirect('/movies');
        })
        .catch( (error) => (
            console.log(error)
        ))
    },
    edit: function(req,res) {
        let movieId = req.params.id;
        let promMovies = Movie.findByPk(movieId);
        let promGenres = Genre.findAll();
        Promise.all([promMovies, promGenres])
        .then(([Movie, allGenres]) => {
            return res.render ('moviesEdit', {Movie, allGenres});
        })
        .catch( (error) => (
            console.log(error)
        ))
    },
    update: function (req,res) {
        let movieId = req.params.id;
        Movie.update ({
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
            return res.redirect('/movies');
        })
        .catch( (error) => (
            console.log(error)
        ))

    },
    delete: function (req,res) {
        let movieId = req.params.id;
        Movie.findByPk( movieId )
        .then ( (Movie) => {
            return res.render('moviesDelete', { Movie });
        })
        .catch( (error) => (
            console.log(error)
        )) 

    },
    destroy: function (req,res) {
        let movieId = req.params.id;
        Movie.destroy ({
            where: {
                id : movieId
            },
            force: true
        })
        .then( () => {
            return res.redirect('/movies');
        })
        .catch( (error) => {
            console.log(error);
        })
        

    }
}

module.exports = moviesController;