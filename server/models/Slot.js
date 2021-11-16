const { Schema, model } = require('mongoose')

const potenciaGlifoSchema = new Schema({
  nombre: { type: String, unique: true },
})

const slotSchema = new Schema({
  item: { type: Schema.ObjectId, ref: 'Item' },
  nivel: { type: Number, default: 50 },
  calidad: { type: String, default: 'dorada' },
  posicion: { type: String, required: true, default: 'valor no asignado' },
  glifo: { type: Schema.ObjectId, ref: 'Glifo' },
  potenciaGlifo: { type: potenciaGlifoSchema },
  trait: { type: Schema.ObjectId, ref: 'Trait' },
})

module.exports = model('Slot', slotSchema)
