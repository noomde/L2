import { Statistics } from './Statistics.js'
import { modeCalculations } from './modeCalculations.js'

/**
 * Statistical math helper, extends statistics.
 */
class advancedStatistics extends Statistics {
  variance(numArray) {

  }

  standardDeviation(numArray) {

  }

  range(numArray) {

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