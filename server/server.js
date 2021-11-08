// Importing required modules
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
// parse env variables
require('dotenv').config()

//Conexion MongoDB

mongoose.Promise=global.Promise;
mongoose.connect('mongodb+srv://admin:esosetutility@eso-set-utility.bubka.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-59b7z4-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true')
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));



// Configuring port
const port = process.env.PORT || 9000

const app = express()

// Configure middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'html')

// Static folder
app.use(express.static(__dirname + '/views/'))

// Defining route middleware
app.use('/api', require('./routes/api'))
app.use('/scrapper', require('./routes/scrapper'))

// Listening to port
app.listen(port)
console.log(`Listening On http://localhost:${port}/api`)

module.exports = app
