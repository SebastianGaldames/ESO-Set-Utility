const axios = require('axios')
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const scrapperService = require('../services/scrapperService')
const scrapperAdapter = require('../services/scrapperAdapterService')

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const test = async (req, res) => {
  // console.log('scrapping main page')
  // const url = scrapperService.url
  // const response = await axios.get(url)
  // console.log('scrapping urls')
  // const setListUrls = scrapperService.scrapSetsTable(response.data)
  // await scrapperService.scrapAllJewels(setListUrls)

  // for (let i = 0; i < 20; i++) {
  //   await sleep(1000)
  //   scrapperService.scrapStatus.sets++
  // }

  res.send('ok')
}

const scrap = async (req, res) => {
  if (!scrapperService.auth(req.body.secret)) {
    res.status(401).send('secret invalid')
  } else {
    console.log('scrapping main page')
    const url = scrapperService.url
    const response = await axios.get(url)
    console.log('scrapping urls')
    const setListUrls = scrapperService.scrapSetsTable(response.data)
    //const t = await scrapperService.scrapSet(setListUrls[255])
    console.log('scrapping all sets')
    const allSets = await scrapperService.scrapAllSets(setListUrls)

    //const t = await scrapperService.scrapSet('bleh')

    res.status(200).send(allSets)
  }
}

const scrapSingle = async (req, res) => {
  console.log(req.body.secret)
  if (!scrapperService.auth(req.body.secret)) {
    res.status(401).send('secret invalid')
  } else {
    const url = scrapperService.url
    const response = await axios.get(url)
    const urlIndex = Number(req.body.setIndex)
    const setListUrls = scrapperService.scrapSetsTable(response.data)

    const t = await scrapperService.scrapSet(setListUrls[urlIndex])
    //scrapperAdapter.addFamily(t)
    res.status(200).send([t])
  }
}

const reportScrapStatus = async (req, res) => {
  res.status(200).send(scrapperService.scrapStatus)
}

module.exports = { scrap, scrapSingle, reportScrapStatus, test }
