/*
Module containing all the necesary methods to scrap the armor sets and item info
from eso-hub
*/

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

module.exports = { testService, auth, url }
