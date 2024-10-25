import { Statistics } from '../src/Statistics.js'
import { ValidateInput } from '../src/validation/validateInput.js'

const testArraysValidate = [
  { 
    name: 'array', 
    data: [5, 2, 7, 1, 9, 7, 3, 5, 8, 2, 4, 6, 12], 
    expected: true
  },
  { 
    name: 'arraySingle', 
    data: [6], 
    expected: true
  },
  { 
    name: 'arrayDouble', 
    data: [6, 7], 
    expected: true
  },
  { 
    name: 'arrayObject', 
    data: [2, 3, 6, 1, 8, 2, {}], 
    expected: 'You have entered the type object on index 6. The program can only handle the type number.' 
  },
  { 
    name: 'arrayString', 
    data: [2, 5, 3, 'hejsan', 2, 7], 
    expected: 'You have entered the type string on index 3. The program can only handle the type number.' 
  },
  { 
    name: 'arrayBoolean', 
    data: [2, 5, 2, 1, 6, undefined, 8], 
    expected: 'You have entered the type undefined on index 5. The program can only handle the type number.' 
  },
  { 
    name: 'arrayNaN', 
    data: [2, 5, 8, 1, 9, 0, NaN, 3], 
    expected: 'You have entered the type number NaN on index 6. The program can not handle NaN. Please remove NaN and try again.' 
  },
  { 
    name: 'object', 
    data: {}, 
    expected: 'The argument needs to be an Array.' 
  },
  { 
    name: 'emptyArray', 
    data: [], 
    expected: 'The argument can not be empty' 
  }
]


const testArrays = [
  { name: 'array', data: [5, 2, 7, 1, 9, 7, 3, 5, 8, 2, 4, 6, 12] },
  { name: 'arraySingle', data: [6] },
  { name: 'arrayDouble', data: [6, 7] }
]

describe('Validation Tests', () => {
  testArraysValidate.forEach((testArray) => {
    test(`Validating input for ${testArray.name}`, () => {
      if (testArray.expected === true) {
        expect(ValidateInput.checkInput(testArray.data)).toBe(true)
      } else {
        expect(() => ValidateInput.checkInput(testArray.data)).toThrow(testArray.expected)
      }
    })
  })
})

describe('Statistics Tests', () => {
  const stat = new Statistics()

  describe('Sum', () => {
    testArrays.forEach((testArray) => {
      test(`Sum of ${testArray.name}`, () => {
        expect(() => stat.sum(testArray.data)).not.toThrow()
      })
    })
  })

  describe('Sort By Descending', () => {
    testArrays.forEach((testArray) => {
      test(`Sort ${testArray.name} by descending`, () => {
        expect(() => stat.sortByDescending(testArray.data)).not.toThrow()
      })
    })
  })

  describe('Sort By Ascending', () => {
    testArrays.forEach((testArray) => {
      test(`Sort ${testArray.name} by ascending`, () => {
        expect(() => stat.sortByAscending(testArray.data)).not.toThrow()
      })
    })
  })

  describe('Mean', () => {
    testArrays.forEach((testArray) => {
      test(`Mean of ${testArray.name}`, () => {
        expect(() => stat.mean(testArray.data)).not.toThrow()
      })
    })
  })

  describe('Geometric Mean', () => {
    testArrays.forEach((testArray) => {
      test(`Geometric mean of ${testArray.name}`, () => {
        expect(() => stat.geometricMean(testArray.data)).not.toThrow()
      })
    })
  })

  describe('Harmonic Mean', () => {
    testArrays.forEach((testArray) => {
      test(`Harmonic mean of ${testArray.name}`, () => {
        expect(() => stat.harmonicMean(testArray.data)).not.toThrow()
      })
    })
  })

  describe('Median', () => {
    testArrays.forEach((testArray) => {
      test(`Median of ${testArray.name}`, () => {
        expect(() => stat.median(testArray.data)).not.toThrow()
      })
    })
  })

  describe('Convert to Decimal', () => {
    testArrays.forEach((testArray) => {
      test(`Convert ${testArray.name} to decimal`, () => {
        expect(() => stat.convertToDecimal(testArray.data)).not.toThrow()
      })
    })
  })

  describe('Convert to Percentage', () => {
    testArrays.forEach((testArray) => {
      test(`Convert ${testArray.name} to percentage`, () => {
        expect(() => stat.convertToPercentage(testArray.data)).not.toThrow()
      })
    })
  })

  describe('Range', () => {
    testArrays.forEach((testArray) => {
      test(`Range of ${testArray.name}`, () => {
        expect(() => stat.range(testArray.data)).not.toThrow()
      })
    })
  })

  describe('Population Variance', () => {
    testArrays.forEach((testArray) => {
      test(`Population variance of ${testArray.name}`, () => {
        expect(() => stat.populationVariance(testArray.data)).not.toThrow()
      })
    })
  })

  describe('Sample Variance', () => {
    testArrays.forEach((testArray) => {
      test(`Sample variance of ${testArray.name}`, () => {
        if (testArray.data.length <= 1) {
          expect(() => stat.sampleVariance(testArray.data)).toThrow()
        } else {
          expect(() => stat.sampleVariance(testArray.data)).not.toThrow()
        }
      })
    })
  })

  describe('Sample Standard Deviation', () => {
    testArrays.forEach((testArray) => {
      test(`Sample standard deviation of ${testArray.name}`, () => {
        if (testArray.data.length <= 1) {
          expect(() => stat.sampleStandardDeviation(testArray.data)).toThrow()
        } else {
          expect(() => stat.sampleStandardDeviation(testArray.data)).not.toThrow()
        }
      })
    })
  })

  describe('Population Standard Deviation', () => {
    testArrays.forEach((testArray) => {
      test(`Population standard deviation of ${testArray.name}`, () => {
        expect(() => stat.populationStandardDeviation(testArray.data)).not.toThrow()
      })
    })
  })

  describe('Mode', () => {
    testArrays.forEach((testArray) => {
      test(`Mode of ${testArray.name}`, () => {
        expect(() => stat.mode(testArray.data)).not.toThrow()
      })
    })
  })

  describe('Quartiles', () => {
    testArrays.forEach((testArray) => {
      test(`Quartiles of ${testArray.name}`, () => {
        if (testArray.data.length <= 1) {
          expect(() => stat.quartiles(testArray.data)).toThrow()
        } else {
          expect(() => stat.quartiles(testArray.data)).not.toThrow()
        }
      })
    })
  })

  describe('Interquartile Range', () => {
    testArrays.forEach((testArray) => {
      test(`Interquartile range of ${testArray.name}`, () => {
        if (testArray.data.length <= 1) {
          expect(() => stat.interquartileRange(testArray.data)).toThrow()
        } else {
          expect(() => stat.interquartileRange(testArray.data)).not.toThrow()
        }
      })
    })
  })
})