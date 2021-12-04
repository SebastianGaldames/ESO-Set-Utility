/**
 * referenced from ParsingController.js for testing
 * @param {*} line single line
 * @returns Object with properties: items (Number), stats (array)
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
    'Spell Damage',
    'Stamina Recovery',
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

  // llenado del field items (cantidad de items que requiere el bono)
  result.requiredItems = regexItems.exec(line)

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
    'g'
  )
  // regexStats = new RegExp(`${operationsListStr}\\s[0-9]+\\s${statsListStr}`, 'g')
  // console.log('exec: ' + regexStats.exec(line)[0])
  // console.log('exec 2: ' + regexStats.exec(line)[0])
  // console.log('regexStats: ' + regexStats)

  // iterador de matches
  let matches = line.matchAll(regexStats)

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
      stat.operation = match.value[0].toString().replace(regexSingleMatch, '$1')
    }
    result.stats.push(stat)
    match = matches.next()
  }

  //retorno
  return result
}

module.exports = {
  parseSetBonusLine,
}
