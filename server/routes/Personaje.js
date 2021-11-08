const express = require('express')
const PersonajeController = require('../controllers/PersonajeController')
const router = express.Router()

router.get('/', (req, res) => {
  res.send({ msg: 'controlador de personaje' })
})

router.post('/add', PersonajeController.add)
router.get('/query',PersonajeController.query)
router.get('/list',PersonajeController.list)
router.put('/update',PersonajeController.update)
router.delete('/remove/:id',PersonajeController.remove)
router.get('/getItems',PersonajeController.getItems)
router.put('/actualizarItems',PersonajeController.actualizarItems)

module.exports = router
