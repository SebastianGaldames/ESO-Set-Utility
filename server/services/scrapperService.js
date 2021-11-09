const axios = require('axios')
const jsdom = require('jsdom')
const { JSDOM } = jsdom

//move to ENV variables, change secret then
const secret = '4atmBrPlHQ'

const url = 'https://eso-hub.com/en/sets/all'
const testurl = 'https://eso-hub.com/en/sets/akaviri-dragonguard'

function testService() {
  console.log(process.env)
  return 'hello im the scrapper service'
}

function auth(authSecret) {
  var ok = secret == authSecret
  return ok
}

const scrapSet = async (setUrl) => {
  const html = await getHtmlFromSetUrl(testurl) // test url to save time
  const dom = new JSDOM(html)
  const set = dom.window.document.getElementById('content')
  // var div = set.getElementsByClassName('div')

  const div2 = set.querySelector('.col-md-8')
  const stronk = div2.querySelectorAll('strong')

  //console.log(setData.innerHTML)
  const setDataParsed = []
  const name = stronk[0].nextSibling.textContent.trim()
  const type = stronk[1].nextSibling.nextSibling.textContent.trim()
  setDataParsed.push(name)
  setDataParsed.push(type)
  // setDataParsed.push()
  //stronk.forEach((str) => setDataParsed.push(str.nextSibling.textContent))
  return setDataParsed
}

const getHtmlFromSetUrl = async (setUrl) => {
  console.log(setUrl)
  const response = await axios.get(setUrl)
  return response.data
}

//scraps the entire html table for the sets and returns and array
//with the Urls for every set
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

module.exports = {
  testService,
  auth,
  url,
  scrapTableUrls,
  scrapSetsTable,
  getHtmlFromSetUrl,
  scrapSet,
}
