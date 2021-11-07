const axios = require('axios')
const secret = '4atmBrPlHQ'

function test() {
  return 'hello im the scrapper'
}

const scrap = async (req, res) => {
  const url = req.body.url
  const response = await axios.get(url)
  res.send(response.data)
}

module.exports = { scrap }
