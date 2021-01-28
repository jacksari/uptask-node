const express = require('express')
const router = express.Router()
const proyectosController = require('../controllers/proyectosController')
const { body, validationResult } = require('express-validator');

router.get('/',
    proyectosController.proyectosHome
)

router.get('/nuevo-proyecto',
    proyectosController.formularioProyecto
)

router.post('/nuevo-proyecto',
    body('nombre').not().isEmpty().trim().escape(),
    proyectosController.nuevoProyecto
)


module.exports = router