const models = require('../models')
//Metodo para añadir un personaje
const add = async (req,res,next) =>{
    try{
        const reg = await models.Personaje.create(req.body);
        res.status(200).json(reg);
    } catch (e){
        res.status(500).send({
            message: 'Ocurrio un error'
        });
        next(e);
    }
}
//Metodo para obtener un personaje mediante _id
const query = async (req,res,next) =>{
    try {
        const reg=await models.Personaje.findOne({_id:req.query._id});
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
//Metodo para listar todos los personajes actuales en la BD
const list = async (req,res,next) =>{
    try {
        const reg= await models.Personaje.find({});
        res.status(200).json(reg);
    } catch(e){
        res.status(500).send({
            message: 'Ocurrio un error'
        });
        next(e);
    }
}
//Metodo para actualizar un personaje en concreto mediante el _id
const update = async (req,res,next) =>{
    try {
        const reg= await models.Personaje.findByIdAndUpdate({_id:req.body._id},{nombre:req.nombre});
            res.status(200).json(reg);
    } catch(e){
        res.status(500).send({
            message: 'Ocurrio un error'
        });
        next(e);
    }
}
//Metodo para eliminar un personaje mediante _id
const remove = async (req,res,next) =>{
    try {
        const{id} = req.params;
        const reg = await models.Personaje.findByIdAndDelete({_id: id});
        res.status(200).json(reg);

    } catch(e){
        res.status(500).send({
            message: 'Ocurrio un error'
        });
        next(e);
    }
}
//Metodo para agregar items al personaje
const getItems = async (req,res,next) =>{
    try {
        const reg=await models.Personaje.findOne({_id:req.query._id});
        if(!reg){
            res.status(404).send({
                message: 'El registro no existe'
            });
        }
        else{
            res.status(200).json(reg.items);
        }
    } catch(e){
        res.status(500).send({
            message: 'Ocurrio un error'
        });
        next(e);
    }
}

//Metodo para agregar items al personaje
const actualizarItems = async (req,res,next) =>{
    try {
        const reg= await models.Personaje.findByIdAndUpdate({_id:req.body._id},{items:req.items});
            res.status(200).json(reg);
    } catch(e){
        res.status(500).send({
            message: 'Ocurrio un error'
        });
        next(e);
    }
}

module.exports = { add, query, list, update, remove, getItems, actualizarItems}