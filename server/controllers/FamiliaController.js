const models = require('../models')

//Metodo para añadir una Familia
const add = async (req, res, next) => {
  try {
    const reg = await models.Familia.create(req.body)
    res.status(200).json(reg)
  } catch (e) {
    res.status(500).send({
      message: 'Ocurrio un error',
    })
    next(e)
  }
}

//Metodo para obtener una Familia mediante _id
const query = async (req, res, next) => {
  try {
    const reg = await models.Familia.findOne({ _id: req.body._id })
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

//Metodo para obtener una Familia mediante _id
const queryNombre = async (req, res, next) => {
  try {
    const reg = await models.Familia.findOne({ nombre: req.body.nombre })
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

//Metodo para obtener una Familia mediante hash
const queryHash = async (req, res, next) => {
  try {
    const reg = await models.Familia.findOne({ hash: req.query.hash })
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

//Metodo para listar todos las Familias actuales en la BD
const list = async (req, res, next) => {
  try {
    const reg = await models.Familia.find({})
    res.status(200).json(reg)
  } catch (e) {
    res.status(500).send({
      message: 'Ocurrio un error',
    })
    next(e)
  }
}
//Metodo para actualizar una Familia en concreto mediante el _id
const update = async (req, res, next) => {
  try {
    const reg = await models.Familia.findByIdAndUpdate(
      { _id: req.body._id },
      req.body
    )
    res.status(200).json(reg)
  } catch (e) {
    res.status(500).send({
      message: 'Ocurrio un error',
    })
    next(e)
  }
}
//Metodo para eliminar una Familia mediante _id
const remove = async (req, res, next) => {
  try {
    const { id } = req.params
    const reg = await models.Familia.findByIdAndDelete({ _id: id })
    res.status(200).json(reg)
  } catch (e) {
    res.status(500).send({
      message: 'Ocurrio un error',
    })
    next(e)
  }
}
//Metodo para obtener el array de los items
const getItems = async (req, res, next) => {
  try {
    const reg = await models.Familia.findOne({ _id: req.query._id })
    if (!reg) {
      res.status(404).sed({
        message: 'El registro no existe',
      })
    } else {
      res.status(200).json(reg.itemsFamilia)
    }
  } catch (e) {
    res.status(500).send({
      message: 'Ocurrio un error',
    })
    next(e)
  }
}
//Metodo para agregar un item a la familia
const addItemFamilia = async (req, res, next) => {
  try {
    const reg = await models.Familia.findByIdAndUpdate(
      { _id: req.body._id },
      { itemsFamilia: req.itemsFamilia }
    )
    res.status(200).json(reg)
  } catch (e) {
    res.status(500).send({
      message: 'Ocurrio un error',
    })
    next(e)
  }
}

module.exports = {
  add,
  query,
  list,
  update,
  remove,
  getItems,
  addItemFamilia,
  queryHash,
  queryNombre,
}
