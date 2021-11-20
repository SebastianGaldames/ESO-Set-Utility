const models = require('../models')

//Metodo para añadir un Trait
const add = async (req, res, next) => {
  try {
    const reg = await models.Trait.create(req.body)
    res.status(200).json(reg)
  } catch (e) {
    res.status(500).send({
      message: 'Ocurrio un error',
    })
    next(e)
  }
}
//Metodo para obtener un Trait mediante _id
const query = async (req, res, next) => {
  try {
    const reg = await models.Trait.findOne({ _id: req.body._id })
    if (!reg) {
      res.status(404).send({
        message: 'El registro no existe',
      })
    } else {
      res.status(200).json(reg)
    }
  } catch (e) {
    res.status(500).send({
      message: 'Ocurrio un error',
    })
    next(e)
  }
}
//Metodo para obtener un Trait por nombre (unico)
const queryNombre = async (req, res, next) => {
  try {
    const reg = await models.Trait.findOne({ nombre: req.body.nombre })
    if (!reg) {
      res.status(404).send({
        message: 'El registro no existe',
      })
    } else {
      res.status(200).json(reg)
    }
  } catch (e) {
    res.status(500).send({
      message: 'Ocurrio un error',
    })
    next(e)
  }
}

//Metodo para listar todos los Trait actuales en la BD
const list = async (req, res, next) => {
  console.log('in controller')
  try {
    const reg = await models.Trait.find({})
    res.status(200).json(reg)
  } catch (e) {
    res.status(500).send({
      message: 'Ocurrio un error',
    })
    next(e)
  }
}

//Metodo para actualizar un Trait en concreto mediante el _id
const update = async (req, res, next) => {
  try {
    const reg = await models.Trait.findByIdAndUpdate({ _id: req.body._id }, {})
    res.status(200).json(reg)
  } catch (e) {
    res.status(500).send({
      message: 'Ocurrio un error',
    })
    next(e)
  }
}
//Metodo para eliminar un Trait mediante _id
const remove = async (req, res, next) => {
  try {
    const { id } = req.params
    const reg = await models.Trait.findByIdAndDelete({ _id: id })
    res.status(200).json(reg)
  } catch (e) {
    res.status(500).send({
      message: 'Ocurrio un error',
    })
    next(e)
  }
}

module.exports = { add, query, list, update, remove, queryNombre }
