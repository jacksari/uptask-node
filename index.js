const express = require('express');
const routes = require('./routes')
const path = require('path')
const bodyParser = require('body-parser')

//helpers con algunas funciones
const hepers = require('./helpers')

//Crear la coneccion a la db
const sequelize = require('./config/db')
sequelize.authenticate()
            .then(()=> console.log('db conectada'))
            .catch(e => console.log(e))


//Importar modelo
require('./models/ProyectosModel')

const app = express();

//Donde cargar los archivos estáticos
app.use(express.static('public'))

//Habilitar pug
app.set('view engine', 'pug')

//Añadir la carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

//Pasar vardump a la aplicacion
app.use((req,res,next)=>{
    res.locals.year = new Date().getFullYear()
    res.locals.vardump = hepers.vardump
    next()
}) 

app.use(bodyParser.urlencoded({extended: true}))

app.use('/', routes)

app.listen(3000)