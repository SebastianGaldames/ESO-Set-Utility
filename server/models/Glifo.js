const { Schema, model } = require('mongoose')

const potenciaSchema = new Schema({
  nombre: { type: String }, //Ej: Trifling Glyph of Health
  tipo: { type: String }, //Ej: Trifling
  calidades: { type: Object }, //Ej: {normal: [{type: 'health', value: '50'}, {type: 'stamina', value: '30'}], fine:...}
})

const glifoSchema = new Schema({
  nombre: { type: String, required: true, unique: true }, //Ej: Glyph of health
  tipo: { type: String, default: 'valor no asignado' }, //Ej: Armadura
  efectoDescripcion: { type: String, default: 'valor no asignado' }, //Ej: Adds [x] Max Health
  potencias: { type: [potenciaSchema] },
  imagen: { type: String, default: 'no-asignado' },
})

module.exports = model('Glifo', glifoSchema)
