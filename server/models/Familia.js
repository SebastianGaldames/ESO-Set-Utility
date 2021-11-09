const { Schema, model } = require('mongoose')


const bonoSchema = new Schema({
  texto: { type: String },
  cantidad: { type: Number },
  estadisticas: { type: [String] }
})

const familiaSchema = new Schema({
  nombre: { type: String, required: true },
  ubicacion: { type: [String], required: true },
  itemsFamilia: { type: [Schema.ObjectId], ref: 'Item'},
  bonos: {type: [bonoSchema], required: true }
})

module.exports = model('Familia', familiaSchema)
