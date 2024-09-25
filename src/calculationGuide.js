import { Statistics } from './Statistics.js'

class CalculationGuide extends Statistics {
  /**
   * Gives the user a mean guide.
   *
   * @returns {object} - A object with the definition and steps to calculate mean.
   */
  meanGuide() {
    return {
      definition: 'The mean is the average number in a set of numbers.',
      steps: [
        'Add all numbers together.',
        'Divide the sum with the amount of numbers in the set.'
      ]
    }
  }

  /**
   * Gives the user a median guide.
   *
   * @returns {object} - A object with the definition and steps to calculate median.
   */
  medianGuide() {
    return {
      definition: 'The median is the middle number in an ordered set of numbers. If the set is an even amount, the median is the average of the 2 middle numbers.',
      steps: [
        'Sort the numbers from smallest to biggest or biggest to smallest.',
        'The median number is the number in the middle. If it is an even amount then the median is the average of the 2 middle numbers.'
      ]
    }
  }

  /**
   * Gives the user a variance guide.
   *
   * @returns {object} - A object with the definition and steps to calculate variance.
   */
  varianceGuide() {
    return {
      definition: 'Variance is the measurment to see how far each numbers are from the mean.',
      steps: [
        'Calculate the mean from the set of numbers.', 
        'Subtract the mean from each number.',
        'Square each new number.',
        'Calculate the mean with these new numbers. If you want to calculate population variance just do it normally otherwise the divisor needs to be -1.'
      ]
    }
  }

  /**
   * Gives the user a standard deviation guide.
   *
   * @returns {object} - A object with the definition and steps to calculate standard deviation.
   */
  standardDeviationGuide() {

  }

  /**
   * Gives the user a mode guide.
   *
   * @returns {object} - A object with the definition and steps to calculate mode.
   */
  modeGuide() {

  }

  /**
   * Gives the user a range guide.
   *
   * @returns {object} - A object with the definition and steps to calculate range.
   */
  rangeGuide() {

  }
}