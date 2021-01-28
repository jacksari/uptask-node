const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('uptask', 'root', 'root', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 9000,
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
  });



module.exports = sequelize