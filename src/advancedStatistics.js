import { Statistics } from './Statistics.js'
import { modeCalculations } from './calculations/modeCalculations.js'
import { varianceCalculations } from './calculations/varianceCalculations.js'

/**
 * Statistical math helper, extends statistics.
 */
class advancedStatistics extends Statistics {

  populationVariance(numArray) {
    const squaredDifference = varianceCalculations.subtractMean(varianceCalculations.squareDifference())

    return this.mean(squaredDifference)
  }

  sampleVariance() {
    const squaredDifference = varianceCalculations.subtractMean(varianceCalculations.squareDifference())

    return varianceCalculations.calculateSampleVariance(squaredDifference)
  }

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

    const smallestNumber = sortedArray[0], biggestNumber = sortedArray[sortedArray.length-1]
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