const express = require('express')
const scrapperController = require('../controllers/scrapperController')
const router = express.Router()

var options = {
  host: 'www.google.com',
}

router.get('/', (req, res) => {
  res.send({ msg: 'scrapper route test' })
})

router.get('/test', (req, res) => {
  res.send(scrapperController.test())
})

router.post('/scrap', scrapperController.scrap)

module.exports = router
