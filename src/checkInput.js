/**
 * Used to check inputs for the main class.
 */
class checkInput {

  /**
  * Checks every value in the array to ensure they are numbers.
  *
  * @param {number[]} numArray - An array of numbers.
  * @throws {TypeError} - Throws an error if any value in the array is not a number.
  * @returns {void}
  */
  __isNumber(numArray) {
    if (numArray.every(value => typeof value === 'number')) {
      return
    }
    throw new TypeError('The type of each index needs to be a number')
  }

  /**
   * Checks if the argument is an array of numbers.
   *
   * @param {number[]} numArray - An array of numbers.
   * @throws {TypeError} - Throws an error if the input is not an array or contains non-number elements.
   * @returns {void}
   */
  __checkInput(numArray) {
    if (Array.isArray(numArray) || numArray.length > 0) {
      this.__isNumber(numArray)
      return
    }
    throw new TypeError('The argument needs to be an Array and can not be empty.')
  }
}