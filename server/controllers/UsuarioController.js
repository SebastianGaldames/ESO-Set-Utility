const models = require('../models')
const token = require('../services/token')
const bcrypt = require('bcryptjs')

//Metodo para crear un usuario (registro)
const add = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10)
    const answerList = req.body.securityAnswerList
    answerList[0] = await bcrypt.hash(answerList[0], 10)
    answerList[1] = await bcrypt.hash(answerList[1], 10)
    answerList[2] = await bcrypt.hash(answerList[2], 10)
    req.body.securityAnswerList = answerList
    const reg = await models.Usuario.create(req.body)
    res.status(200).json(reg)
  } catch (e) {
    res.status(500).send({
      message: 'Ocurrio un error',
    })
    next(e)
  }
}
//Metodo para obtener un usuario mediante _id
const query = async (req, res, next) => {
  try {
    const reg = await models.Usuario.findOne({ _id: req.query._id })
    if (!reg) {
      res.status(404).send({
        message: 'El registro no existe',
      })
    } else {
      res.status(200).json(reg)
    }
  } catch (e) {
    res.status(500).send({
      message: 'Ocurrio un error',
    })
    next(e)
  }
}

//Metodo para obtener un usuario mediante nombre
const queryNombre = async (req, res, next) => {
  try {
    const reg = await models.Usuario.findOne({ usuario: req.query.usuario })
    // console.log('req: ' + req.query)
    if (!reg) {
      res.status(404).send({
        message: 'El registro no existe',
      })
    } else {
      res.status(200).json(reg)
    }
  } catch (e) {
    res.status(500).send({
      message: 'Ocurrio un error',
    })
    next(e)
  }
}

const update = async (req, res, next) => {
  try {
    if(req.body.securityAnswerList){
      const reg0 = await models.Usuario.findOne({ _id: req.body._id })
    
    const answerList = req.body.securityAnswerList
    if (!(await bcrypt.compare(answerList[0], reg0.securityAnswerList[0])) && answerList[0]!=='') {
      console.log('entrexd1')
      answerList[0] = await bcrypt.hash(answerList[0], 10)
      req.body.securityAnswerList[0] = answerList[0]
    } else {
      req.body.securityAnswerList[0] = reg0.securityAnswerList[0]
    }
    if (!(await bcrypt.compare(answerList[1], reg0.securityAnswerList[1])) && answerList[1]!=='') {
      console.log('entrexd2')
      answerList[1] = await bcrypt.hash(answerList[1], 10)
      req.body.securityAnswerList[1] = answerList[1]
    } else {
      req.body.securityAnswerList[1] = reg0.securityAnswerList[1]
    }
    if (!(await bcrypt.compare(answerList[2], reg0.securityAnswerList[2])) && answerList[2]!=='') {
      console.log('entrexd3')
      answerList[2] = await bcrypt.hash(answerList[2], 10)
      req.body.securityAnswerList[2] = answerList[2]
    } else {
      req.body.securityAnswerList[2] = reg0.securityAnswerList[2]
    }
    }
    

    const reg = await models.Usuario.findByIdAndUpdate(
      { _id: req.body._id },
      {
        usuario: req.body.usuario,
        email: req.body.email,
        pais: req.body.pais,
        securityAnswerList: req.body.securityAnswerList,
      }
    )
    res.status(200).json(reg)
  } catch (e) {
    res.status(500).send({
      message: 'Ocurrio un error',
    })
    next(e)
  }
}
const updatePassword = async (req, res, next) => {
  try {
    console.log(req.body)
    //const reg0 = await models.Usuario.findOne({ _id: req.body._id })
    const encryptedPassword = await bcrypt.hash(req.body.password, 10)
    const reg = await models.Usuario.findByIdAndUpdate(
      { _id: req.body._id },
      { password: encryptedPassword }
    )
    res.status(200).json(reg)
  } catch (e) {
    res.status(500).send({
      message: 'Ocurrio un error',
    })
    next(e)
  }
}
//Metodo para listar a todos los usuarios registrados
const list = async (req, res, next) => {
  try {
    const reg = await models.Usuario.find({})
    res.status(200).json(reg)
  } catch (e) {
    res.status(500).send({
      message: 'Ocurrio un error',
    })
    next(e)
  }
}
//Metodo login que busca por nombreUsuario y compara la contraseña encriptada de la BD
const login = async (req, res, next) => {
  try {
    let user = await models.Usuario.findOne({ usuario: req.body.nombreUsuario })
    if (user) {
      //existe un usuario con ese nombre de usuario
      let coincidencia = await bcrypt.compare(req.body.password, user.password) //comparamos si son iguales las contraseñas
      if (coincidencia) {
        let tokenReturn = await token.encode(user._id, user.usuario)
        res.status(200).json({ user, tokenReturn })
      } else {
        res.status(404).send({
          message: 'password incorrecta',
        })
      }
    } else {
      res.status(404).send({
        message: 'No existe este usuario',
      })
    }
  } catch (e) {
    res.status(500).send({
      message: 'Ocurrio un error',
    })
    next(e)
  }
}

