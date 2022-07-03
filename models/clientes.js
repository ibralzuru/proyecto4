const {Model} = require('sequelize');

module.exports = (sequelize, type) => {
  class clientes extends Model {
  
    static associate(models) {
   
      this.hasMany(models.reservas, {
        foreignKey:'dni',
      });
    }
  }
  clientes.init({
    dni:{
      type: type.STRING,
      primaryKey: true
    },
    nombre: type.STRING,
    telefono: type.INTEGER,
    email: type.STRING
  }, {
    sequelize,
    modelName: 'clientes',
  });
  clientes.removeAttribute('id');
  return clientes;
}