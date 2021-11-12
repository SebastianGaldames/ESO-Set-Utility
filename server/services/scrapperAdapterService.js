const axios = require('axios')

const itemController = require('../controllers/ItemController')
const familiaController = require('../controllers/FamiliaController')

const addFamily = async (family) => {
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
    const bonoSet={
      texto = family.setBonus.bonus,
      cantidad = Number(family.setBonus.number)
    }
    const body = {
      nombre: family.name,
      ubicacion: family.location,
      bonos: bonoSet,
      itemsFamilia: itemsRef,
    }
    const res = await axios.post(
      process.env.VUE_APP_SERVER_URL + '/familia/add',
      body
    )
  } catch {}
}

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

module.exports = {
  addFamily,
  addItem,
}
