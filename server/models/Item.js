const { Schema, model } = require('mongoose')

const estadisticaSchema = new Schema({
  regenSalud: { type: Number },
  critArma: { type: Number },
  armadura: { type: Number },
  resHechizos: { type: Number },
  magickaMax: { type: Number },
  regMagicka: { type: Number },
  critHechizos: { type: Number },
  aguanteMax: { type: Number },
  regAguante: { type: Number },
  danioArma: { type: Number },
  danioHechizos: { type: Number },
  saludMax: { type: Number }
})

const itemSchema = new Schema({
  nombre: { type: String, required: true },
  estadistica: { type: estadisticaSchema, required: false },
  efecto: { type: [String], required: false },
  categoria: { type: String, required: true },
  peso: { type: String, required: true },
  nivel: { type: Number, default: 50 },
  calidad: { type: String, default: "dorada" },
  familia: { type: Schema.ObjectId, ref: 'Familia', required: true },
  imagen: { type: String} 
})

module.exports = model('Item', itemSchema)
