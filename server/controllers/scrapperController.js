const axios = require('axios')
const jsdom = require('jsdom')
const { JSDOM } = jsdom
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
    const setListUrls = scrapperService.scrapSetsTable(response.data)
    console.log(setListUrls)
    res.status(200).send(setListUrls)
  }
}

module.exports = { scrap, test }
