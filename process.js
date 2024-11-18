let values= [' ', ['a','b','c'],['d','e','f'],['g','h','i'],['j','k','l'],['m','n','o']];
const parens = "process(elements[]";
const startChars = ["(", "[", "{"];
const endChars = [")", "]", "}"];
var indexes = [];
for (let i = 0; i < parens.length; i++) {
  if (indexes.length > 0) {
    let index = startChars.indexOf(parens[i]);
    if (index > -1) {
        indexes.push(startChars[index]);
        continue;
    }
    let endIndex = endChars.indexOf(parens[i]);
    if (endIndex > -1) {
        let current = indexes.pop();
        if(startChars.indexOf(current) != endIndex){
            indexes.push(current);
            break;
        }
    }
} else {
    let index = startChars.indexOf(parens[i]);
    if (index > -1) {
      indexes.push(startChars[index]);
    }
  }
}
if(indexes.length == 0){
    console.log("jo")
    return;
}
console.log("rosz")

