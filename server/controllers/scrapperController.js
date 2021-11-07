const secret = 'fxuekQ67r6'

function test() {
  return 'hello im the scrapper'
}

function scrap(url, secret) {
  if (this.secret === secret) {
    return 'secret is valid'
  } else {
    return 'invalid secret'
  }
}
module.exports = { test, scrap }
