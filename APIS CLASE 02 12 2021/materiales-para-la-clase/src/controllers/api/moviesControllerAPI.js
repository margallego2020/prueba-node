const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;


const moviesControllerAPI = {
    
    create: function (req,res) {
        db.Movie
        .create(req.body)
         
        .then((movie) => {
            return res.status(200).json({
                data: movie,
                status: 200,
                Creado: "si"
            })
        })          
        .catch(error => res.send(error))
    },
    destroy: function (req,res) {
        let movieId = req.params.id;
        db.Movie
        .destroy(
            {
                where: {
                    id: movieId
                },
            
            force: true
        }) // force: true es para asegurar que se ejecute la acción
        
        .then((respuesta)=>{
            return res.json(respuesta)
        })
        .catch(error => res.send(error)) 
    }
}

module.exports = moviesControllerAPI;