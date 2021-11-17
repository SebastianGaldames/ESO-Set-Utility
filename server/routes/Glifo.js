const express = require('express')
const GlifoController = require('../controllers/GlifoController')
const router = express.Router()

router.get('/', (req, res) => {
  res.send({ msg: 'controlador de glifo' })
})

router.post('/add', GlifoController.add)
router.get('/query', GlifoController.query)
router.get('/queryNombre', GlifoController.queryNombre)
router.get('/list', GlifoController.list)
router.put('/update', GlifoController.update)
router.delete('/remove/:id', GlifoController.remove)

module.exports = router
