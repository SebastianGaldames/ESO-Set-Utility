export default (context, inject) => {
  inject('calculateArmor', (slots) => {
    return sumArmor(slots)
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
    return { armor: armorTemp }
  }
}
