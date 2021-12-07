const express = require('express')
const mailController = require('../controllers/MailController')
const router = express.Router()

router.post('/post-mail', mailController.postMail)

module.exports = router
