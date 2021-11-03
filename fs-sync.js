const fs = require('fs')

const firstFile = fs.readFileSync('./content/first.txt', 'utf-8')
const secondFile = fs.readFileSync('./content/second.txt', 'utf-8')

console.log(firstFile);
console.log(secondFile);

fs.writeFileSync('./content/result-sync.txt', `Here is the result : ${firstFile} , ${secondFile}`)

//this will not make it to override that current value but add 
// { flag: 'a' }