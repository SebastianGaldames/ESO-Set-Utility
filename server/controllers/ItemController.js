import models from "../models";

export default {
    //Metodo para añadir un Item
    add: async (req,res,next) =>{
        try{
            const reg = await models.Item.create(req.body);
            res.status(200).json(reg);
        } catch (e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    //Metodo para obtener un Item mediante _id
    query: async (req,res,next) =>{
        try {
            const reg=await models.Item.findOne({_id:req.query._id});
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
    //Metodo para listar todos los Item actuales en la BD
    list: async (req,res,next) =>{
        try {
            const reg= await models.Item.find({});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    //Metodo para actualizar un Item en concreto mediante el _id
    update: async (req,res,next) =>{
        try {
            const reg= await models.Item.findByIdAndUpdate({_id:req.body._id},{});
                res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    //Metodo para eliminar un Item mediante _id
    remove: async (req,res,next) =>{
        try {
            const{id} = req.params;
            const reg = await models.Item.findByIdAndDelete({_id: id});
            res.status(200).json(reg);

        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    }
}