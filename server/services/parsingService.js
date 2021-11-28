/**
 * referenced from ParsingController.js for testing
 * @param {*} line single line
 * @returns array of matches with stats in string argument
 */
const parseLine = async (line) => {
  const statsList = ['Armor', 'Stamina']
  const result = []
  let regex
  for (var i = 0; i < statsList.length; i++) {
    regex = `Adds\\s[0-9]+\\s${statsList[i]}`
    const re = new RegExp(regex, 'g')
    // console.log('regex: ' + re)

    // iterador de matches
    let matches = line.matchAll(re)
    let match = matches.next()
    while (!match.done) {
      //   console.log('match: ' + match.value)
      result.push(match.value)
      match = matches.next()
    }
  }
  return result
}

module.exports = {
  parseLine,
}
