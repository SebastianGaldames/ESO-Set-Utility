const axios = require('axios')

const itemController = require('../controllers/ItemController')
const familiaController = require('../controllers/FamiliaController')

const addFamilyDeprecated = async (family) => {
  const allItemsNames = []
  const existingItemsNames = []
  const existingItemsData = []
  for (const item of family.items) {
    allItemsNames.push(item.name)
    const res = await axios
      .get(
        process.env.VUE_APP_SERVER_URL + '/item/queryNombre?nombre=' + item.name
      )
      .catch(function (err) {})
    if (res !== undefined) {
      existingItemsData.push(res.data)
      existingItemsNames.push(res.data.nombre)
    }
  }

  //console.log('existingItemsNames=' + existingItemsNames)
  const existingitemsSet = new Set(existingItemsNames)
  //console.log('set=' + [...existingitemsSet])
  const allItemsSet = new Set(allItemsNames)

  const newItemsNames = []
  allItemsSet.forEach((itemName) => {
    if (!existingitemsSet.has(itemName)) {
      newItemsNames.push(itemName)
    }
  })
  //console.log(newItemsNames)

  newItemsNames.forEach((newItemName) => {
    const target = family.items.find((ele) => ele.name === newItemName)
    //console.log(target)
    addItem(target)
  })

  for (const itemName of newItemsNames) {
    const res = await axios
      .get(
        process.env.VUE_APP_SERVER_URL + '/item/queryNombre?nombre=' + itemName
      )
      .catch(function (err) {})
    if (res !== undefined) {
      existingItemsData.push(res.data)
      existingItemsNames.push(res.data.nombre)
    }
  }

  var itemsId = []
  existingItemsData.forEach((data) => {
    itemsId.push(data._id)
  })

  const itemsIdSet = new Set(itemsId)
  const itemsRef = Array.from(itemsIdSet)
  //console.log(...itemsRef)

  try {
    const body = {
      nombre: family.name,
      ubicacion: family.location,
      bonos: [],
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
  var infoTipo = ''

  if (await isArmorWeight(typeTokens[0])) {
    tipo = 'Armadura'
    infoTipo = typeTokens.shift() //Heavy, Medium, Light
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
    infoTipo = typeTokens.join(' ') // Shield, Sword, Lightning Staff ...
  }

  const typeData = {
    tipo: tipo,
    categoria: categoria,
    infoTipo: infoTipo,
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

module.exports = {
  addFamily,
  addItem,
  filterNewItems,
  addItemRange,
  isArmorWeight,
  parseItemType,
}
