const Sequelize = require('sequelize');
const FilmModel = require('./models/films')
const ClientesModels = require('./models/clientes')
const ReservasModels = require('./models/reservas')
const HotelesModels = require('./models/hoteles')

const sequelize = new Sequelize('e3I9huTydz', 'e3I9huTydz', 'Vb9veg2NDp', {
    host: 'remotemysql.com',
    dialect: 'mysql'
})

const Film = FilmModel(sequelize, Sequelize);
const Clientes = ClientesModels(sequelize, Sequelize);
const Reservas = ReservasModels(sequelize, Sequelize);
const Hoteles = HotelesModels(sequelize, Sequelize);


sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas sincronizadas');
    })


   module.exports = {
       Film
   } 
    module.exports = {
       Clientes
   }   
   module.exports = {
       
       Reservas
   }  

module.exports = {
    Hoteles
}