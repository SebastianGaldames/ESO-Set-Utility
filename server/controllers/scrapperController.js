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
    // const $ = cheerio.load(response.data)
    // var list = $('#searchable-table-sets')
    //console.dir(list)
    const dom = new JSDOM(response.data)
    var table = dom.window.document.getElementById('searchable-table-sets')
    const nodeList = [...table.querySelectorAll('tr td a')] //gets all the set links
    nodeList.forEach((link) => console.log(link.href))
    res.send(response.data)
  }
}

module.exports = { scrap, test }
