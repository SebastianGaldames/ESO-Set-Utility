export default (context, inject) => {
  inject('calculateArmor', (slots) => {
    return sumArmor(slots)
  })
  function sumArmor(slots) {
    let armor = 0
    for (const slot of slots) {
      const tempArmor =
        slot.slotPJ.item === undefined
          ? 0
          : slot.slotPJ.item.estadisticas.armadura
      armor = armor + tempArmor
    }
    return armor
  }
}
