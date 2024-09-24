export class varianceCalculations {
  /**
   * Subtracts the arguments mean from each number.
   *
   * @param {number[]} numArray - An array of numbers.
   * @param {number} mean - The mean of numArray.
   * @returns 
   */
  static subtractMean(numArray, mean) {
    let numArrayCopy = [...numArray]
    for (let i = 0; i < numArrayCopy.length; i++) {
      numArrayCopy[i] - mean
    }
    return numArrayCopy
  }

  static squareDifference(numArray) {
    let numArrayCopy = [...numArray]
    for (let i = 0; i < numArrayCopy.length; i++) {
      numArrayCopy[i] ** 2
    }
    return numArrayCopy
  }

  static calculateSampleVariance(numArray) {
    let divident
    for (let number of numArray) {
      divident += number
    }
    return divident / (numArray.length - 1)
  }
}