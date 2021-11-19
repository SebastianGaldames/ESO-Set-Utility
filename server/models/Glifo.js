const { Schema, model } = require('mongoose')

const potenciaSchema = new Schema({
  nombre: { type: String, required: true, unique: true }, //Ej: Trifling Glyph of Health
  potencia: { type: String }, //Ej: Trifling
  calidades: { type: Object }, //Ej: {normal: [{type: 'health', value: '50'}, {type: 'stamina', value: '30'}], fine:...}
  receta: { type: String },
})

const glifoSchema = new Schema({
  nombre: { type: String, required: true, unique: true }, //Ej: Glyph of health
  tipo: { type: String, default: 'valor no asignado' }, //Ej: Armor
  efectoDescripcion: { type: String, default: 'valor no asignado' }, //Ej: Adds [x] Max Health
  potencias: { type: [potenciaSchema] },
  imagen: { type: String, default: 'no-asignado' },
})

module.exports = model('Glifo', glifoSchema)
