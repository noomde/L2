## sum method

Example
``` javascript
 const array1 = [5, 12, 8, 130, 44]
 console.log(Statistics.sum(array1))
 // Expected output: 199
```

Description
----------------
The sum() calculates the total sum of all numbers in the arguments array.

## sorByDescending method

Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.sortByDescending(array1))
// Expected output: [130, 44, 12, 8, 5]
```

Description
----------------
The sortByDescending() Sorts the argument array from biggest to smallest number.

## sortByAscending method

Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.sortByAscending(array1))
// Expected output: [5, 8, 12, 44, 130]
```

Description
----------------
The sortByAscending() Sorts the argument array from smallest to biggest number.

## mean method

Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.mean(array1))
// Expected output: 39.8
```

Description
----------------
The mean() calculates the mean of the argument array. The mean is the average number.

## geometricMean method

Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.geometricMean(array1))
// Expected output: ~19.40
```

Description
----------------
The geometricMean() calculates the geometric mean of the argument array.

## harmonicMean method

Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.harmonicMean(array1))
// Expected output: ~11.40
```

Description
----------------
The harmonicMean() calculates the harmonic mean of the argument array.

## median method

Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.median(array1))
// Expected output: 12
```

Description
----------------
The median() calculates the median of the argument array.

## convertToDecimal method

Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.convertToDecimal(array1))
// Expected output: ~[0.0251, 0.0603, 0.0402, 0.6533,~0.2211]
```

Description
----------------
The convertToDecimal() calculates the decimal values of each number in the argument array.

## convertToPercentage method

Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.convertToPercentage(array1))
// Expected output: ~[2.51%, .6.03%, ~4,02%, 65.33%, 22.11%]
```

Description
----------------
The convertToPercentage() calculates the percentage values of each number in the argument array.

## range method

Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.range(array1))
// Expected output: 125
```

Description
----------------
The range() calculates the range of the argument array. The range is the difference between the smallest and the largest number.

## populationVariance method

Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.populationVariance(array1))
// Expected output: ~2229.76
```

Description
----------------
The populationVariance() calculates the population variance of the argument array.

## sampleVariance method

Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.sampleVariance(array1))
// Expected output: ~2787.2
```

Description
----------------
The sampleVariance() calculates the population variance of the argument array.

## sampleStandardDeviation method

Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.sampleStandardDeviation(array1))
// Expected output: ~52.79
```

Description
----------------
The sampleStandardDeviation() calculates the sample StandardDeviation of the argument array.

## populationStandardDeviation method

Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.populationStandardDeviation(array1))
// Expected output: ~47.22
```

Description
----------------
The populationStandardDeviation() calculates the population StandardDeviation of the argument array.

## mode method

Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.mode(array1))
// Expected output: No mode available


const array2 = [5, 12, 8, 130, 44, 12]
console.log(Statistics.mode(array2))
// Expected output: 12
```

Description
----------------
The mode() calculates the mode of the argument array. The mode is the most occuring number.

## quartile method

Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.quartile(array1))
// Expected output: [8, 44]
```

Description
----------------
The quartile() calculates the quartile of the argument array. The median of the lower quartile and the median of the higher quartile.

## interquartileRange method

Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.interquartileRange(array1))
// Expected output: 36
```

Description
----------------
The interquartileRange() calculates the range between the lower and higher quartile of the argument array. 