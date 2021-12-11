module.exports = (sequelize, dataTypes) => {
    let alias = 'Actor';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        first_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(3,1),
            allowNull: false
        },
        favorite_movie_id: dataTypes.BIGINT(10).UNSIGNED
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Actor = sequelize.define(alias, cols, config); 

    Actor.associate = function (models) {
        Actor.belongsToMany(models.Movie, { //relación de N a N. Usan tabla intermedia
            as: "movies", //nombre de la relación que es el destino siempre
            through: 'actor_movie', /* nombre de la tabla intermedia */
            foreignKey: 'actor_id',  /* cómo se conecta mi tabla de actor en la tabla intermedia */
            otherKey: 'movie_id', /* cómo se conecta mi tabla de movie en la tabla intermedia */
            timestamps: false
        })
    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (Movie)
    }

    return Actor
};