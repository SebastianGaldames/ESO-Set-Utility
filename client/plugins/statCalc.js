export default (context, inject) => {
  inject('calculateArmor', (slots) => {
    return sumArmor(slots)
  })
  inject('calculateStats', (slots) => {
    return calculateStats(slots)
  })
  function sumArmor(slots) {
    let armorTemp = 0
    for (const slot of slots) {
      if (slot.item !== undefined) {
        if (slot.item.tipo === 'Armadura') {
          armorTemp = armorTemp + slot.item.estadisticas.armadura
        }
      }
    }
    return armorTemp
  }
  // eslint-disable-next-line no-unused-vars
  function sumMaximumMagicka(slots) {
    let armorTemp = 0
    for (const slot of slots) {
      if (slot.item !== undefined) {
        if (slot.item.tipo === 'Armadura') {
          armorTemp = armorTemp + slot.item.estadisticas.armadura
        }
      }
    }
    return armorTemp
  }
  function itemsPerSet(slots) {
    const itemsPerSet = []
    for (const slot of slots) {
      const foundPair = itemsPerSet.find(
        (objectPair) => objectPair.familia.nombre === slot.familia.nombre
      )
      if (foundPair !== undefined) {
        foundPair.itemQuantity += 1
      } else {
        itemsPerSet.push({ familia: slot.familia, itemQuantity: 1 })
      }
    }
    return itemsPerSet
  }
  function getSetsStats(slots) {
    const itPerSet = itemsPerSet(slots)

    const setsStats = []

    // Por cada familia del equipamiento
    for (const familyPair of itPerSet) {
      // Por cada bono de la familia
      for (const bono of familyPair.familia.bonos) {
        // Si se alcanza el número de items para el bono
        if (bono.cantidad <= familyPair.itemQuantity) {
          setsStats.push(...bono.estadisticas)
        }
      }
    }

    return setsStats
  }
  // eslint-disable-next-line no-unused-vars
  function getItemStats(slot) {
    const itemStats = {
      armor: 0,
      maximumMagicka: 0,
      magickaRecovery: 0,
      maximumHealth: 0,
      healthRecovery: 0,
      maximumStamina: 0,
      staminaRecovery: 0,
      spellDamage: 0,
      spellCritical: 0,
      spellPenetration: 0,
      weaponDamage: 0,
      weaponCritical: 0,
      physicalPenetration: 0,
      spellResistance: 0,
      physicalResistance: 0,
      criticalResistance: 0,
    }
    // calculate the stats generated for item+modifiers
    // TODO add undefined check for item that is not an armor
    const spellResistance = slot.item.estadisticas.armadura
    const physicalResistance = slot.item.estadisticas.armadura
    // Trait
    const traitStats = getTraitStats(slot)
    // Glyph
    const glyphStats = getGlyphStats(slot)

    if (
      slot.tag === 'Waist' ||
      slot.tag === 'Feet' ||
      slot.tag === 'Hands' ||
      slot.tag === 'Shoulder'
    ) {
      glyphStats.adds.forEach((stat) => {
        stat.value = stat.value * 0.4
      })
      glyphStats.multiply.forEach((stat) => {
        stat.value = stat.value * 0.4
      })
    }

    return itemStats
  }
  function getTraitStats(slot) {
    const stats = {
      adds: [],
      multiply: [],
    }
    let traitStats
    if (slot.trait !== undefined) {
      if (slot.tag !== 'Two-Handed') {
        // Calidad
        switch (slot.calidad) {
          case 'dorada':
            traitStats = slot.trait.calidades.legendary
            break

          default:
            break
        }
      } else {
        // Calidad2h
        switch (slot.calidad) {
          case 'dorada':
            traitStats = slot.trait.calidades2h.legendary
            break

          default:
            break
        }
      }
      for (const stat of traitStats) {
        if (stat.operation !== undefined) {
          if (stat.operation === 'Adds') {
            // Caso que la operacion sea Adds
            stats.adds.push({ type: stat.type, value: stat.value })
          } else {
            // Caso que la operacion sea Multiply
            stats.multiply.push({ type: stat.type, value: stat.value })
          }
        }
      }
    }
    return stats
  }
  function getGlyphStats(slot) {
    const stats = {
      adds: [],
      multiply: [],
    }
    if (slot.glyph !== undefined) {
      const potencia = slot.glyph.potencias.find(
        (pot) => pot.potencia === slot.potenciaGlyph
      )

      let calidadStats
      switch (slot.calidadGlyph) {
        case 'normal':
          calidadStats = potencia.calidades.normal
          break
        case 'fine':
          calidadStats = potencia.calidades.fine
          break
        case 'superior':
          calidadStats = potencia.calidades.superior
          break
        case 'epic':
          calidadStats = potencia.calidades.epic
          break
        case 'legendary':
          calidadStats = potencia.calidades.legendary
          break

        default:
          break
      }
      for (const stat of calidadStats) {
        if (stat.operation !== undefined) {
          if (stat.operation === 'Adds') {
            // Caso que la operacion sea Adds
            stats.adds.push({ type: stat.type, value: stat.value })
          } else {
            // Caso que la operacion sea Multiply
            stats.multiply.push({ type: stat.type, value: stat.value })
          }
        }
      }
    }
    return stats
  }
  function calculateStats(slots) {
    const stats = {
      armor: 0,
      maximumMagicka: 0,
      magickaRecovery: 0,
      maximumHealth: 0,
      healthRecovery: 0,
      maximumStamina: 0,
      staminaRecovery: 0,
      spellDamage: 0,
      spellCritical: 0,
      spellPenetration: 0,
      weaponDamage: 0,
      weaponCritical: 0,
      physicalPenetration: 0,
      spellResistance: 0,
      physicalResistance: 0,
      criticalResistance: 0,
    }
    stats.armor = sumArmor(slots)
    // itemsPerSet(slots)
    // console.log(slots)
    console.log(getSetsStats(slots))

    return stats
  }
}
