
module.exports = (sequelize, dataTypes) => { //Estoy exportando una función en la cual defino la tabla

//Voy a definir los 3 argumentos que le voy a pasar al sequelize.define

    //Me define cómo se va a llamar la tabla para referenciar
    let alias = 'Genre'; 

    //Defino los campos en función de la base de datos que quiero usar (en mi caso movies_db)
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: dataTypes.STRING
        },
        
        ranking: //cualquier cosa que sea número lo pasamos a integer
        {
            type: dataTypes.INTEGER
        },

        active: //es un tinyint en la base de datos
        {
            type: dataTypes.INTEGER
        }

    }
    
    let config = {
        tableName : 'genres', /*es el nombre real de la tabla como está en la base de datos. 
        Dentro de movies_db, quiero tomar la tabla movies.
        */
        timestamps : false //me dice que no tenga en cuenta los campos created_at y updated_at en la base de datos
        //quiero usar
    };

    const Genre = sequelize.define(alias, cols, config); //alias, cols, config son nombres puestos porque sí
    //se les puede cambiar el nombre
    
    //Me devuelve la base de datos en una constante llamada Genre
    return Genre;
    
    

}