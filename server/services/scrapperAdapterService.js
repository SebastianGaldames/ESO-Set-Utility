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

module.exports = {
  addFamily,
  addItem,
  filterNewItems,
  addItemRange,
}
