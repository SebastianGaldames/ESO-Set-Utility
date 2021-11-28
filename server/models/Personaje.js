const { Schema, model } = require('mongoose')

const slotSchema = new Schema({
  item: { type: Schema.ObjectId, ref: 'Item' },
  familia: { type: Schema.ObjectId, ref: 'Familia' },
  nivel: { type: Number, default: 50 },
  calidad: { type: String, default: 'dorada' },
  posicion: { type: String, required: true, default: 'valor no asignado' },
  glyph: { type: Schema.ObjectId, ref: 'Glyph' },
  potenciaGlyph: { type: String },
  calidadGlyph: { type: String },
  trait: { type: Schema.ObjectId, ref: 'Trait' },
})

const personajeSchema = new Schema({
  nombre: { type: String, required: true },
  slots: { type: [slotSchema] },
})

module.exports = model('Personaje', personajeSchema)
