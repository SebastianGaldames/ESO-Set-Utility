const jsdom = require('jsdom')
const { JSDOM } = jsdom

//move to ENV variables, change secret then
const secret = '4atmBrPlHQ'

// const url = 'http://localhost:9000/scrapper/test'
const url = 'https://eso-hub.com/en/sets/all'
// const url = 'https://eso-hub.com/en/sets'

function testService() {
  console.log(process.env)
  return 'hello im the scrapper service'
}

function auth(authSecret) {
  var ok = secret == authSecret
  console.log(ok)
  return ok
}

function scrapSetsTable(data) {
  const dom = new JSDOM(data)
  var table = dom.window.document.getElementById('searchable-table-sets')
  return scrapTableUrls(table)
}
//scraps all the urls for each set in the table sets
function scrapTableUrls(table) {
  const nodeList = [...table.querySelectorAll('tr td:first-child a')] //gets all the set links
  const setListUrls = []
  nodeList.forEach((link) => setListUrls.push(link.href))
  return setListUrls
}

module.exports = { testService, auth, url, scrapTableUrls, scrapSetsTable }
