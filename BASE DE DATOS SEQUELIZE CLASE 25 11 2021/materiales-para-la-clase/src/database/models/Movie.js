module.exports = (sequelize, dataTypes) => {
    let alias = 'Movie'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        title: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false
        },
        awards: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        release_date: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        length: dataTypes.BIGINT(10),
        genre_id: dataTypes.BIGINT(10)
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Movie = sequelize.define(alias,cols,config);

    //Aquí debes realizar lo necesario para crear las relaciones con los otros modelos (Genre - Actor)

    Movie.associate = function (models) {
        Movie.belongsTo(models.Genre, { //relación de 1 a 1
            as: 'genre', //nombre de la relación que es el destino siempre
            foreignKey: 'genre_id' /* es mi foreign key que tengo para conectarme a genre */
        });
    
    // Movie.associate = function(models) {
        Movie.belongsToMany(models.Actor, { //relación de N a N. Usan tabla intermedia
            as: "actors", //nombre de la relación que es el destino siempre
            through: 'actor_movie', /* nombre de la tabla intermedia */
            foreignKey: 'movie_id', /* cómo se conecta mi tabla de movie en la tabla intermedia */
            otherKey: 'actor_id', /* cómo se conecta mi tabla de actor en la tabla intermedia */
            timestamps: false
        });
    }




    return Movie
};