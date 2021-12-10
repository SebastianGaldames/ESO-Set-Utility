// Importing required modules
const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
// parse env variables
require('dotenv').config()

//Conexion MongoDB

mongoose.Promise = global.Promise
mongoose
  .connect(process.env.MONGODB_URL)
  .then((db) => console.log('DB is connected'))
  .catch((err) => console.error(err))

// Configuring port
const port = process.env.PORT || 9000

const app = express()

// Configure middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'html')

// Static folder
app.use(express.static(__dirname + '/views/'))

// Defining route middleware
app.use('/api', require('./routes/api'))
app.use('/scrapper', require('./routes/scrapper'))
app.use('/Usuario', require('./routes/Usuario'))
app.use('/Personaje', require('./routes/Personaje'))
app.use('/Item', require('./routes/Item'))
app.use('/Familia', require('./routes/Familia'))
app.use('/Glyph', require('./routes/Glyph'))
app.use('/Trait', require('./routes/Trait'))
app.use('/Parsing', require('./routes/Parsing'))
app.use('/Mail', require('./routes/Mail'))

// Listening to port
app.listen(port)
console.log(`Listening On http://localhost:${port}/api`)

module.exports = app
