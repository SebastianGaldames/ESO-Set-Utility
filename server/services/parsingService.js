const statsList = [ "Armor", "Stamina"]

function parseLine(line) {
    const result = [];
    let regex;
    for (const i = 0; i < statsList.length; i++){
        regex = `Adds [0-9]+ ${statsList[i]}`;
        for (const m in line.matchAll(new RegExp(regex))){
            result.push(m);
        }
    }
    return result;
}