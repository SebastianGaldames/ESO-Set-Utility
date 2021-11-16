const axios = require('axios')

const itemController = require('../controllers/ItemController')
const familiaController = require('../controllers/FamiliaController')

// Agrega una familia a la base de datos. Asume que sus items ya existen.
const addFamily = async (family, items) => {
  // Se obtiene la id de los items desde la base de datos
  const itemsId = []
  for (const item of items) {
    const res = await axios
      .get(
        process.env.VUE_APP_SERVER_URL + '/item/queryNombre?nombre=' + item.name
      )
      .catch(function (err) {
        //console.log(err)
      })
    if (res !== undefined) {
      itemsId.push(res.data._id)
    }
  }

  // Se construye un set para evitar repeticiones de items
  const itemsIdSet = new Set(itemsId)
  const itemsRef = Array.from(itemsIdSet)

  // Se añade la familia a la base de datos
  try {
    const body = {
      nombre: family.name,
      ubicacion: family.location,
      bonos: [],
      imagen: family.imageUrl,
      itemsFamilia: itemsRef,
    }
    family.setBonus.forEach((bonusTier) => {
      const bono = {
        texto: bonusTier.bonus,
        cantidad: Number(bonusTier.number),
      }
      body.bonos.push(bono)
    })

    const res = await axios.post(
      process.env.VUE_APP_SERVER_URL + '/familia/add',
      body
    )
  } catch {}
}

// Añade un item a la base de datos. Asume que no existe un duplicado
const addItem = async (item) => {
  try {
    const body = {
      nombre: item.name,
      imagen: item.img,
      tipo: item.type,
    }
    const res = await axios.post(
      process.env.VUE_APP_SERVER_URL + '/item/add',
      body
    )
  } catch {}
}

// De una lista de items, retorna aquellos que no están en la base de datos
const filterNewItems = async (items) => {
  const newItemsNames = []
  // Se intenta buscar cada item en la base de datos
  for (const item of items) {
    const res = await axios
      .get(
        process.env.VUE_APP_SERVER_URL + '/item/queryNombre?nombre=' + item.name
      )
      .catch(function (err) {
        //console.log(err)
      })
    // Si la respuesta es undefined, significa que no está en la base de datos
    if (res === undefined) {
      newItemsNames.push(item.name)
    }
  }

  const noRepetition = []
  newItemsNamesSet = new Set(newItemsNames)
  newItemsNamesSet.forEach((itemName) => {
    const found = items.find((element) => element.name === itemName)
    noRepetition.push(found)
  })

  return noRepetition
}

const addItemRange = async (items) => {
  for (const item of items) {
    addItem(item)
  }
}

const parseItemType = async (itemType) => {
  console.log('parseItemType running')
  var typeTokens = itemType.split(' ')
  var tipo = ''
  var categoria = ''
  var peso = ''
  var tipoArma = ''

  if (await isArmorWeight(typeTokens[0])) {
    tipo = 'Armadura'
    peso = typeTokens.shift() //Heavy, Medium, Light
    categoria = typeTokens.join(' ') //Head, Shoulders, etc...
  } else {
    tipo = 'Arma'
    if (typeTokens[0] === 'Off') {
      categoria = typeTokens[0] + ' ' + typeTokens[1] //Off Hand
      typeTokens.shift()
      typeTokens.shift()
    } else {
      categoria = typeTokens.shift() //One-handed, Two-handed, ...
    }
    tipoArma = typeTokens.join(' ') // Shield, Sword, Lightning Staff ...
  }

  const typeData = {
    tipo: tipo,
    categoria: categoria,
    peso: peso,
    tipoArma: tipoArma,
  }

  return typeData
}

const isArmorWeight = async (string) => {
  if (string === 'Heavy' || string === 'Medium' || string === 'Light') {
    return true
  } else {
    return false
  }
}

const testAddProperty = async () => {
  const name = 'Breton Helm 3'
  const res1 = await axios
    .get(process.env.VUE_APP_SERVER_URL + '/item/queryNombre?nombre=' + name)
    .catch(function (err) {
      //console.log(err)
    })

  const typeData = await parseItemType(res1.data.tipo)

  try {
    const body = {
      _id: res1.data._id,
      nombre: res1.data.nombre,
      tipo: res1.data.tipo,
      //categoria: typeData.categoria,
      //infoTipo: typeData.infoTipo,
      nivel: res1.data.nivel,
      calidad: res1.data.calidad,
      imagen: res1.data.imagen,
    }
    const res2 = await axios.post(
      process.env.VUE_APP_SERVER_URL + '/item/update',
      body
    )
  } catch (err) {
    console.log(err.message)
  }
  const res3 = await axios
    .get(process.env.VUE_APP_SERVER_URL + '/item/queryNombre?nombre=' + name)
    .catch(function (err) {
      //console.log(err)
    })
  console.log(res3.data)
}

const sandbox = async () => {
  item = {
    name: 'itemDefaultTest',
    type: '',
    img: 'https://static.wikia.nocookie.net/espokemon/images/d/da/Caramelo_raro_%28Dream_World%29.png/revision/latest/scale-to-width-down/90?cb=20110130120819',
  }
  addItem(item)
}

module.exports = {
  addFamily,
  addItem,
  filterNewItems,
  addItemRange,
  isArmorWeight,
  parseItemType,
  testAddProperty,
  sandbox,
}
