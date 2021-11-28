/**
 * referenced from ParsingController.js for testing
 * @param {*} line single line
 * @returns Object with properties: items (Number), stats (array)
 */
const parseSetBonusLine = async (line) => {
  const statsList = ['Armor', 'Stamina']
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

  // llenado de array de stats
  for (var i = 0; i < statsList.length; i++) {
    regexStats = new RegExp(`Adds\\s[0-9]+\\s${statsList[i]}`, 'g')
    // console.log('regexStats: ' + re)

    // iterador de matches
    let matches = line.matchAll(regexStats)
    let match = matches.next()
    while (!match.done) {
        const stat = {
            type: '',
            value: 0,
            operation: '',
        }
      //   console.log('match: ' + match.value)

      // llenado del objeto stat por iteracion
      regexSingleMatch = new RegExp(`(Adds)\\s([0-9]+)\\s(${statsList[i]})`)
      stat.type = match.value.toString().replace(regexSingleMatch, '$3')
      stat.value = parseInt(match.value.toString().replace(regexSingleMatch, '$2'))
      stat.operation = match.value.toString().replace(regexSingleMatch, '$1')
      result.stats.push(stat)
      match = matches.next()
    }
  }

  //retorno
  return result
}

module.exports = {
  parseSetBonusLine,
}
