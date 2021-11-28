const express = require('express')
const TraitController = require('../controllers/TraitController')
const router = express.Router()

router.get('/', (req, res) => {
  res.send({ msg: 'controlador de trait' })
})

router.get('/query', TraitController.query)
router.get('/queryNombre', TraitController.queryNombre)
router.get('/list', TraitController.list)
router.get('/listsmall', TraitController.listSmall)

module.exports = router
