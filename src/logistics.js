/**
 * Logistical math class.
 */
class Logistics {
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
      return(Math.floor(sortedArray[middleOfArray - 1]) + sortedArray[middleOfArray]) / 2
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
    // Try nested loop
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