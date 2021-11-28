const { Schema, model } = require('mongoose')

const traitSchema = new Schema({
  nombre: { type: String, required: true, unique: true },
  tipo: { type: String, default: 'valor no asignado' },
  efectos: { type: [String], default: ['valor no asignado'] },
  calidades: { type: Object }, //Ej: {normal: [{type: 'health', value: '50'}, {type: 'stamina', value: '30'}], fine:...}
  calidades2h: { type: Object }, //Ej: {normal: [{type: 'health', value: '50'}, {type: 'stamina', value: '30'}], fine:...}
  imagen: { type: String, default: 'no asignado' },
})

module.exports = model('Trait', traitSchema)
