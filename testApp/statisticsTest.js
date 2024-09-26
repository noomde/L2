import { Statistics } from '../src/Statistics.js'

const testArrays = [
  { name: 'array', data: [5, 2, 7, 1, 9, 7, 3, 5, 8, 2, 4, 6, 12] },
  { name: 'arraySingle', data: [6] },
  { name: 'arrayObject', data: [2, 3, 6, 1, 8, 2, {}] },
  { name: 'arrayString', data: [2, 5, 3, 'hejsan', 2, 7] },
  { name: 'arrayBoolean', data: [2, 5, 2, 1, 6, undefined, 8] },
  { name: 'arrayNaN', data: [2, 5, 8, 1, 9, 0, NaN, 3] }
]


const stat = new Statistics

console.log('\nMean')
console.log('===================')
testArrays.forEach(test => {
  try {
    console.log(stat.mean(test.data))
  } catch (error) {
    console.error('\x1b[31mERROR:', error.message, '\x1b[0m')
  }
})