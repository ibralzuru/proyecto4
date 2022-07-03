module.exports = (sequelize, type) => {
    return sequelize.define('film', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        title: type.STRING,
        descripion: type.STRING,
        score: type.INTEGER,
        director: type.STRING
    });
}