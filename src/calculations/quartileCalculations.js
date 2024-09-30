export function getUpperQuartile(sortedArray) {
  if (sortedArray.length % 2 === 0) {
    return sortedArray.slice(Math.floor(sortedArray.length / 2))
  } else {
    return sortedArray.slice(Math.floor(sortedArray.length / 2) + 1)
  }
}