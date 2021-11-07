import models from "../models";

export default {
    //Metodo para añadir una Familia
    add: async (req,res,next) =>{
        try{
            const reg = await models.Familia.create(req.body);
            res.status(200).json(reg);
        } catch (e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    //Metodo para obtener una Familia mediante _id
    query: async (req,res,next) =>{
        try {
            const reg=await models.Familia.findOne({_id:req.query._id});
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
    //Metodo para listar todos las Familias actuales en la BD
    list: async (req,res,next) =>{
        try {
            const reg= await models.Familia.find({});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    //Metodo para actualizar una Familia en concreto mediante el _id
    update: async (req,res,next) =>{
        try {
            const reg= await models.Familia.findByIdAndUpdate({_id:req.body._id},{});
                res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    //Metodo para eliminar una Familia mediante _id
    remove: async (req,res,next) =>{
        try {
            const{id} = req.params;
            const reg = await models.Familia.findByIdAndDelete({_id: id});
            res.status(200).json(reg);

        } catch(e){
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    }
}