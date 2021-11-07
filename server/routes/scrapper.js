const express = require('express')
const scrapperController = require('../controllers/scrapperController')
const router = express.Router()

router.get('/', (req, res) => {
  res.send({ msg: 'scrapper route test' })
})

router.get('/test', (req, res) => {
  res.send(scrapperController.test())
})

router.get('/test', (req, res) => {
  res.send(scrapperController.test())
})

module.exports = router
