'use strict'

const calculator = require('./calculator')

let resultSum = calculator.sum(20, 30)
let resultSubtract = calculator.subtract(20, 30)
let resultMultiply = calculator.multiply(20, 30)
let resultDivide = calculator.divide(20, 30)

console.log(`The result of the sum is: ${resultSum}`)
console.log(`The result of the subtraction is: ${resultSubtract}`)
console.log(`The result of the multiplication is: ${resultMultiply}`)
console.log(`The result of the division is: ${resultDivide}`)
