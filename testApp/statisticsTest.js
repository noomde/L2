import { Statistics } from '../src/Statistics.js'
import { ValidateInput } from '../src/validation/validateInput.js'

const testArraysValidate = [
  { name: 'array', data: [5, 2, 7, 1, 9, 7, 3, 5, 8, 2, 4, 6, 12] },
  { name: 'arraySingle', data: [6] },
  { name: 'arrayDouble', data: [6, 7] },
  { name: 'arrayObject', data: [2, 3, 6, 1, 8, 2, {}] },
  { name: 'arrayString', data: [2, 5, 3, 'hejsan', 2, 7] },
  { name: 'arrayBoolean', data: [2, 5, 2, 1, 6, undefined, 8] },
  { name: 'arrayNaN', data: [2, 5, 8, 1, 9, 0, NaN, 3] },
  { name: 'object', data: {} },
  { name: 'object', data: [] }
]


const testArrays = [
  { name: 'array', data: [5, 2, 7, 1, 9, 7, 3, 5, 8, 2, 4, 6, 12] },
  { name: 'arraySingle', data: [6] },
  { name: 'arrayDouble', data: [6, 7] }
]

const stat = new Statistics

console.log('\nValidation')
console.log('===================')
testArraysValidate.forEach(test => {
  try {
    console.log(ValidateInput.checkInput(test.data))
  } catch (error) {
    console.error('\x1b[31mERROR:', error.message, '\x1b[0m')
  }
})

console.log('\nSum')
console.log('===================')
testArrays.forEach(test => {
  try {
    console.log(stat.sum(test.data))
  } catch (error) {
    console.error('\x1b[31mERROR:', error.message, '\x1b[0m')
  }
})

console.log('\nSort By descending')
console.log('===================')
testArrays.forEach(test => {
  try {
    console.log(stat.sortByDescending(test.data))
  } catch (error) {
    console.error('\x1b[31mERROR:', error.message, '\x1b[0m')
  }
})

console.log('\nSort By Ascending')
console.log('===================')
testArrays.forEach(test => {
  try {
    console.log(stat.sortByAscending(test.data))
  } catch (error) {
    console.error('\x1b[31mERROR:', error.message, '\x1b[0m')
  }
})

console.log('\nMean')
console.log('===================')
testArrays.forEach(test => {
  try {
    console.log(stat.mean(test.data))
  } catch (error) {
    console.error('\x1b[31mERROR:', error.message, '\x1b[0m')
  }
})

console.log('\nGeometric mean')
console.log('===================')
testArrays.forEach(test => {
  try {
    console.log(stat.geometricMean(test.data))
  } catch (error) {
    console.error('\x1b[31mERROR:', error.message, '\x1b[0m')
  }
})

console.log('\nHarmonic mean')
console.log('===================')
testArrays.forEach(test => {
  try {
    console.log(stat.harmonicMean(test.data))
  } catch (error) {
    console.error('\x1b[31mERROR:', error.message, '\x1b[0m')
  }
})

console.log('\nMedian')
console.log('===================')
testArrays.forEach(test => {
  try {
    console.log(stat.median(test.data))
  } catch (error) {
    console.error('\x1b[31mERROR:', error.message, '\x1b[0m')
  }
})

console.log('\nConvert to Decimal')
console.log('===================')
testArrays.forEach(test => {
  try {
    console.log(stat.convertToDecimal(test.data))
  } catch (error) {
    console.error('\x1b[31mERROR:', error.message, '\x1b[0m')
  }
})

console.log('\nConvert to Percentage')
console.log('===================')
testArrays.forEach(test => {
  try {
    console.log(stat.convertToPercentage(test.data))
  } catch (error) {
    console.error('\x1b[31mERROR:', error.message, '\x1b[0m')
  }
})

console.log('\nRange')
console.log('===================')
testArrays.forEach(test => {
  try {
    console.log(stat.range(test.data))
  } catch (error) {
    console.error('\x1b[31mERROR:', error.message, '\x1b[0m')
  }
})

console.log('\nPopulation variance')
console.log('===================')
testArrays.forEach(test => {
  try {
    console.log(stat.populationVariance(test.data))
  } catch (error) {
    console.error('\x1b[31mERROR:', error.message, '\x1b[0m')
  }
})

console.log('\nSample variance')
console.log('===================')
testArrays.forEach(test => {
  try {
    console.log(stat.sampleVariance(test.data))
  } catch (error) {
    console.error('\x1b[31mERROR:', error.message, '\x1b[0m')
  }
})

console.log('\nSample standard deviation')
console.log('===================')
testArrays.forEach(test => {
  try {
    console.log(stat.sampleStandardDeviation(test.data))
  } catch (error) {
    console.error('\x1b[31mERROR:', error.message, '\x1b[0m')
  }
})

console.log('\nPopulation standard deviation')
console.log('===================')
testArrays.forEach(test => {
  try {
    console.log(stat.populationStandardDeviation(test.data))
  } catch (error) {
    console.error('\x1b[31mERROR:', error.message, '\x1b[0m')
  }
})

console.log('\nMode')
console.log('===================')
testArrays.forEach(test => {
  try {
    console.log(stat.mode(test.data))
  } catch (error) {
    console.error('\x1b[31mERROR:', error.message, '\x1b[0m')
  }
})

console.log('\nQuartiles')
console.log('===================')
testArrays.forEach(test => {
  try {
    console.log(stat.quartiles(test.data))
  } catch (error) {
    console.error('\x1b[31mERROR:', error.message, '\x1b[0m')
  }
})

console.log('\nInterquartile Range')
console.log('===================')
testArrays.forEach(test => {
  try {
    console.log(stat.interquartileRange(test.data))
  } catch (error) {
    console.error('\x1b[31mERROR:', error.message, '\x1b[0m')
  }
})