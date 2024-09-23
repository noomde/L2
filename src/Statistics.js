// Noticed just now that there are alot of similiar npm packagages so to make mine more unique it will make the calculations and be able to explain how to make these kind of calculations yuorself.
// I will also try to add a very good system for checking the correct input.
// This way my module will allow you to make these calculations while learning the process of it.
// So kinda like an educational tool. This could be built into some kind of positive math learning app.
// I kinda want it to have the possibility to show percentage of and decimal values aswell kinda like in an answer cheat.
import { modeCalculations } from './modeCalculations.js'

/**
 * Statistical math class.
 */
export class Statistics {
  /**
   * Sums up numbers from the arguments array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number} - The sum of all numbers from the argument.
   */
  sum(numArray) {
    let result
    for (let i = 0; i < numArray.length; i++) {
      result += numArray[i]
    }
    return result
  }

  /**
   * sorts a copiec argument from biggest to smallest.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number[]} - The sorted array from biggest to smallest.
   */
  sortByDescending(numArray) {
    return [...numArray].sort((x, y) => y - x)
  }

  /**
   * sorts a copied argument from smallest to biggest.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number[]} - The sorted array from smallest to biggest.
   */
  sortByAscending(numArray) {
    return [...numArray].sort((x, y) => x - y)
  }

  /**
   * Calculates the mean from the arguments array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number} - The mean of all numbers from the argument.
   */
  mean(numArray) {
    let result
    for (let number of numArray) {
      result += number
    }
    return result / numArray.length
  }

  /**
   * Calculates the median from the arguments array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number} - The median of all numbers from the argument.
   */
  median(numArray) {
    const sortedArray = this.sortByAscending(numArray)
    const middleOfArray = Math.floor(sortedArray.length / 2)

    if (sortedArray.length % 2 === 0) {
      return (Math.floor(sortedArray[middleOfArray - 1]) + sortedArray[middleOfArray]) / 2
    }
    return sortedArray[middleOfArray]
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
    return result
  }

  /**
   * Converts the numbers in the array to their proportional decimal values based on the sum of the array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number[]} - An array where each number represents its proportion of the total sum as a decimal.
   */
  convertToDecimal(numArray) {
    const sumOfArray = this.sum(numArray)
    let result = []

    for (let number of numArray) {
      result.push(number / sumOfArray)
    }
    return result
  }

  /**
   * Converts the numbers in the array to their proportional percentage values based on the sum of the array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number[]} - An array where each number represents its proportion of the total sum as a percentage string.
   */
  convertToPercentage(numArray) {
    let decimalArray = this.convertToDecimal(numArray)
    let result = []

    for (let number of decimalArray) {
      result.push(`${number * 100}%`)
    }
    return result
  }
}