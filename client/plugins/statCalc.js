/* eslint-disable no-unused-vars */
export default (context, inject) => {
  inject('calculateArmor', (slots) => {
    return sumArmor(slots)
  })
  inject('calculateStats', (slots) => {
    return calculateStats(slots)
  })
  inject('getSetsBonus', (slots) => {
    return itemsPerSet(slots)
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

    let statObject = {
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

    statObject = applyAdds(
      setsStats.filter((stat) => stat.operation === 'Adds'),
      statObject
    )

    const multSets = addMults(
      setsStats.filter((stat) => stat.operation === 'Multiply'),
      statObject
    )

    statObject = addStatObjects(statObject, multSets)

    return statObject
  }
  function getItemCollectionStats(slots) {
    let itemColStats = {
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
    for (const slot of slots) {
      const itemStats = getItemStats(slot)
      itemColStats = addStatObjects(itemColStats, itemStats)
    }
    return itemColStats
  }
  function getItemStats(slot) {
    let itemStats = {
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

    itemStats = applyAdds(traitStats.adds, itemStats)
    itemStats = applyAdds(glyphStats.adds, itemStats)
    if (slot.item.tipo === 'Armadura') {
      itemStats.armor = itemStats.armor + slot.item.estadisticas.armadura
      itemStats.spellResistance =
        itemStats.spellResistance + slot.item.estadisticas.armadura
      itemStats.physicalResistance =
        itemStats.physicalResistance + slot.item.estadisticas.armadura
    }

    const multTrait = addMults(traitStats.multiply, itemStats)
    const multGlyph = addMults(glyphStats.multiply, itemStats)

    itemStats = addStatObjects(itemStats, multTrait)
    itemStats = addStatObjects(itemStats, multGlyph)

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

  function applyAdds(addStatsArray, statObject) {
    for (const stat of addStatsArray) {
      switch (stat.type) {
        case 'Armor':
          statObject.armor += stat.value
          break
        case 'Maximum Health':
          statObject.maximumHealth += stat.value
          break
        case 'Maximum Magicka':
          statObject.maximumMagicka += stat.value
          break
        case 'Maximum Stamina':
          statObject.maximumStamina += stat.value
          break
        case 'Health Recovery':
          statObject.healthRecovery += stat.value
          break
        case 'Magicka Recovery':
          statObject.magickaRecovery += stat.value
          break
        case 'Stamina Recovery':
          statObject.staminaRecovery += stat.value
          break
        case 'Spell Damage':
          statObject.spellDamage += stat.value
          break
        case 'Spell Critical':
          statObject.spellCritical += stat.value
          break
        case 'Spell Penetration':
          statObject.spellPenetration += stat.value
          break
        case 'Weapon Damage':
          statObject.weaponDamage += stat.value
          break
        case 'Weapon Critical':
          statObject.weaponCritical += stat.value
          break
        case 'Physical Penetration':
          statObject.physicalPenetration += stat.value
          break
        case 'Spell Resistance':
          statObject.spellResistance += stat.value
          break
        case 'Physical Resistance':
          statObject.physicalResistance += stat.value
          break
        case 'Critical Resistance':
          statObject.criticalResistance += stat.value
          break
        case 'Offensive Penetration':
          statObject.physicalPenetration += stat.value
          statObject.spellPenetration += stat.value
          break
        default:
      }
    }
    return statObject
  }

  function addMults(multsArray, statObject) {
    const statDelta = {
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
    // for each value in statsArray add the percentage to delta
    for (const mult of multsArray) {
      switch (mult.type) {
        case 'Armor':
          statDelta.armor += statObject.armor * mult.value
          break
        case 'Maximum Health':
          statDelta.maximumHealth += statObject.maximumHealth * mult.value
          break
        case 'Maximum Magicka':
          statDelta.maximumMagicka += statObject.maximumMagicka * mult.value
          break
        case 'Maximum Stamina':
          statDelta.maximumStamina += statObject.maximumStamina * mult.value
          break
        case 'Health Recovery':
          statDelta.healthRecovery += statObject.healthRecovery * mult.value
          break
        case 'Magicka Recovery':
          statDelta.magickaRecovery += statObject.magickaRecovery * mult.value
          break
        case 'Stamina Recovery':
          statDelta.staminaRecovery += statObject.staminaRecovery * mult.value
          break
        case 'Spell Damage':
          statDelta.spellDamage += statObject.spellDamage * mult.value
          break
        case 'Spell Critical':
          statDelta.spellCritical += statObject.spellCritical * mult.value
          break
        case 'Spell Penetration':
          statDelta.spellPenetration += statObject.spellPenetration * mult.value
          break
        case 'Weapon Damage':
          statDelta.weaponDamage += statObject.weaponDamage * mult.value
          break
        case 'Weapon Critical':
          statDelta.weaponCritical += statObject.weaponCritical * mult.value
          break
        case 'Physical Penetration':
          statDelta.physicalPenetration +=
            statObject.physicalPenetration * mult.value
          break
        case 'Spell Resistance':
          statDelta.spellResistance += statObject.spellResistance * mult.value
          break
        case 'Physical Resistance':
          statDelta.physicalResistance +=
            statObject.physicalResistance * mult.value
          break
        case 'Critical Resistance':
          statDelta.criticalResistance +=
            statObject.criticalResistance * mult.value
          break
        case 'Offensive Penetration':
          statDelta.physicalPenetration +=
            statObject.physicalPenetration * mult.value
          statDelta.spellPenetration += statObject.spellPenetration * mult.value
          break
        default:
      }
    }
    return statDelta
  }

  function addStatObjects(statA, statB) {
    const cloneA = Object.assign({}, statA)
    cloneA.armor += statB.armor
    cloneA.maximumMagicka += statB.maximumMagicka
    cloneA.magickaRecovery += statB.magickaRecovery
    cloneA.maximumHealth += statB.maximumHealth
    cloneA.healthRecovery += statB.healthRecovery
    cloneA.maximumStamina += statB.maximumStamina
    cloneA.staminaRecovery += statB.staminaRecovery
    cloneA.spellDamage += statB.spellDamage
    cloneA.spellCritical += statB.spellCritical
    cloneA.spellPenetration += statB.spellPenetration
    cloneA.weaponDamage += statB.weaponDamage
    cloneA.weaponCritical += statB.weaponCritical
    cloneA.physicalPenetration += statB.physicalPenetration
    cloneA.spellResistance += statB.spellResistance
    cloneA.physicalResistance += statB.physicalResistance
    cloneA.criticalResistance += statB.criticalResistance
    return cloneA
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

    const itemsStats = getItemCollectionStats(slots)
    const setsStats = getSetsStats(slots)

    stats.armor = itemsStats.armor + setsStats.armor
    stats.maximumMagicka = calcMagicka(
      itemsStats.maximumMagicka,
      setsStats.maximumMagicka
    )
    stats.magickaRecovery = calcMagickaRecovery(
      itemsStats.magickaRecovery,
      setsStats.magickaRecovery
    )
    stats.maximumHealth = calcHealth(
      itemsStats.maximumHealth,
      setsStats.maximumHealth
    )
    stats.healthRecovery = calcHealthRecovery(
      itemsStats.healthRecovery,
      setsStats.healthRecovery
    )
    stats.maximumStamina = calcStamina(
      itemsStats.maximumStamina,
      setsStats.maximumStamina
    )
    stats.staminaRecovery = calcStaminaRecovery(
      itemsStats.staminaRecovery,
      setsStats.staminaRecovery
    )
    stats.spellDamage = calcSpellDamage(
      itemsStats.spellDamage,
      setsStats.spellDamage
    )
    stats.spellCritical = calcSpellCritical(
      itemsStats.spellCritical,
      setsStats.spellCritical
    )
    stats.spellPenetration = calcSpellPenetration(
      itemsStats.spellPenetration,
      setsStats.spellPenetration
    )
    stats.weaponDamage = calcWeaponDamage(
      itemsStats.weaponDamage,
      setsStats.weaponDamage
    )
    stats.weaponCritical = calcWeaponCritical(
      itemsStats.weaponCritical,
      setsStats.weaponCritical
    )
    stats.physicalPenetration = calcPhysicalPenetration(
      itemsStats.physicalPenetration,
      setsStats.physicalPenetration
    )
    stats.spellResistance = calcSpellResistance(
      itemsStats.spellResistance,
      setsStats.spellResistance
    )
    stats.physicalResistance = calcphysicalResistance(
      itemsStats.physicalResistance,
      setsStats.physicalResistance
    )
    stats.criticalResistance = calcCriticalResistance(
      itemsStats.criticalResistance,
      setsStats.criticalResistance
    )

    return stats
  }
  // equations, all math done with lvl 50 as max, and lvl 66 as effective level
  function calcHealth(itemHealth, setHealth) {
    const hp = 300 * 50 + 1000 + itemHealth + setHealth
    return hp
  }
  function calcMagicka(itemMagicka, setMagicka) {
    const mg = 220 * 50 + 1000 + itemMagicka + setMagicka
    return mg
  }
  function calcHealthRecovery(itemHealthRegen, setHealthRegen) {
    const healthRegen =
      Math.round(5.592 * 50 + 29.4) + itemHealthRegen + setHealthRegen
    return healthRegen
  }
  function calcMagickaRecovery(itemMagickaRegen, setMagickaRegen) {
    const magickaRegen =
      Math.round(9.30612 * 50 + 48.7) + itemMagickaRegen + setMagickaRegen
    return magickaRegen
  }
  //     maximumStamina
  function calcStamina(itemStamina, setStamina) {
    const stamina = 220 * 50 + 1000 + itemStamina + setStamina
    return stamina
  }
  //     staminaRecovery
  function calcStaminaRecovery(itemStaminaRegen, setStaminaRegen) {
    const staminaRegen =
      Math.round(9.30612 * 50 + 48.7) + itemStaminaRegen + setStaminaRegen
    return staminaRegen
  }
  //     spellDamage
  function calcSpellDamage(itemSpellDamage, setSpellDamage) {
    const spellDamage = 20 * 50 + itemSpellDamage + setSpellDamage
    return spellDamage
  }
  //     spellCritical
  function calcSpellCritical(itemSpellCrit, setSpellCrit) {
    const spellCrit =
      setSpellCrit * (1 / (2 * 66 * (100 + 66))) + 0.1 + itemSpellCrit
    return spellCrit
  }
  //     spellPenetration
  function calcSpellPenetration(itemSpellPenetration, setSpellPenetration) {
    const spellPenetration = itemSpellPenetration + setSpellPenetration
    return spellPenetration
  }
  //     weaponDamage
  function calcWeaponDamage(itemWeaponDamage, setWeaponDamage) {
    const weaponDamage = 20 * 50 + itemWeaponDamage + setWeaponDamage
    return weaponDamage
  }
  //     weaponCritical
  function calcWeaponCritical(itemWeaponCrit, setWeaponCrit) {
    const weaponCrit =
      setWeaponCrit * (1 / (2 * 66 * (100 + 66))) + 0.1 + itemWeaponCrit
    return weaponCrit
  }
  //     physicalPenetration
  function calcPhysicalPenetration(
    itemPhysicalPenetration,
    setPhysicalPenetration
  ) {
    const physicalPenetration = itemPhysicalPenetration + setPhysicalPenetration
    return physicalPenetration
  }
  //     spellResistance
  function calcSpellResistance(itemSpellResist, setSpellResist) {
    const spellResist = itemSpellResist + setSpellResist
    return spellResist
  }
  //     physicalResistance
  function calcphysicalResistance(itemPhysicalResist, setPhysicalResist) {
    const physicalResist = itemPhysicalResist + setPhysicalResist
    return physicalResist
  }
  //     criticalResistance
  function calcCriticalResistance(itemCritResist, setCritResist) {
    const critResist = 1320 + itemCritResist + setCritResist
    return critResist
  }
}
