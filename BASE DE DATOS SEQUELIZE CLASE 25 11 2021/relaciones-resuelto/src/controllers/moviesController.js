const path = require('path');
const { Movie, Genre } = require('../database/models');
const { Op } = require('sequelize');

const moviesController = {
  list: (req, res) => {
    Movie.findAll().then((movies) => {
      res.render('moviesList.ejs', { movies });
    });
  },
  detail: (req, res) => {
    Movie.findByPk(req.params.id, {
      include: [{ association: 'genre' }, { association: 'actors' }]
    }).then((movie) => {
      // console.log(movie);
      // res.send(movie);
      res.render('moviesDetail.ejs', { movie });
    });
  },
  genreDetail: (req, res) => {
    Genre.findByPk(req.params.id, {
      include: [{ association: 'movies' }]
    }).then((genre) => {
      // console.log(movie);
      // res.send(movie);
      res.render('genreDetail.ejs', { genre });
    });
  },
  new: (req, res) => {
    Movie.findAll({
      order: [['release_date', 'DESC']],
      limit: 5
    }).then((movies) => {
      res.render('newestMovies', { movies });
    });
  },
  recomended: (req, res) => {
    Movie.findAll({
      where: {
        rating: { [Op.gte]: 8 }
      },
      order: [['rating', 'DESC']]
    }).then((movies) => {
      res.render('recommendedMovies.ejs', { movies });
    });
  },
  //Aqui dispongo las rutas para trabajar con el CRUD
  add: function (req, res) {
    Genre.findAll()
      .then((allGenres) => {
        return res.render(path.resolve(__dirname, '..', 'views', 'moviesAdd'), {
          allGenres
        });
      })
      .catch((error) => res.send(error));
  },
  create: function (req, res) {
    Movie.create({
      title: req.body.title,
      rating: req.body.rating,
      awards: req.body.awards,
      release_date: req.body.release_date,
      length: req.body.length,
      genre_id: req.body.genre_id
    })
      .then(() => {
        return res.redirect('/movies');
      })
      .catch((error) => res.send(error));
  },
  edit: function (req, res) {
    let movieId = req.params.id;
    let promMovies = Movie.findByPk(movieId);
    let promGenres = Genre.findAll();
    Promise.all([promMovies, promGenres])
      .then(([Movie, allGenres]) => {
        return res.render(
          path.resolve(__dirname, '..', 'views', 'moviesEdit'),
          { Movie, allGenres }
        );
      })
      .catch((error) => res.send(error));
  },
  update: function (req, res) {
    let movieId = req.params.id;
    Movie.update(
      {
        title: req.body.title,
        rating: req.body.rating,
        awards: req.body.awards,
        release_date: req.body.release_date,
        length: req.body.length,
        genre_id: req.body.genre_id
      },
      {
        where: { id: movieId }
      }
    )
      .then(() => {
        return res.redirect('/movies');
      })
      .catch((error) => res.send(error));
  },
  delete: function (req, res) {
    let movieId = req.params.id;
    Movie.findByPk(movieId)
      .then((Movie) => {
        return res.render(
          path.resolve(__dirname, '..', 'views', 'moviesDelete'),
          { Movie }
        );
      })
      .catch((error) => res.send(error));
  },
  destroy: function (req, res) {
    let movieId = req.params.id;
    Movie.destroy({ where: { id: movieId }, force: true }) // force: true es para asegurar que se ejecute la acción
      .then(() => {
        return res.redirect('/movies');
      })
      .catch((error) => res.send(error));
  }
};

module.exports = moviesController;
