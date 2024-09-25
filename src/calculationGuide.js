import { Statistics } from './Statistics.js'

class CalculationGuide extends Statistics {
  /**
   * Gives the user a mean guide.
   *
   * @returns {object} A object with the definition and steps to calculate mean.
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

  medianGuide() {

  }

  varianceGuide() {

  }

  standardDeviationGuide() {

  }

  modeGuide() {

  }

  rangeGuide() {

  }
}