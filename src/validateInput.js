/**
 * Used to check inputs for the main class.
 */
class checkInput {

  /**
  * Checks every value in the array to ensure they are numbers.
  *
  * @param {number[]} numArray - An array of numbers.
  * @throws {TypeError} - Throws an error if any value in the array is not a number.
  */
  static #checkTypeString(numArray) {
    for (let i = 0; i < numArray.length; i++) {
      if (typeof numArray[i] === 'string') {
        throw new TypeError(`You have entered the type string on index ${i}. The argument can only handle the type number.`)
      }
    }
  }

  /**
  * Checks every value in the array to ensure they are not a string.
  *
  * @param {number[]} numArray - An array of numbers.
  * @throws {TypeError} - Throws an error if any value in the array is not a number.
  */
  static #checkTypeObject(numArray) {
    for (let i = 0; i < numArray.length; i++) {
      if (typeof numArray[i] === 'object') {
        throw new TypeError(`You have entered the type object on index ${i}. The argument can only handle the type number.`)
      }
    }
  }

  /**
  * Checks every value in the array to ensure they are not a string.
  *
  * @param {number[]} numArray - An array of numbers.
  * @throws {TypeError} - Throws an error if any value in the array is not a number.
  */
  static #checkTypeBoolean(numArray) {
    for (let i = 0; i < numArray.length; i++) {
      if (typeof numArray[i] === 'boolean') {
        throw new TypeError(`You have entered the type boolean on index ${i}. The argument can only handle the type number.`)
      }
    }
  }

  /**
  * Checks every value in the array to ensure they are not a string.
  *
  * @param {number[]} numArray - An array of numbers.
  * @throws {TypeError} - Throws an error if any value in the array is not a number.
  */
  static #checkTypeUndefined(numArray) {
    for (let i = 0; i < numArray.length; i++) {
      if (typeof numArray[i] === 'undefined') {
        throw new TypeError(`You have entered the type undefined on index ${i}. The argument can only handle the type number.`)
      }
    }
  }

  /**
   * Checks if the argument is an array of numbers.
   *
   * @param {number[]} numArray - An array of numbers.
   * @throws {TypeError} - Throws an error if the input is not an array or contains non-number elements.
   */
  static checkInput(numArray) {
    if (!Array.isArray(numArray)) {
      throw new TypeError('The argument needs to be an Array.')
    } else if (numArray.length === 0) {
      throw new TypeError('The argument can not be empty')
    }
    this.#checkTypeString(numArray),  this.#checkTypeObject(numArray),  this.#checkTypeBoolean(numArray), this.#checkTypeUndefined(numArray)
  }
}