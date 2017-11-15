#!/usr/bin/env node
const argv = require('yargs').argv
const chalk = require('chalk')

const adjective = require('./adjectives')
const animal = require('./animals')

if (argv.letter) {
  console.log(chalk.green(`${adjective.get(argv.letter)} ${animal.get(argv.letter)}`))
} else {
  console.error('Invalid letter, please specify a letter with --letter=b')
}