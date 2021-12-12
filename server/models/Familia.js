const { Schema, model } = require('mongoose')

const bonoSchema = new Schema({
  texto: { type: String },
  cantidad: { type: Number },
  estadisticas: { type: [Object] },
})

const familiaSchema = new Schema({
  nombre: { type: String, unique: true, required: true },
  tipo: { type: String },
  estilo: { type: String },
  pesos: { type: [String] },
  dlc: { type: String },
  ubicacion: { type: [String], required: true },
  itemsFamilia: { type: [Schema.ObjectId], ref: 'Item' },
  bonos: { type: [bonoSchema], required: true },
  imagen: { type: String, default: 'no-asignado' },
})

module.exports = model('Familia', familiaSchema)
