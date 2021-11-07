const express = require('express')
const scrapperController = require('../controllers/scrapperController')
const router = express.Router()
// const app = express()
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
const secret = 'fxuekQ67r6'

router.get('/', (req, res) => {
  res.send({ msg: 'scrapper route test' })
})

router.get('/test', (req, res) => {
  res.send(scrapperController.test())
})

router.post('/scrap', (req, res) => {
  res.send({
    content: scrapperController.scrap('asd', this.secret),
    request: req.body,
  })
})

module.exports = router
