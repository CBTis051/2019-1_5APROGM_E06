const Sequelize = require('sequelize');

// Conexión a la BD con sequelize
const sequelize = new Sequelize('proyecto', 'root', '123Marcos!', {
    host: 'al17102.systems',
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() =>{
        console.log('Connection has been established successfully');
    })
    .catch(err =>{
        console.error('Unable to connect to the database', err);
    });

module.exports = sequelize;