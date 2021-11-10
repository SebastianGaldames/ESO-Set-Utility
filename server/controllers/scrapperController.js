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
    //const t = await scrapperService.scrapSet(setListUrls[255])
    const allSets = await scrapperService.scrapAllSets(setListUrls)

    //const t = await scrapperService.scrapSet('bleh')

    res.status(200).send(allSets)
  }
}

const scrapSingle = async (req, res) => {
  if (!scrapperService.auth(req.body.secret)) {
    res.status(401).send('secret invalid')
  } else {
    const url = scrapperService.url
    const response = await axios.get(url)
    const urlIndex = Number(req.body.setIndex)
    const setListUrls = scrapperService.scrapSetsTable(response.data)

    const t = await scrapperService.scrapSet(setListUrls[urlIndex])

    res.status(200).send([t])
  }
}

module.exports = { scrap, scrapSingle, test }
