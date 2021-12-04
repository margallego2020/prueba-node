const db = require('../database/models'); /* Importo la variable db para poder usar todas la funciones 
de las bases de datos. Se le pone la carpeta en dónde están los modelos. las bases de datos.
*/

//Creo el controlador

const moviesController = {

    'list': (req, res) => {
        
        db.Movie.findAll() 
        /*Se tiene que llamar igual que en el archivo del modelo Movie.js, donde dice: let alias = 'Movie'
        Esto me trae todas las peliculas */
        .then( movies  => { //movies es el objeto que va a devolver sequelize después de buscar en la base de datos
            /* Sequelize hace un query a la base de datos y al query lo devuelve en un objeto para que lo podamos
            usar en Javascript */

            //Me va a listar las peliculas pasando como parámetro la base de datos de las peliculas
            res.render('moviesList', { movies } ) 

            //Hay que ver en el routes cómo está referenciado

        })
        
        .catch((err) => {
            console.log(err);
            
        });  
    },

    'detail': (req, res) => {
        
        db.Movie.findByPk(req.params.id) //el parámetro que viene por id del router.get('/movies/detail/:id' 
        /*Se tiene que llamar igual que en el archivo del modelo Movie.js, donde dice: let alias = 'Movie'
        Esto me trae la pelicula con el id que puse en '/movies/detail/:id' */
        .then( movie  => { //movies es el objeto que va a devolver sequelize después de buscar en la base de datos
            /* Sequelize hace un query a la base de datos y al query lo devuelve en un objeto para que lo podamos
            usar en Javascript */

            //Me va a listar las peliculas pasando como parámetro la base de datos de las peliculas
            res.render('moviesDetail', { movie } )

        })
        
        .catch((err) => {
            console.log(err);
            
        });  
    },

    'new': (req, res) => { //Hay que ordenar la lista de las peliculas por release_date y mostrar las primeras 5
        
        db.Movie.findAll( 
            {
                order: [ 
                    [ 'release_date', 'DESC'] //[ ' campo que quiero ordenar ', 'ASC o DESC' (ascendente 
                                                                                    //o descendente)]
                ],
                limit: 4
            }
        /*Se tiene que llamar igual que en el archivo del modelo Movie.js, donde dice: let alias = 'Movie' */
        )
        .then( movies  => { //movies es el objeto que va a devolver sequelize después de buscar en la base de datos
            /* Sequelize hace un query a la base de datos y al query lo devuelve en un objeto para que lo podamos
            usar en Javascript */

            //Me va a listar las peliculas pasando como parámetro la base de datos de las peliculas
            res.render('newestMovies', { movies } )

        })
        
        .catch((err) => {
            console.log(err);
            
        });  
    },

    'recomended': (req, res) => { //Hay que ordenar la lista de las peliculas por rating  y 
        // y a partir de un número de rating en particular
        
        db.Movie.findAll( 
            {
                where: {
                    rating: { [db.Sequelize.Op.gte] : 8 }
                },
                order: [
                    [ 'rating', 'ASC']
                ]
                
            }
        /*Se tiene que llamar igual que en el archivo del modelo Movie.js, donde dice: let alias = 'Movie' */
        )
        .then( movies  => { //movies es el objeto que va a devolver sequelize después de buscar en la base de datos
            /* Sequelize hace un query a la base de datos y al query lo devuelve en un objeto para que lo podamos
            usar en Javascript */

            //Me va a listar las peliculas pasando como parámetro la base de datos de las peliculas
            res.render('recommendedMovies', { movies } )

        })
        
        .catch((err) => {
            console.log(err);
            
        });  
    },

   


    

}

module.exports = moviesController;
