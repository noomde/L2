import { CalculationGuide } from '../src/calculationGuide.js'

const calcGuide = new CalculationGuide

console.log('\nmeanGuide')
console.log('===================')
try {
  console.log(calcGuide.meanGuide())
} catch (error) {
  console.error('\x1b[31mERROR:', error.message, '\x1b[0m')
}


console.log('\nmedianGuide')
console.log('===================')
try {
  console.log(calcGuide.medianGuide())
} catch (error) {
  console.error('\x1b[31mERROR:', error.message, '\x1b[0m')
}

console.log('\nvarianceGuide')
console.log('===================')
try {
  console.log(calcGuide.varianceGuide())
} catch (error) {
  console.error('\x1b[31mERROR:', error.message, '\x1b[0m')
}

console.log('\nstandardDeviationGuide')
console.log('===================')
try {
  console.log(calcGuide.standardDeviationGuide())
} catch (error) {
  console.error('\x1b[31mERROR:', error.message, '\x1b[0m')
}

console.log('\nmodeGuide')
console.log('===================')
try {
  console.log(calcGuide.modeGuide())
} catch (error) {
  console.error('\x1b[31mERROR:', error.message, '\x1b[0m')
}

console.log('\nrangeGuide')
console.log('===================')
try {
  console.log(calcGuide.rangeGuide())
} catch (error) {
  console.error('\x1b[31mERROR:', error.message, '\x1b[0m')
}

console.log('\ngeometricMeanGuide')
console.log('===================')
try {
  console.log(calcGuide.geometricMeanGuide())
} catch (error) {
  console.error('\x1b[31mERROR:', error.message, '\x1b[0m')
}

console.log('\nharmonicMeanGuide')
console.log('===================')
try {
  console.log(calcGuide.harmonicMeanGuide())
} catch (error) {
  console.error('\x1b[31mERROR:', error.message, '\x1b[0m')
}

console.log('\nquartilesGuide')
console.log('===================')
try {
  console.log(calcGuide.quartilesGuide())
} catch (error) {
  console.error('\x1b[31mERROR:', error.message, '\x1b[0m')
}

console.log('\ninterquartileRangeGuide')
console.log('===================')
try {
  console.log(calcGuide.interquartileRangeGuide())
} catch (error) {
  console.error('\x1b[31mERROR:', error.message, '\x1b[0m')
}
