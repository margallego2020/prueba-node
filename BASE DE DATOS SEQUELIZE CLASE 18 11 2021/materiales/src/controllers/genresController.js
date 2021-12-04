const db = require('../database/models'); /* Importo la variable db para poder usar todas la funciones 
de las bases de datos. Se le pone la carpeta en dónde están los modelos. las bases de datos.
*/

//Creo el controlador

const genresController = {

    'list': (req, res) => {
        
        db.Genre.findAll() 
        /*Se tiene que llamar igual que en el archivo del modelo genre.js, donde dice: let alias = 'genre'
        Esto me trae todas las peliculas */
        .then( genres  => { //genres es el objeto que va a devolver sequelize después de buscar en la base de datos
            /* Sequelize hace un query a la base de datos y al query lo devuelve en un objeto para que lo podamos
            usar en Javascript */

            //Me va a listar las peliculas pasando como parámetro la base de datos de las peliculas
            res.render('genresList', { genres } ) 

            //Hay que ver en el routes cómo está referenciado

        })
        
        .catch((err) => {
            console.log(err);
            
        });  
    },

    'detail': (req, res) => {
        
        db.Genre.findByPk(req.params.id) //el parámetro que viene por id del router.get('/genres/detail/:id' 
        /*Se tiene que llamar igual que en el archivo del modelo genre.js, donde dice: let alias = 'genre'
        Esto me trae la pelicula con el id que puse en '/genres/detail/:id' */
        .then( genre  => { //genres es el objeto que va a devolver sequelize después de buscar en la base de datos
            /* Sequelize hace un query a la base de datos y al query lo devuelve en un objeto para que lo podamos
            usar en Javascript */

            //Me va a listar las peliculas pasando como parámetro la base de datos de las peliculas
            res.render('genresDetail', { genre } )

        })
        
        .catch((err) => {
            console.log(err);
            
        });  
    }
   


    

}

module.exports = genresController;
