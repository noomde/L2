export class varianceCalculations {
  /**
   * Subtracts the arguments mean from each number.
   *
   * @param {number[]} numArray - An array of numbers.
   * @param {number} mean - The mean of numArray.
   * @returns 
   */
  subtractMean(numArray, mean) {
    let numArrayCopy = [...numArray]
    for (let i = 0; i < numArrayCopy.length; i++) {
      numArrayCopy[i] - mean
    }
    return numArrayCopy
  }

  squareDifference(numArray) {
    let numArrayCopy = [...numArray]
    for (let i = 0; i < numArrayCopy.length; i++) {
      numArrayCopy[i] ** 2
    }
    return numArrayCopy
  }

  calculateSampleVariance(numArray) {

  }

  calculatePopulationVariance(numArray) {

  }
}