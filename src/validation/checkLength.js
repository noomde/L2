export function checkLength(array) {
  if (array.length === 1) {
    throw new Error('The length of the array can not be 1 or shorter.')
  }
}