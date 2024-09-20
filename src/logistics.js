/**
 * Logistical math class.
 */
class Logistics {  
/**
 * Checks every value in the array to ensure they are numbers.
 *
 * @param {number[]} numArray - An array of numbers.
 * @throws {TypeError} - Throws an error if any value in the array is not a number.
 * @returns {void}
 */
  __isNumber(numArray) {
    if(numArray.every(value => typeof value === 'number')) {
      return
    }
    throw new TypeError ('The type of each index needs to be a number')
  }

/**
 * Checks if the argument is an array of numbers.
 *
 * @param {number[]} numArray - An array of numbers.
 * @throws {TypeError} - Throws an error if the input is not an array or contains non-number elements.
 * @returns {void}
 */
  __checkInput(numArray) {
    if (Array.isArray(numArray)) {
      this.__isNumber(numArray)
    }
    throw new TypeError ('The argument needs to be an Array.')
  }

    /**
     * Sums up numbers from the arguments array.
     *
     * @param {number[]} numArray - An array of numbers.
     * @returns {number} - The sum of all numbers from the argument.
     */
  sum(numArray) {
    let result
    for(let i = 0; i < numArray; i++) {
      result += numArray[i]
    }
    return result
  }

  /**
   * Calculates the mean from the arguments array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number} - The mean of all numbers from the argument.
   */
  mean(numArray) {

  }

  /**
   * Calculates the median from the arguments array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number} - The median of all numbers from the argument.
   */
  median(numArray) {

  }

  /**
   * Calculates the mode from the arguments array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number} - The mode from the argument array.
   */
  mode() {

  }

  /**
   * sorts the argument from biggest to smallest.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number[]} - The sorted array from biggest to smallest.
   */
  sortByDescending(numArray) {

  }

  /**
   * sorts the argument from smallest to biggest.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number[]} - The sorted array from smallest to biggest.
   */
  sortByAscending(numArray) {

  }

  /**
   * Converts the numbers in the array to their proportional decimal values based on the sum of the array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number[]} - An array where each number represents its proportion of the total sum as a decimal.
   */
  convertToDecimal(numArray) {

  }

    /**
   * Converts the numbers in the array to their proportional percentage values based on the sum of the array.
   *
   * @param {number[]} numArray - An array of numbers.
   * @returns {number[]} - An array where each number represents its proportion of the total sum as a percentage.
   */
  convertToPercentage(numArray) {

  }
}