#!/usr/bin/env node
const argv = require('yargs').argv
const adjective = require('./adjectives')

if (arvg.letter) {
  console.log(`${adjective.get(argv.letter)} "animal"`)
} else {
  console.error('Invalid letter, please specify a letter with --letter=b')
}