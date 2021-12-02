const express = require('express')
const parsingController = require('../controllers/ParsingController')
const router = express.Router()

router.get('/parseTest', parsingController.test)

module.exports = router