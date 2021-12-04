const db = require('../../database/models');
const sequelize = db.sequelize;


const genresControllerAPI = {
    'list': (req, res) => {
        db.Genre.findAll()
            .then(genres => {
                return res.status(200).json({
                    meta: {
                        status: 200,
                        total: genres.length, 
                        url: "api/genres"
                    },
                    data: genres
                    })

            })
            .catch(function(error){
                console.log(error)
            })
        

    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                return res.status(200).json({
                    meta: {
                        status: 200,
                        url: "api/genres/detail"
                    },                    
                    data: genre
                })
            })
            .catch(function(error){
                console.log(error)
            })
    }

}

module.exports = genresControllerAPI;