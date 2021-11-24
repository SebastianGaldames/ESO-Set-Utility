const express = require('express')
const FamiliaController = require('../controllers/FamiliaController')
const router = express.Router()

router.get('/', (req, res) => {
  res.send({ msg: 'controlador de item' })
})

router.post('/add', FamiliaController.add)
router.get('/query', FamiliaController.query)
router.get('/queryNombre', FamiliaController.queryNombre)
router.get('/queryHash', FamiliaController.queryHash)
router.get('/list', FamiliaController.list)
router.put('/update', FamiliaController.update)
router.delete('/remove/:id', FamiliaController.remove)
router.get('/getItems', FamiliaController.getItems)
router.put('/addItemFamilia', FamiliaController.addItemFamilia)

module.exports = router
