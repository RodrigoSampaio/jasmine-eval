'use strict'

function sum (val1, val2) {
  validateNumbers(val1, val2)
  return val1 + val2
}

function subtract (val1, val2) {
  validateNumbers(val1, val2)
  return val1 - val2
}

function multiply (val1, val2) {
  validateNumbers(val1, val2)
  return val1 * val2
}

function divide (val1, val2) {
  validateNumbers(val1, val2)
  return val1 / val2
}

function validateNumbers(val1, val2) {
  if (isNaN(val1) || isNaN(val2)){
      throw new Error('Is not a number')
  } 
}

module.exports.sum = sum
module.exports.subtract = subtract
module.exports.multiply = multiply
module.exports.divide = divide
