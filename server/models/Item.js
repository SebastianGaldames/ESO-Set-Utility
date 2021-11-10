const { Schema, model } = require('mongoose')

//No se usa, borrado pendiente por confirmacion del profe
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
  nombre: { type: String, required: true , unique: true}, 
  //estadistica: { type: estadisticaSchema, required: false }, 
  //efecto: { type: [String], required: false },
  //categoria: { type: String, required: false },
  tipo: { type: String, default: "valor no asignado"},
  nivel: { type: Number, default: 50 },
  calidad: { type: String, default: "dorada" },
  imagen: { type: String, required: true} 
})

module.exports = model('Item', itemSchema)
