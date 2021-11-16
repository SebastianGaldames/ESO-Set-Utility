const express = require('express')
const TraitController = require('../controllers/TraitController')
const router = express.Router()

router.get('/', (req, res) => {
  res.send({ msg: 'controlador de trait' })
})

router.get('/list', TraitController.list)

module.exports = router
