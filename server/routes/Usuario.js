const express = require('express')
const UsuarioController = require('../controllers/UsuarioController')
const router = express.Router()

router.get('/', (req, res) => {
  res.send({ msg: 'controlador de usuario' })
})

router.post('/add', UsuarioController.add)
router.get('/query', UsuarioController.query)
router.get('/querynombre', UsuarioController.queryNombre)
router.get('/list', UsuarioController.list)
router.put('/update', UsuarioController.update)
router.put('/updatePassword', UsuarioController.updatePassword)
router.post('/login', UsuarioController.login)
router.post('/answers', UsuarioController.answers)
router.get('/getInventario', UsuarioController.getInventario)
router.put('/actualizarInventario', UsuarioController.actualizarInventario)
router.post('/addPersonaje', UsuarioController.addPersonaje)
router.get('/getPersonajes', UsuarioController.getPersonajes)
router.put('/actualizarPersonajes', UsuarioController.actualizarPersonajes)

module.exports = router
