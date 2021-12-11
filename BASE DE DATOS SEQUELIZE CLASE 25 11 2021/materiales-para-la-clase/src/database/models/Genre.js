// const { TINYINT, INTEGER } = require("sequelize/types");

const genresController = require("../../controllers/genresController");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Genre';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        ranking: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        active: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Genre = sequelize.define(alias, cols, config);

    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (Movie)

    Genre.associate = function (models) {
        Genre.hasMany(models.Movie, { //relación de 1 a 1
            as: 'movies', //nombre de la relación que es el destino siempre
            foreignKey: 'genre_id' /* es el foreign key que se conecta en movie */
        })
    }

    return Genre
};