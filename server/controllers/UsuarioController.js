const models = require('../models')
//const bcrypt = require('bcrypt');

//Metodo para crear un usuario (registro)
const add = async (req,res,next) =>{
    try{
        //req.body.password = await bcrypt.hash(req.body.password,10);
        const reg = await models.Usuario.create(req.body);
        res.status(200).json(reg);
    } catch (e){
        res.status(500).send({
            message: 'Ocurrio un error'
        });
        next(e);
    }
}
//Metodo para obtener un usuario mediante _id
const query = async (req,res,next) =>{
    try {
        const reg=await models.Usuario.findOne({_id:req.query._id});
        if(!reg){
            res.status(404).send({
                message: 'El registro no existe'
            });
        }
        else{
            res.status(200).json(reg);
        }
    } catch(e){
        res.status(500).send({
            message: 'Ocurrio un error'
        });
        next(e);
    }
}
const update = async (req,res,next) =>{
    try {
        const reg0 = await models.Usuario.findOne({_id:req.body._id});  
        const reg= await models.Usuario.findByIdAndUpdate({_id:req.body._id},{usuario:req.body.usuario,password:req.body.password});
            res.status(200).json(reg);
    } catch(e){
        res.status(500).send({
            message: 'Ocurrio un error'
        });
        next(e);
    }
}
//Metodo para listar a todos los usuarios registrados
const list = async (req,res,next) =>{
    try {
        const reg= await models.Usuario.find({});
        res.status(200).json(reg);
    } catch(e){
        res.status(500).send({
            message: 'Ocurrio un error'
        });
        next(e);
    }
}
//Metodo login que busca por nombreUsuario y compara la contraseña encriptada de la BD 
const login = async (req,res,next) => {
    
}
//Metodo para crear un personaje al usuario
const addPersonaje = async (req,res,next) => {
    
}
//Metodo para agregar items al inventario
const addItem = async (req,res,next) => {
    
}

module.exports = { add, query, update, list, login}