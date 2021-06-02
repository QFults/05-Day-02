const { prompt } = require('inquirer')
const chalk = require('chalk')
const { writeFile } = require('fs')
const html = require('./html.js')

const createUser = () => {
  prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'number',
      name: 'age',
      message: 'How old are you?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?'
    }
  ])
    .then(user => {
      console.log(`
    --------------
    ${chalk.blue(user.name)}
    ${chalk.yellow(user.age)}
    ${chalk.green(user.email)}
    --------------
    `)

      html.add(`
      <h1>${user.name}</h1>
      <h2>${user.age}</h2>
      <h3>${user.email}</h3>
      `)

      prompt({
        type: 'confirm',
        name: 'action',
        message: 'Continue?'
      })
        .then(({ action }) => {
          if (action) {
            createUser()
          } else {
            writeFile('user.html', html.create(), err => {
              if (err) { console.log(err) }
              console.log(chalk.green('User File Created!'))
            })
          }
        })
    })
    .catch(err => console.log(err))
}

createUser()
