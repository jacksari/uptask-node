const Sequelize = require('sequelize');
const slug = require('slug')
const shrotid = require('shortid')

const sequelize = require('../config/db');

const Proyectos = sequelize.define('proyectos',{
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    nombre :  Sequelize.STRING(100),
    url : Sequelize.STRING(100)
},{
    hooks: {
        beforeCreate(proyecto){
            const url = slug(proyecto.nombre).toLowerCase()
            proyecto.url = `${url}-${shrotid.generate()}`
        }
    }
});

module.exports = Proyectos