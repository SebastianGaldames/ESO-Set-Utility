const axios = require('axios')

const parsingService = require('../services/parsingService')

// Agrega una familia a la base de datos. Asume que sus items ya existen.
const addFamily = async (family, items) => {
  // Se obtiene la id de los items desde la base de datos
  const itemsId = []
  var pesosFamilia = []
  for (const item of items) {
    const res = await axios
      .get(
        process.env.VUE_APP_SERVER_URL + '/item/queryNombre?nombre=' + item.name
      )
      .catch(function (err) {
        //console.log(err)
      })
    if (res !== undefined) {
      var jsonItem = JSON.parse(JSON.stringify(res.data))
      pesosFamilia.push(jsonItem.peso)
      itemsId.push(res.data._id)
    }
  }

  var setPesos = new Set(pesosFamilia)
  pesosFamilia = Array.from(setPesos)

  for (const index in pesosFamilia) {
    if (pesosFamilia[index] === '') {
      pesosFamilia.splice(index, 1)
      break
    }
  }

  // Se construye un set para evitar repeticiones de items
  const itemsIdSet = new Set(itemsId)
  const itemsRef = Array.from(itemsIdSet)

  // Se verifica si la familia ya existe en la base de datos
  const resFamily = await axios
    .get(
      process.env.VUE_APP_SERVER_URL +
        '/familia/queryNombre?nombre=' +
        family.name
    )
    .catch(function (err) {
      //console.log(err)
    })
  if (resFamily === undefined) {
    // Si no existe, se añade la familia a la base de datos
    try {
      const body = {
        nombre: family.name,
        tipo: family.type,
        estilo: family.style,
        dlc: family.dlcRequirement,
        ubicacion: family.location,
        bonos: [],
        imagen: family.imageUrl,
        itemsFamilia: itemsRef,
        pesos: pesosFamilia,
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
  } else {
    // Si existe, se actualizan los datos de la familia
    try {
      const updateBody = {
        _id: resFamily.data._id,
        tipo: family.type,
        estilo: family.style,
        dlc: family.dlcRequirement,
        ubicacion: family.location,
        bonos: [],
        imagen: family.imageUrl,
        itemsFamilia: itemsRef,
        pesos: pesosFamilia,
      }
      family.setBonus.forEach((bonusTier) => {
        const bono = {
          texto: bonusTier.bonus,
          cantidad: Number(bonusTier.number),
        }
        updateBody.bonos.push(bono)
      })
      const res = await axios.put(
        process.env.VUE_APP_SERVER_URL + '/familia/update',
        updateBody
      )
    } catch {}
  }
}

// Añade un item a la base de datos. Asume que no existe un duplicado
const addItem = async (item) => {
  try {
    const typeData = await parseItemType(item.type)

    const body = {
      nombre: item.name,
      imagen: item.img,
      tipo: typeData.tipo,
      categoria: typeData.categoria,
      peso: typeData.peso,
      tipoArma: typeData.tipoArma,
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

const addFamilyWeights = async () => {
  const res = await axios
    .get(process.env.VUE_APP_SERVER_URL + '/familia/list')
    .catch(function (err) {
      //console.log(err)
    })

  var jsonReg = JSON.parse(JSON.stringify(res.data))

  for (const familia of jsonReg) {
    var pesosFamilia = []

    for (const itemId of familia.itemsFamilia) {
      const resItem = await axios
        .get(process.env.VUE_APP_SERVER_URL + '/item/query?_id=' + itemId)
        .catch(function (err) {
          //console.log(err)
        })
      var jsonItem = JSON.parse(JSON.stringify(resItem.data))
      pesosFamilia.push(jsonItem.peso)
    }

    var setPesos = new Set(pesosFamilia)
    pesosFamilia = Array.from(setPesos)

    for (const index in pesosFamilia) {
      if (pesosFamilia[index] === '') {
        pesosFamilia.splice(index, 1)
        break
      }
    }

    const weights = {
      _id: familia._id,
      pesos: pesosFamilia,
    }

    const resItem = await axios
      .put(process.env.VUE_APP_SERVER_URL + '/familia/update', weights)
      .catch(function (err) {
        //console.log(err)
      })
  }
}

const apendItems = async (info) => {
  const res = await axios
    .get(
      process.env.VUE_APP_SERVER_URL +
        '/familia/queryNombre?nombre=' +
        info.setName
    )
    .catch(function (err) {
      //console.log(err)
    })

  //console.log(res.data)
  var newItems = res.data.itemsFamilia
  console.log(newItems.length)
  for (const itemId of info.items) {
    newItems.push(itemId)
  }
  console.log(newItems.length)

  updateItems = {
    _id: res.data._id,
    itemsFamilia: newItems,
  }
  const resItem = await axios
    .put(
      process.env.VUE_APP_SERVER_URL + '/familia/addItemFamilia',
      updateItems
    )
    .catch(function (err) {
      //console.log(err)
    })
}

const addFamilyBonusStats = async () => {
  const res = await axios
    .get(process.env.VUE_APP_SERVER_URL + '/familia/list')
    .catch(function (err) {
      //console.log(err)
    })

  const familias = res.data

  for (const familia of familias) {
    console.log(familia.nombre)
    const newBonos = []
    for (const bono of familia.bonos) {
      console.log(bono.texto)
      const stats = await parsingService.parseSetBonusLine(bono.texto)
      console.log(stats.stats)
      const newBono = {
        _id: bono._id,
        texto: bono.texto,
        cantidad: bono.cantidad,
        estadisticas: stats.stats,
      }
      newBonos.push(newBono)
      //var jsonItem = JSON.parse(JSON.stringify(resItem.data))
      //console.log(JSON.parse(JSON.stringify(stats)))
    }

    const bonosUpdate = {
      _id: familia._id,
      bonos: newBonos,
    }

    const resUpdate = await axios
      .put(process.env.VUE_APP_SERVER_URL + '/familia/update', bonosUpdate)
      .catch(function (err) {
        //console.log(err)
      })
  }
}

const addItemsArmor = async () => {
  const armorValues = {
    heavy: {
      chest: 2772,
      headShoulderLegsFeet: 2425,
      hands: 1386,
      waist: 1039,
    },
    medium: {
      chest: 2084,
      headShoulderLegsFeet: 1823,
      hands: 1042,
      waist: 781,
    },
    light: {
      chest: 1396,
      headShoulderLegsFeet: 1221,
      hands: 698,
      waist: 523,
    },
  }

  const res = await axios
    .get(process.env.VUE_APP_SERVER_URL + '/item/list')
    .catch(function (err) {
      //console.log(err)
    })

  const items = res.data

  console.log(items.length)

  for (const item of items) {
    if (item.tipo === 'Armadura') {
      var pesoValues
      switch (item.peso) {
        case 'Heavy':
          pesoValues = armorValues.heavy
          break
        case 'Medium':
          pesoValues = armorValues.medium
          break
        case 'Light':
          pesoValues = armorValues.light
          break
        default:
          break
      }

      var itemArmor
      switch (item.categoria) {
        case 'Chest':
          itemArmor = pesoValues.chest
          break
        case 'Hands':
          itemArmor = pesoValues.hands
          break
        case 'Waist':
          itemArmor = pesoValues.waist
          break
        default:
          itemArmor = pesoValues.headShoulderLegsFeet
          break
      }

      armorUpdate = {
        _id: item._id,
        estadisticas: {
          armadura: itemArmor,
        },
      }

      const resUpdate = await axios
        .put(process.env.VUE_APP_SERVER_URL + '/item/update', armorUpdate)
        .catch(function (err) {
          //console.log(err)
        })
    }
  }
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
  addFamilyWeights,
  apendItems,
  addFamilyBonusStats,
  addItemsArmor,
}
