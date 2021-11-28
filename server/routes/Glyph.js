const express = require('express')
const GlyphController = require('../controllers/GlyphController')
const router = express.Router()

router.get('/', (req, res) => {
  res.send({ msg: 'controlador de glyph' })
})

router.get('/list', GlyphController.list)
router.get('/listSmall', GlyphController.listSmall)
router.get('/query', GlyphController.query)
router.get('/querypotencia', GlyphController.queryPotencia)

module.exports = router