const answers = async (req, res, next) => {
  try {
    let user = await models.Usuario.findOne({ usuario: req.body.nombreUsuario })
    if (user) {
      let match1 = await bcrypt.compare(
        req.body.securityAnswer1,
        user.securityAnswerList[0]
      )
      let match2 = await bcrypt.compare(
        req.body.securityAnswer2,
        user.securityAnswerList[1]
      )
      let match3 = await bcrypt.compare(
        req.body.securityAnswer2,
        user.securityAnswerList[2]
      )
      if (match1 && match2 && match3) {
        res.status(200).json({ match1 })
      } else {
        res.status(404).send({
          message: 'Respuestas incorrectas',
        })
      }
    }
  } catch (e) {
    res.status(500).send({
      message: 'Ocurrio un error',
    })
    next(e)
  }
}

//Metodo para crear un personaje y guardar su referencia en el usuario
const addPersonaje = async (req, res, next) => {
  try {
    const regUsr = await models.Usuario.findOne({ _id: req.body._id })
    // if (!regUsr) {
    //   res.status(404).send({
    //     message: 'No se pudo crear el personaje',
    //   })
    // }
    console.log(regUsr)

    pj = {
      nombre: req.body.nombre,
      slots: req.body.slots,
    }
    const regPj = await models.Personaje.create(pj)
    // if (!regPj) {
    //   res.status(404).send({
    //     message: 'No se pudo crear el personaje',
    //   })
    // }

    const newPersonajes = regUsr.personajes
    newPersonajes.push(regPj._id)

    const reg = await models.Usuario.findByIdAndUpdate(
      { _id: req.body._id },
      { personajes: newPersonajes }
    )
    if (!reg) {
      res.status(404).send({
        message: 'El registro no existe',
      })
    } else {
      res.status(200).json(reg)
    }
  } catch (e) {
    res.status(500).send({
      message: 'Ocurrio un error',
    })
    next(e)
  }
}

//Metodo para obtener el array de personajes al usuario
const getPersonajes = async (req, res, next) => {
  try {
    const reg = await models.Usuario.findOne({ _id: req.body._id })
    if (!reg) {
      res.status(404).send({
        message: 'El registro no existe',
      })
    } else {
      res.status(200).json(reg.personajes)
    }
  } catch (e) {
    res.status(500).send({
      message: 'Ocurrio un error',
    })
    next(e)
  }
}

//Metodo para actualizar el array de personajes al usuario
const actualizarPersonajes = async (req, res, next) => {
  try {
    const reg0 = await models.Usuario.findOne({ _id: req.body._id })
    const reg = await models.Usuario.findByIdAndUpdate(
      { _id: req.body._id },
      { personajes: req.body.personajes }
    )
    res.status(200).json(reg)
  } catch (e) {
    res.status(500).send({
      message: 'Ocurrio un error',
    })
    next(e)
  }
}
//Metodo para obtener el array del inventario de un usuario en especifico
const getInventario = async (req, res, next) => {
  try {
    const reg = await models.Usuario.findOne({ _id: req.body._id })
    if (!reg) {
      res.status(404).send({
        message: 'El registro no existe',
      })
    } else {
      res.status(200).json(reg.inventario)
    }
  } catch (e) {
    res.status(500).send({
      message: 'Ocurrio un error',
    })
    next(e)
  }
}

//Metodo para agregar items al inventario
const actualizarInventario = async (req, res, next) => {
  try {
    const reg = await models.Usuario.findByIdAndUpdate(
      { _id: req.body._id },
      { inventario: req.body.inventario }
    )
    res.status(200).json(reg)
  } catch (e) {
    res.status(500).send({
      message: 'Ocurrio un error',
    })
    next(e)
  }
}

module.exports = {
  add,
  query,
  queryNombre,
  update,
  list,
  login,
  getInventario,
  actualizarInventario,
  addPersonaje,
  getPersonajes,
  actualizarPersonajes,
  updatePassword,
  answers,
}
