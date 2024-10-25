# Features

- Gives easy to understand definition for several statistical math equations.
- Gives easy to undertand steps for calculating these math equations.

## meanGuide method

Example
``` javascript
 console.log(CalculationsGuide.meanGuide(array1))
 /**
  * Expected output:
  * {
      definition: 'The mean is the average number in a set of numbers.',
      steps: [
        'Add all numbers together.',
        'Divide the sum with the amount of numbers in the set.'
      ]}
  * 
  *  
```

Description
----------------
The meanGuide() gives the user a object with the definition and steps on how to solve mean.

## medianGuide method

Example
``` javascript
 console.log(CalculationsGuide.medianGuide(array1))
 /**
  * Expected output:
  * {
      definition: 'The median is the middle number in an ordered set of numbers. If the set is an even amount, the median is the average of the 2 middle numbers.',
      steps: [
        'Sort the numbers from smallest to biggest or biggest to smallest.',
        'The median number is the number in the middle. If it is an even amount then the median is the average of the 2 middle numbers.'
      ]}
  * 
  *  
```

Description
----------------
The medianGuide() gives the user a object with the definition and steps on how to solve median.

## varianceGuide method

Example
``` javascript
 console.log(CalculationsGuide.varianceGuide(array1))
 /**
  * Expected output:
  * {
      definition: 'Standard deviation is the measure to see how far each numbers are from the mean. However compared to variance this is the squared root of the number.',
      steps: [
        'Calculate the variance.',
        'square root the variance number.'
      ]}
  * 
  *  
```

Description
----------------
The varianceGuide() gives the user a object with the definition and steps on how to solve variance.

## standardDeviationGuide method

Example
``` javascript
 console.log(CalculationsGuide.standardDeviationGuide(array1))
 /**
  * Expected output:
  * {
      definition: 'Standard deviation is the measure to see how far each numbers are from the mean. However compared to variance this is the squared root of the number.',
      steps: [
        'Calculate the variance.',
        'square root the variance number.'
      ]}
  * 
  *  
```

Description
----------------
The standardDeviationGuide() gives the user a object with the definition and steps on how to solve standardDeviation.

## modeGuide method

Example
``` javascript
 console.log(CalculationsGuide.modeGuide(array1))
 /**
  * Expected output:
  * {
      definition: 'The mode is the most frequent number in a set of numbers. This number can be more than 1.',
      steps: [
        'Count how many times each number appears.',
        'The number/numbers that appears most is the mode.'
      ]}
  * 
  *  
```

Description
----------------
The modeGuide() gives the user a object with the definition and steps on how to solve mode.

## rangeGuide method

Example
``` javascript
 console.log(CalculationsGuide.rangeGuide(array1))
 /**
  * Expected output:
  * {
      definition: 'The range is the difference between the biggest and the smallest number in a set of numbers.',
      steps: [
        'Subtract the smallest number from the biggest number.'
      ]}
  * 
  *  
```

Description
----------------
The rangeGuide() gives the user a object with the definition and steps on how to solve range.

## geometricMeanGuide method

Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(CalculationsGuide.geometricMeanGuide(array1))
 /**
  * Expected output:
  * {
      definition: 'The geometric mean is the nth root of the average number in a set of numbers.',
      steps: [
        'Multiply all numbers in the set together.',
        'Take the nth root of the average, n is the amount of numbers.'
      ]}
  * 
  *  
```

Description
----------------
The geometricMeanGuide() gives the user a object with the definition and steps on how to solve geometric mean.

## harmonicMeanGuide method

Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(CalculationsGuide.harmonicMeanGuide(array1))
 /**
  * Expected output:
  * {
      definition: 'The harmonic mean is the reciprocal of the mean of the reciprocals of the numbers in the set',
      steps: [
        'calculate each numbers reciprocal (1 divided by the number).',
        'Add all the reciprocals together.',
        'Divide the amount of numbers by the sum of the reciprocals.'
      ]}
  * 
  *  
```

Description
----------------
The harmonicMeanGuide() gives the user a object with the definition and steps on how to solve harmonic mean.

## quartilesGuide method

Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(CalculationsGuide.quartilesGuide(array1))
 /**
  * Expected output:
  * {
      definition: 'Quartiles divide a set of numbers into four equal parts. The first quartile is the 25th percentile, the second quartile is the median, and the third quartile is the 75th percentile.',
      steps: [
        'Sort the numbers in ascending order.',
        'To find quartile 1, find the median of the lower half of the number set. (This shold not include the median of the full number set)',
        'To find quartile 2, calculate the median of the full number set.',
        'To find quartile 3, find the median of the upper half of the number set. (This shold not include the median of the full number set)',
        'To find quartile 4, find the biggest number in the number set.'
      ]}
  * 
  *  
```

Description
----------------
The quartilesGuide() gives the user a object with the definition and steps on how to solve quartile.

## interquartileRangeGuide method

Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(CalculationsGuide.interquartileRangeGuide(array1))
 /**
  * Expected output:
  * {
      definition: 'The interquartile range is a measure of statistical dispersion. It is the range between quartile 3 and quartile 1.',
      steps: [
        'Calculate quartile 1 and quartile 3 as described in the quartile guide.',
        'Subtract quartile 1 from quartile 3 to get the interquartile range.'
      ]}
  * 
  *  
```

Description
----------------
The interquartileRangeGuide() gives the user a object with the definition and steps on how to solve interquartile range.