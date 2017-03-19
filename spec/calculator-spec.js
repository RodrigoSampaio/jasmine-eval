'use strict'

const calculator = require('../calculator')

describe('Addition', () => {
  it('returns value 20', () => {
    expect(calculator.sum(10, 10)).toBe(20)
  })
  it('throws NaN error', () => {      
    expect(() => {
        calculator.sum(12, 'i-am-an-invalid-parameter')
    }).toThrow()
  })
})

describe('Subtraction', () => {
  it('returns value 0', () => {
    expect(calculator.subtract(10, 10)).toBe(0)
  })
})

describe('Addition', () => {
  it('returns value 20', () => {
    expect(calculator.sum(10, 10)).toBe(20)
  })
})

describe('Addition', () => {
  it('returns value 20', () => {
    expect(calculator.sum(10, 10)).toBe(20)
  })
})
