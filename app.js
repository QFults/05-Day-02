// const fs = require('fs')
// const person = require('./person.js')
// console.log(person)
const chalk = require('chalk')
const { movies } = require('./movies.js')
movies.forEach((movie, i) => console.log(`#${i + 1}: ${movie}`))
console.log(chalk.blue('Hello World!'))
