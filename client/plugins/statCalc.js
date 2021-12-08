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

    return stats
  }
}
