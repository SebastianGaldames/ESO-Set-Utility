const parsingService = require('../services/parsingService')

const test = async (req, res) => {
    console.log(req.query)
  const parseado = await parsingService.parseLine(req.query.linea)
  console.log(parseado)
  res.status(200).send(parseado)
}

module.exports = { test }