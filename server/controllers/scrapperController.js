const axios = require('axios')
const scrapperService = require('../services/scrapperService')

const test = async (req, res) => {
  res.send(scrapperService.testService())
}

const scrap = async (req, res) => {
  if (!scrapperService.auth(req.body.secret)) {
    res.status(401).send('secret invalid')
  } else {
    const url = scrapperService.url
    const response = await axios.get(url)
    res.send(response.data)
  }
}

module.exports = { scrap, test }
