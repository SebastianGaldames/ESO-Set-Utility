const express = require('express')
const scrapperController = require('../controllers/scrapperController')
const router = express.Router()

router.get('/', (req, res) => {
  res.send({ msg: 'scrapper route test' })
})

router.get('/test', scrapperController.test)

router.post('/scrap', scrapperController.scrap)

router.post('/scrap-single', scrapperController.scrapSingle)

module.exports = router
