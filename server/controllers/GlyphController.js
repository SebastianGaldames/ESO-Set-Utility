const models = require('../models')

//Metodo para listar todos los Glyph actuales en la BD
const list = async (req, res, next) => {
  console.log('in controller')
  try {
    const reg = await models.Glyph.find({})
    res.status(200).json()
  } catch (e) {
    res.status(500).send({
      message: 'Ocurrio un error',
    })
    next(e)
  }
}

module.exports = { list }
