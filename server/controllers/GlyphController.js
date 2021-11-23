const models = require('../models')

//Metodo para listar todos los Glyph actuales en la BD
const list = async (req, res, next) => {
  try {
    const reg = await models.Glyph.find({})

    res.status(200).json(reg)
  } catch (e) {
    res.status(500).send({
      message: 'Ocurrio un error',
    })
    next(e)
  }
}

//Metodo para listar todos los Glyph actuales en la BD, sin sus potencias
const listSmall = async (req, res, next) => {
  try {
    const reg = await models.Glyph.find({})

    var jsonReg = JSON.parse(JSON.stringify(reg))

    jsonReg.forEach((glyph) => {
      glyph.potencias = []
      console.log(glyph)
    })

    res.status(200).json(jsonReg)
  } catch (e) {
    res.status(500).send({
      message: 'Ocurrio un error',
    })
    next(e)
  }
}

//Metodo para obtener un Glyph mediante _id
const query = async (req, res, next) => {
  try {
    const reg = await models.Glyph.findOne({ _id: req.body._id })
    if (!reg) {
      res.status(404).send({
        message: 'El registro no existe',
      })
    } else {
      console.log(reg)
      res.status(200).json(reg)
    }
  } catch (e) {
    res.status(500).send({
      message: 'Ocurrio un error',
    })
    next(e)
  }
}

//Metodo para obtener un Glyph con una potencia mediante _id y potencia
const queryPotencia = async (req, res, next) => {
  try {
    const reg = await models.Glyph.findOne({ _id: req.body._id })
    if (!reg) {
      res.status(404).send({
        message: 'El registro no existe',
      })
    } else {
      var jsonReg = JSON.parse(JSON.stringify(reg))
      //console.log(jsonReg.potencias)

      jsonReg.potencias.forEach((pot) => {
        if (pot.potencia === req.body.potencia) {
          jsonReg.potencias = [pot]
          return
        }
      })

      //console.log(jsonReg)
      res.status(200).json(jsonReg)
    }
  } catch (e) {
    res.status(500).send({
      message: 'Ocurrio un error',
    })
    next(e)
  }
}

module.exports = { list, listSmall, query, queryPotencia }
