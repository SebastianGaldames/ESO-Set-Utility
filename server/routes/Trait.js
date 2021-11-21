const express = require('express')
const TraitController = require('../controllers/TraitController')
const router = express.Router()

router.get('/', (req, res) => {
  res.send({ msg: 'controlador de trait' })
})

router.post('/add', TraitController.add)
router.get('/query', TraitController.query)
router.get('/queryNombre', TraitController.queryNombre)
router.get('/list', TraitController.list)
router.put('/update', TraitController.update)
router.delete('/remove/:id', TraitController.remove)

module.exports = router
