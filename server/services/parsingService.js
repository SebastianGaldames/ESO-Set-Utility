/**
 * referenced by ParsingController.js for testing and scrapperAdapterService.js for intended usage
 * @param {*} line String, single line from set bonus text
 * @returns Object with properties: requiredItems (Number), stats (array)
 */
const parseSetBonusLine = async (line) => {
  const statsList = [
    'Armor',
    'Healing Done',
    'Healing Taken',
    'Health Recovery',
    'Magicka Recovery',
    'Maximum Health',
    'Maximum Magicka',
    'Maximum Stamina',
    'Offensive Penetration',
    'Critical Chance',
    'Critical Resistance',
    'Spell Damage',
    'Stamina Recovery',
    'Weapon Damage',
  ]
  const operationsList = ['Adds']
  const result = {
    // cantidad
    requiredItems: 0,

    // array filled objects with properties: type (String), value (Number), operation(String)
    stats: [],
  }

  // declaracion de regex a utilizar
  let regexSingleMatch
  let regexStats
  let regexItems = new RegExp('[0-9]+')

  //cambio de string de entrada
  let corteLinea = new RegExp(/while|if/i).exec(line)
  let lineCopy = line.substring(
    0,
    corteLinea === null ? line.length : corteLinea.index
  )

  // llenado del field items (cantidad de items que requiere el bono)
  result.requiredItems = regexItems.exec(lineCopy)

  // llenado de regex con array de stats
  var statsListStr = statsList[0]
  for (var i = 1; i < statsList.length; i++) {
    statsListStr = statsListStr + '|' + statsList[i]
  }

  var operationsListStr = operationsList[0]
  for (var i = 1; i < operationsList.length; i++) {
    operationsListStr = operationsListStr + '|' + operationsList[i]
  }

  regexStats = new RegExp(
    `(${operationsListStr})\\s([0-9]+%?)\\s(${statsListStr})`,
    'gi'
  )
  // regexStats = new RegExp(`${operationsListStr}\\s[0-9]+\\s${statsListStr}`, 'g')
  // console.log('exec: ' + regexStats.exec(line)[0])
  // console.log('exec 2: ' + regexStats.exec(line)[0])
  // console.log('regexStats: ' + regexStats)

  // iterador de matches
  let matches = lineCopy.matchAll(regexStats)

  // console.log('all matches: ' + matches[0])

  let match = matches.next()
  // var matchcounter = 0
  while (!match.done) {
    const stat = {
      type: '',
      value: 0,
      operation: '',
    }
    // console.log('match ' + matchcounter.toString() + ': ' + match.value[0])
    // matchcounter++

    // llenado del objeto stat por iteracion
    // regexSingleMatch = new RegExp(`(Adds)\\s([0-9]+)\\s(${statsListStr})`)
    if (
      !new RegExp(match.value[0].toString() + ' (while|if)', 'i').test(line)
    ) {
      regexSingleMatch = regexStats
      stat.type = match.value[0].toString().replace(regexSingleMatch, '$3')

      // logica para seleccionar Multiply
      const secondGroup = match.value[0]
        .toString()
        .replace(regexSingleMatch, '$2')
      stat.value = parseInt(secondGroup)
      if (secondGroup.charAt(secondGroup.length - 1) === '%') {
        stat.operation = 'Multiply'
        stat.value = stat.value / 100
      } else {
        stat.operation = match.value[0]
          .toString()
          .replace(regexSingleMatch, '$1')
      }
      stat.operation =
        stat.operation.charAt(0).toUpperCase() + stat.operation.substring(1)
      result.stats.push(stat)
    }
    match = matches.next()
  }

  // parser de stats con and entre nombres
  let regexStats1 = new RegExp(
    '(Adds) ([0-9]+) (Weapon|Spell) and (Weapon|Spell) Damage',
    'gi'
  )
  matches = lineCopy.matchAll(regexStats1)

  match = matches.next()
  // var matchcounter = 0
  while (!match.done) {
    for (let k = 0; k < 2; k++) {
      const stat = {
        type: '',
        value: 0,
        operation: '',
      }
      // matchcounter++

      // llenado del objeto stat por iteracion
      if (
        !new RegExp(match.value[0].toString() + ' (while|if)', 'i').test(line)
      ) {
        regexSingleMatch = regexStats1
        stat.type = match.value[0]
          .toString()
          .replace(regexSingleMatch, '$' + (3 + k).toString() + ' Damage')

        // logica para seleccionar Multiply
        const secondGroup = match.value[0]
          .toString()
          .replace(regexSingleMatch, '$2')
        stat.value = parseInt(secondGroup)
        stat.operation = match.value[0]
          .toString()
          .replace(regexSingleMatch, '$1')
        stat.operation =
          stat.operation.charAt(0).toUpperCase() + stat.operation.substring(1)
        result.stats.push(stat)
      }
    }
    match = matches.next()
  }

  //retorno
  return result
}

module.exports = {
  parseSetBonusLine,
}
