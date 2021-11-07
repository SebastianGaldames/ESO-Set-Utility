import models from "../models";

export default {
    //Metodo para añadir un personaje
    add: async (req,res,next) =>{
        try{
            const reg = await models.Personaje.create(req.body);
            res.status(200).json(reg);
        } catch (e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    //Metodo para obtener un personaje mediante _id
    query: async (req,res,next) =>{
        try {
            const reg=await models.Personaje.findOne({_id:req.query._id});
            if(!reg){
                res.status(404).sed({
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
    },
    //Metodo para listar todos los personajes actuales en la BD
    list: async (req,res,next) =>{
        try {
            const reg= await models.Personaje.find({});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    //Metodo para actualizar un personaje en concreto mediante el _id
    update: async (req,res,next) =>{
        try {
            const reg= await models.Personaje.findByIdAndUpdate({_id:req.body._id},{});
                res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    //Metodo para eliminar un personaje mediante _id
    remove: async (req,res,next) =>{
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
}