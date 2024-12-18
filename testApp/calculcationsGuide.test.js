import { CalculationGuide } from '../src/calculationGuide.js'

describe('CalculationGuide Tests', () => {
  let calcGuide

  beforeEach(() => {
    calcGuide = new CalculationGuide()
  })

  test('meanGuide should return the correct guide', () => {
    expect(calcGuide.meanGuide()).toEqual({
      definition: 'The mean is the average number in a set of numbers.',
      steps: [
        'Add all numbers together.',
        'Divide the sum with the amount of numbers in the set.'
      ]
    })
  })

  test('medianGuide should return the correct guide', () => {
    expect(calcGuide.medianGuide()).toEqual({
      definition: 'The median is the middle number in an ordered set of numbers. If the set is an even amount, the median is the average of the 2 middle numbers.',
      steps: [
        'Sort the numbers from smallest to biggest or biggest to smallest.',
        'The median number is the number in the middle. If it is an even amount then the median is the average of the 2 middle numbers.'
      ]
    })
  })

  test('varianceGuide should return the correct guide', () => {
    expect(calcGuide.varianceGuide()).toEqual({
      definition: 'Variance is the measurment to see how far each numbers are from the mean.',
      steps: [
        'Calculate the mean from the set of numbers.',
        'Subtract the mean from each number.',
        'Square each new number.',
        'Calculate the mean with these new numbers. If you want to calculate population variance just do it normally otherwise the divisor needs to be -1.'
      ]
    })
  })

  test('standardDeviationGuide should return the correct guide', () => {
    expect(calcGuide.standardDeviationGuide()).toEqual({
      definition: 'Standard deviation is the measure to see how far each numbers are from the mean. However compared to variance this is the squared root of the number.',
      steps: [
        'Calculate the variance.',
        'nth root the variance number. (n is the amount of numbers)'
      ]
    })
  })

  test('modeGuide should return the correct guide', () => {
    expect(calcGuide.modeGuide()).toEqual({
      definition: 'The mode is the most frequent number in a set of numbers. This number can be more than 1.',
      steps: [
        'Count how many times each number appears.',
        'The number/numbers that appears most is the mode.'
      ]
    })
  })

  test('rangeGuide should return the correct guide', () => {
    expect(calcGuide.rangeGuide()).toEqual({
      definition: 'The range is the difference between the biggest and the smallest number in a set of numbers.',
      steps: [
        'Subtract the smallest number from the biggest number.'
      ]
    })
  })

  test('geometricMeanGuide should return the correct guide', () => {
    expect(calcGuide.geometricMeanGuide()).toEqual({
      definition: 'The geometric mean is the nth root of the average number in a set of numbers.',
      steps: [
        'Multiply all numbers in the set together.',
        'Take the nth root of the average, n is the amount of numbers.'
      ]
    })
  })

  test('harmonicMeanGuide should return the correct guide', () => {
    expect(calcGuide.harmonicMeanGuide()).toEqual({
      definition: 'The harmonic mean is the reciprocal of the mean of the reciprocals of the numbers in the set',
      steps: [
        'calculate each numbers reciprocal (1 divided by the number).',
        'Add all the reciprocals together.',
        'Divide the amount of numbers by the sum of the reciprocals.'
      ]
    })
  })

  test('quartilesGuide should return the correct guide', () => {
    expect(calcGuide.quartilesGuide()).toEqual({
      definition: 'Quartiles divide a set of numbers into four equal parts. The first quartile is the 25th percentile, the second quartile is the median, and the third quartile is the 75th percentile.',
      steps: [
        'Sort the numbers in ascending order.',
        'To find quartile 1, find the median of the lower half of the number set. (This shold not include the median of the full number set)',
        'To find quartile 2, calculate the median of the full number set.',
        'To find quartile 3, find the median of the upper half of the number set. (This shold not include the median of the full number set)',
        'To find quartile 4, find the biggest number in the number set.'
      ]
    })
  })

  test('interquartileRangeGuide should return the correct guide', () => {
    expect(calcGuide.interquartileRangeGuide()).toEqual({
      definition: 'The interquartile range is a measure of statistical dispersion. It is the range between quartile 3 and quartile 1.',
      steps: [
        'Calculate quartile 1 and quartile 3 as described in the quartile guide.',
        'Subtract quartile 1 from quartile 3 to get the interquartile range.'
      ]
    })
  })
})