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
    const dom = new JSDOM(response.data)
    // var nodeList = dom.window.document.querySelector(
    //   'searchable-table-armor-sets'
    // )
    var table = dom.window.document.getElementById(
      'searchable-table-armor-sets'
    )
    const nodeList = [...table.querySelectorAll('tr')]
    console.log(nodeList)
    res.send(response.data)
  }
}

module.exports = { scrap, test }
