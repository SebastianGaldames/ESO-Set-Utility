const { Schema, model } = require('mongoose')

const glyphSchema = new Schema({
  Nombre: { type: String, required: true, unique: true }, //Ej: Glyph of health
  Para: { type: String, default: 'valor no asignado' }, //Ej: Armadura
  Efecto: { type: String, default: 'valor no asignado' }, //Ej: Adds [x] Max Health
})

module.exports = model('Glyph', glyphSchema)
