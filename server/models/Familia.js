const { Schema, model } = require('mongoose')

const familiaSchema = new Schema({
  nombre: { type: String, required: true },
  ubicacion: { type: [String], required: true }
})

module.exports = model('Familia', familiaSchema)
