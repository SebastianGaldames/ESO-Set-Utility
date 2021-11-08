const { Schema, model } = require('mongoose')

const personajeSchema = new Schema({
  nombre: { type: String, required: true },
  items: { type: [Schema.ObjectId], ref: 'Item'}
})

module.exports = model('Personaje', personajeSchema)
