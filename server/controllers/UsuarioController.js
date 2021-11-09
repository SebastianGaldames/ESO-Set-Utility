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
    try{
        const user = await models.Usuario.findOne({nombreUsuario: req.body.nombreUsuario});
        if(user){//existe un usuario con ese nombre de usuario
            console.log(req.body.email + "email");
            console.log("email");
            const match = await compare(req.body.password,user.password); //comparamos si son iguales las contraseñas
            if(match){
                let tokenReturn = await token.encode(user._id, user.rol, user.nombreUsuario);
                
                res.status(200).json({user, tokenReturn});
            } else{
                res.status(404).send({
                    message: 'password incorrecta'
                });
            }
        } else{
            res.status(404).send({
                message: 'No existe este usuario'
            });
        }

    } catch(e){
        res.status(500).send({
            message: 'Ocurrio un error'
        });
        next(e);
    }
    
}
//Metodo para obtener el array de personajes al usuario
const getPersonajes = async (req,res,next) => {
    try {
        const reg=await models.Usuario.findOne({_id:req.query._id});
        if(!reg){
            res.status(404).send({
                message: 'El registro no existe'
            });
        }
        else{
            res.status(200).json(reg.personajes);
        }
    } catch(e){
        res.status(500).send({
            message: 'Ocurrio un error'
        });
        next(e);
    }
}

//Metodo para actualizar el array de personajes al usuario
const actualizarPersonajes = async (req,res,next) => {
    try{
        const reg0 = await models.Usuario.findOne({_id:req.body._id});
        const reg= await models.Usuario.findByIdAndUpdate({_id:req.body._id},{personajes:req.body.personajes});
        res.status(200).json(reg);
    } catch (e){
        res.status(500).send({
            message: 'Ocurrio un error'
        });
        next(e);
    }
}
//Metodo para obtener el array del inventario de un usuario en especifico
const getInventario = async (req,res,next) => {
    try {
        const reg=await models.Usuario.findOne({_id:req.query._id});
        if(!reg){
            res.status(404).send({
                message: 'El registro no existe'
            });
        }
        else{
            res.status(200).json(reg.inventario);
        }
    } catch(e){
        res.status(500).send({
            message: 'Ocurrio un error'
        });
        next(e);
    }
}

//Metodo para agregar items al inventario
const actualizarInventario = async (req,res,next) => {
    try{
        const reg0 = await models.Usuario.findOne({_id:req.body._id});
        const reg= await models.Usuario.findByIdAndUpdate({_id:req.body._id},{inventario:req.body.inventario});
        res.status(200).json(reg);
    } catch (e){
        res.status(500).send({
            message: 'Ocurrio un error'
        });
        next(e);
    }
}

module.exports = { add, query, update, list, login, getInventario, actualizarInventario, getPersonajes, actualizarPersonajes}