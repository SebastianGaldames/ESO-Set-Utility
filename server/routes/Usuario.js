const express = require('express')
const UsuarioController = require('../controllers/UsuarioController')
const router = express.Router()

router.get('/', (req, res) => {
  res.send({ msg: 'controlador de usuario' })
})

router.post('/add', UsuarioController.add)
router.get('/query',UsuarioController.query)
router.get('/list',UsuarioController.list)
router.put('/update',UsuarioController.update)
router.post('/login',UsuarioController.login)

module.exports = router
