/* 'use strict'; */
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reservas extends Model {

    static associate(models) {
      reservas.belongsTo(models.clientes,{
        foreignKey: 'dni',
      })
    };
    static associate(models) {
      reservas.belongsTo(models.hoteles,{
        foreignKey: 'hotelId',
      })
    };
  }
  reservas.init({
    importe: DataTypes.INTEGER,
    fechaEntrada: DataTypes.DATE,
    fechaSalida: DataTypes.DATE,
    hotelId: DataTypes.INTEGER,
    dni: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'reservas',
  });
  return reservas;
};