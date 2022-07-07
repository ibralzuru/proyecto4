
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class hoteles extends Model {
    static associate(models) {
      this.hasMany(models.reservas, {
        foreignKey:'hotelId',
      });
    }
  }
  hoteles.init({
    hotelId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: DataTypes.STRING,
 }, {
    sequelize,
    modelName: 'hoteles',
  });
  hoteles.removeAttribute('id');
  return hoteles;
};