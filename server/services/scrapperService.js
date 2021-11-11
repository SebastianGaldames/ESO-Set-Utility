const axios = require('axios')
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const scrapperAdapter = require('../services/scrapperAdapterService')

//move to ENV variables, change secret then
const secret = 'hola'
const testUrls = [
  'https://eso-hub.com/en/sets/dreugh-king-slayer',
  'https://eso-hub.com/en/sets/armor-of-the-code',
]
const url = 'https://eso-hub.com/en/sets/all'
const testurl = testUrls[0]
function testService() {
  console.log(process.env)
  return 'hello im the scrapper service'
}

function auth(authSecret) {
  var ok = secret == authSecret
  return ok
}

const scrapAllSets = async (setUrls) => {
  const allSets = []
  var i = 0
  for (const url of setUrls) {
    const contents = await scrapSet(url)
    allSets.push(contents)
    console.log('scrapping: ' + i)
    //test
    //if (i % 10 === 0) {
    //  console.log(allSets[i])
    //}
    i += 1
  }

  return { message: 'Agregados ' + i + ' familias' }
}

const scrapSet = async (setUrl) => {
  const html = await getHtmlFromSetUrl(setUrl) // test url to save time
  const dom = new JSDOM(html)
  const set = dom.window.document.getElementById('content')
  // set metadata
  const dataItemsPanel = set.querySelector('.col-md-8')
  const stronk = dataItemsPanel.querySelectorAll('strong')
  //set bonus
  const setBonusPanel = set.querySelector('.set-tooltip-center')
  const setBonusSpan = setBonusPanel.querySelector('span')

  const setBonus = scrapSetBonus(setBonusSpan)
  //console.log(setBonusSpan.textContent)
  var setData = scrapSetMeta(stronk, set)
  setData.setBonus = setBonus //add the scrapped bonus
  //scrap image
  const imgURL = setBonusPanel.querySelector('picture img')
  setData.imageUrl = 'https://eso-hub.com' + imgURL.getAttribute('src')

  const itemsScrapped = getItemsFromSet(dataItemsPanel)
  setData.items = itemsScrapped
  scrapperAdapter.addFamily(setData)
  return setData
}

const getHtmlFromSetUrl = async (setUrl) => {
  const response = await axios.get(setUrl)
  return response.data
}

function getItemsFromSet(setDomData) {
  const linksScrapped = [
    ...setDomData.querySelectorAll(
      'a[href*="https://eso-hub.com/en/fashion-outfits"]'
    ),
  ]
  const links = []
  linksScrapped.forEach((linkNode) => {
    const itemName = linkNode.querySelector('picture img').getAttribute('title')
    const itemImg = linkNode
      .querySelector('picture source[type*="image/png"]')
      .getAttribute('srcset')
    const item = {
      name: itemName,
      img: 'https://eso-hub.com' + itemImg,
      url: linkNode.href,
    }
    links.push(item)
    //links.push(linkNode.getAttribute('title'))
  })
  return links
}

function scrapSetMeta(data, set) {
  const scrapped = {
    name: '',
    type: '',
    imageUrl: '',
    location: [],
    setBonus: [],
    items: [],
  }
  data.forEach((str) => {
    if (str.textContent.includes('Name')) {
      scrapped.name = str.nextSibling.textContent.trim()
    }
    if (str.textContent.includes('Type')) {
      scrapped.type = str.nextSibling.nextSibling.textContent.trim()
    }
    if (str.textContent === 'Location:') {
      const locationSelection = set.querySelector('ul') //first list
      const elements = locationSelection.getElementsByTagName('li')
      for (var i = 0; i < elements.length; i++) {
        scrapped.location.push(elements[i].textContent.trim())
      }
    }
  })

  return scrapped
}

function scrapSetBonus(setBonusSpan) {
  const txt = setBonusSpan.textContent.trim()

  const spl = txt.split('(')
  const setBonusAmountScrapped = [...setBonusSpan.querySelectorAll('strong')]
  const setBonus = []
  setBonusAmountScrapped.forEach((numNode, index) => {
    //console.log(numNode.textContent)
    const nbr = numNode.textContent
    const bonus = {
      number: nbr[1],
      bonus: '(' + spl[index + 1],
    }
    setBonus.push(bonus)
  })
  return setBonus
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
  scrapAllSets,
}
