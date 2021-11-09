const { Schema, model } = require('mongoose')

const usuarioSchema = new Schema({
  usuario: {type: String,minlength: 8,maxlength: 25,unique: true,required: true},
  email: {type: String,minlength: 8,maxlength: 320,unique: true,required: true},
  pais: { type: String, maxlength: 50, required: true },
  password: { type: String, minlength: 8, required: true },
  sexo: { type: String, required: true },
  personajes: { type: [Schema.ObjectId], ref: 'Personaje' },
  inventario: {type: [Schema.ObjectId], ref: 'Item' },
  rol: {type: String, unique: true, required: true}
})

module.exports = model('Usuario', usuarioSchema)