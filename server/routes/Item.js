const express = require('express')
const ItemController = require('../controllers/ItemController')
const router = express.Router()

router.get('/', (req, res) => {
  res.send({ msg: 'controlador de item' })
})

router.post('/add', ItemController.add)
router.get('/query',ItemController.query)
router.get('/list',ItemController.list)
router.put('/update',ItemController.update)
router.delete('/remove/:id',ItemController.remove)

module.exports = router