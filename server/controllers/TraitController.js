const models = require('../models')

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

//Metodo para listar todos los Trait actuales en la BD sin sus calidades
const listSmall = async (req, res, next) => {
  console.log('in controller')
  try {
    const reg = await models.Trait.find({})

    var jsonReg = JSON.parse(JSON.stringify(reg))

    jsonReg.forEach((trait) => {
      trait.calidades = {}
      trait.calidades2h = {}
      console.log(trait)
    })

    res.status(200).json(jsonReg)
  } catch (e) {
    res.status(500).send({
      message: 'Ocurrio un error',
    })
    next(e)
  }
}

module.exports = { query, list, listSmall, queryNombre }
