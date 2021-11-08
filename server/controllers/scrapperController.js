const axios = require('axios')
// const cheerio = require('cheerio')
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
    const dom = new JSDOM(response.data)
    var table = dom.window.document.getElementById('searchable-table-sets')
    const nodeList = [...table.querySelectorAll('tr td:first-child a')] //gets all the set links
    const setListUrls = []
    nodeList.forEach((link) => setListUrls.push(link.href))
    console.log(setListUrls)
    res.send(response.data)
  }
}

module.exports = { scrap, test }
