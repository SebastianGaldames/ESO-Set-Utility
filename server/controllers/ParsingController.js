const parsingService = require('../services/parsingService')

/**
 * referenced from Parsing.js
 * @param {*} req
 * @param {*} res
 */
const test = async (req, res) => {
  console.log(req.query)
  const parseado = await parsingService.parseSetBonusLine(req.query.linea)
  // console.log(parseado)
  res.status(200).send(parseado)
}

module.exports = { test }
