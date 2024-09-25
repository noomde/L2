import { Statistics } from './Statistics.js'
import { ModeCalculations } from './calculations/modeCalculations.js'
import { VarianceCalculations } from './calculations/varianceCalculations.js'

/**
 * Statistical math helper, extends statistics.
 */
class AdvancedStatistics extends Statistics {

  /**
   * Calculates the population variance from the argument array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number} The population variance.
   */
  populationVariance(numArray) {
    const mean = this.mean(numArray)
    const squaredDifference = VarianceCalculations.squareAndSubtractDifference(numArray, mean)

    return this.mean(squaredDifference)
  }

  /**
   * Calculates the sample variance from the argument array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number} The sample variance.
   */
  sampleVariance(numArray) {
    const mean = this.mean(numArray)
    const squaredDifference = VarianceCalculations.squareAndSubtractDifference(numArray, mean)

    return VarianceCalculations.calculateSampleVariance(squaredDifference)
  }

  /**
   * Calculates the sample variance from the argument array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number} The standard deviation.
   */
  sampleStandardDeviation(numArray) {
    return Math.sqrt(this.sampleVariance(numArray))
  }

  /**
   * Calculates the population variance from the argument array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number} The standard deviation.
   */
  populationStandardDeviation(numArray) {
    return Math.sqrt(this.populationVariance(numArray))
  }

  /**
   * Calculates the range from the arguments array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {Array} - Returns the range from the argument array.
   */
  range(numArray) {
    const sortedArray = this.sortByAscending(numArray)

    const smallestNumber = sortedArray[0], biggestNumber = sortedArray[sortedArray.length - 1]
    return biggestNumber - smallestNumber
  }

  /**
   * Calculates the mode from the arguments array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number} - The mode from the argument array.
   */
  mode(numArray) {
    let modeMap = {}
    let maximumCount = 0
    let result

    for (let i = 0; i < numArray.length; i++) {
      let number = numArray[i]

      ModeCalculations.updateModeCount(modeMap, number)

      result = ModeCalculations.updateMaxMode(modeMap, number, maximumCount)
    }
    if (result === undefined) {
      return 'No mode available'
    }
    return result
  }
}