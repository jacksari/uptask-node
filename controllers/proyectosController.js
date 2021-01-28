const Proyectos = require('../models/ProyectosModel')
const slug = require('slug')

proyectosHome = async (req,res) => {
    const proyectos = await Proyectos.findAll()
    res.render('index', {
        nombrePagina: 'Proyectos',
        proyectos
    })
}

formularioProyecto = async (req,res) => {
    
    const proyectos = await Proyectos.findAll()
    res.render('nuevo-proyecto',{
        nombrePagina: 'Nuevo Proyecto',
        proyectos
    })
}

nuevoProyecto = async (req,res) => {
    //Enviar a la consola lo que el usuario escriba
    //console.log(req.body);
    const { nombre } = req.body
    let errores = []
    if(!nombre){
        errores.push({'texto': 'Agrega un nombre al proyecto'})
    }
    if(errores.length>0){
        res.render('nuevo-proyecto',{
            nombrePagina: 'Nuevo Proyecto',
            errores
        })
    }else{
        //No hay errores
        //Insertar en db
        const proyecto = await Proyectos.create({ nombre })
        res.redirect('/')
    }
}


module.exports = {
    proyectosHome,
    formularioProyecto,
    nuevoProyecto
}