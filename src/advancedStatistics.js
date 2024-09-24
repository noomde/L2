import { Statistics } from './Statistics.js'
import { modeCalculations } from './calculations/modeCalculations.js'
import { varianceCalculations } from './calculations/varianceCalculations.js'

/**
 * Statistical math helper, extends statistics.
 */
class advancedStatistics extends Statistics {

  /**
   * Calculates the population variance from the argument array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number} The population variance.
   */
  populationVariance(numArray) {
    const mean = this.mean(numArray)
    const squaredDifference = varianceCalculations.subtractMean(numArray, mean)

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
    const squaredDifference = varianceCalculations.subtractMean(numArray, mean)

    return varianceCalculations.calculateSampleVariance(squaredDifference)
  }

  /**
   * Calculates the sample variance from the argument array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number} The standard deviation.
   */
  standardDeviation(numArray) {

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
    return [smallestNumber, biggestNumber]
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

      modeCalculations.updateModeCount(modeMap, number)

      result = modeCalculations.updateMaxMode(modeMap, number, maximumCount)
    }
    if (result === undefined) {
      return 'No mode available'
    }
    return result
  }
}