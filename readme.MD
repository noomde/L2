# Statistics module

### 

# Features

- Convert your proportional-values to decimal-values and percentage-values.
- Easily make statistical calculations such as mean, median and mode.
- Easily sort your numbers ascening or descending (More easily than before).
- Allows you to measure mean in 3 different ways
- Allows you to make population and sample calculations.

## sum method

### Example
``` javascript
 const array1 = [5, 12, 8, 130, 44]
 console.log(Statistics.sum(array1))
 // Expected output: 199
```

### Description
### ----------------
### The sum() calculates the total sum of all numbers in the arguments array.

## sorByDescending method

### Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.sortByDescending(array1))
// Expected output: [130, 44, 12, 8, 5]
```

### Description
### The sortByDescending() Sorts the argument array from biggest to smallest number.

## sortByAscending method

### Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.sortByAscending(array1))
// Expected output: [5, 8, 12, 44, 130]
```

### Description
### ----------------
### The sortByAscending() Sorts the argument array from smallest to biggest number.

## mean method

### Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.mean(array1))
// Expected output: 39.8
```

### Description
### ----------------
### The mean() calculates the mean of the argument array. The mean is the average number.

## geometricMean method

### Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.geometricMean(array1))
// Expected output: ~19.40
```

### Description
### ----------------
### The geometricMean() calculates the geometric mean of the argument array.

## harmonicMean method

### Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.harmonicMean(array1))
// Expected output: ~11.40
```

### Description
### ----------------
### The harmonicMean() calculates the harmonic mean of the argument array.

## median method

### Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.median(array1))
// Expected output: 12
```

### Description
### ----------------
### The median() calculates the median of the argument array.

## convertToDecimal method

### Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.convertToDecimal(array1))
// Expected output: ~[0.0251, 0.0603, 0.0402, 0.6533,~0.2211]
```

### Description
### ----------------
### The convertToDecimal() calculates the decimal values of each number in the argument array.

## convertToPercentage method

### Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.convertToPercentage(array1))
// Expected output: ~[2.51%, .6.03%, ~4,02%, 65.33%, 22.11%]
```

### Description
### ----------------
### The convertToPercentage() calculates the percentage values of each number in the argument array.

## range method

### Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.range(array1))
// Expected output: 125
```

### Description
### ----------------
### The range() calculates the range of the argument array. The range is the difference between the smallest and the largest number.

## populationVariance method

### Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.populationVariance(array1))
// Expected output: ~2229.76
```

### Description
### ----------------
### The populationVariance() calculates the population variance of the argument array.

## sampleVariance method

### Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.sampleVariance(array1))
// Expected output: ~2787.2
```

### Description
### ----------------
### The sampleVariance() calculates the population variance of the argument array.

## sampleStandardDeviation method

### Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.sampleStandardDeviation(array1))
// Expected output: ~52.79
```

### Description
### ----------------
### The sampleStandardDeviation() calculates the sample StandardDeviation of the argument array.

## populationStandardDeviation method

### Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.populationStandardDeviation(array1))
// Expected output: ~47.22
```

### Description
### ----------------
### The populationStandardDeviation() calculates the population StandardDeviation of the argument array.

## mode method

### Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.mode(array1))
// Expected output: No mode available


const array2 = [5, 12, 8, 130, 44, 12]
console.log(Statistics.mode(array2))
// Expected output: 12
```

### Description
### ----------------
### The mode() calculates the mode of the argument array. The mode is the most occuring number.

## quartile method

### Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.quartile(array1))
// Expected output: [8, 44]
```

### Description
### ----------------
### The quartile() calculates the quartile of the argument array. The median of the lower quartile and the median of the higher quartile.

## interquartileRange method

### Example
``` javascript
const array1 = [5, 12, 8, 130, 44]
console.log(Statistics.quartile(array1))
// Expected output: 36
```

### Description
### ----------------
### The quartile() calculates the range between the lower and higher quartiel of the argument array. 

# CalculationsGuide Module

# Why Create a CalculationsGuide module

### I wanted to create a guide for users. This will allow user to get an easy to understand explanation on statistical methods explained earlier 

# Features

- Gives easy to understand definition for several statistical math equations.
- Gives easy to undertand steps for calculating these math equations.

# Usage examples and method descriptions

## meanGuide method

### Example
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

### Description
### ----------------
### The meanGuide() gives the user a object with the definition and steps on how to solve mean.

## medianGuide method

### Example
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

### Description
### ----------------
### The medianGuide() gives the user a object with the definition and steps on how to solve median.

## varianceGuide method

### Example
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

### Description
### ----------------
### The varianceGuide() gives the user a object with the definition and steps on how to solve variance.

## standardDeviationGuide method

### Example
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

### Description
### ----------------
### The standardDeviationGuide() gives the user a object with the definition and steps on how to solve standardDeviation.

## modeGuide method

### Example
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

### Description
### ----------------
### The modeGuide() gives the user a object with the definition and steps on how to solve mode.

## rangeGuide method

### Example
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

### Description
### ----------------
### The rangeGuide() gives the user a object with the definition and steps on how to solve range.

## geometricMeanGuide method

### Example
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

### Description
### ----------------
### The geometricMeanGuide() gives the user a object with the definition and steps on how to solve geometric mean.

## harmonicMeanGuide method

### Example
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

### Description
### ----------------
### The harmonicMeanGuide() gives the user a object with the definition and steps on how to solve harmonic mean.

## quartilesGuide method

### Example
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

### Description
### ----------------
### The quartilesGuide() gives the user a object with the definition and steps on how to solve quartile.

## interquartileRangeGuide method

### Example
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

### Description
### ----------------
### The interquartileRangeGuide() gives the user a object with the definition and steps on how to solve interquartile range.

# Installation

### Because both of these modules are in this repository you only need to do this ones. If you only want to use one you can just delete the other one from the files.

### Using Git:
### ----------------

### If you have Git installed, open your terminal (or command prompt) and run:

### git clone https://github.com/username/repository.git

### replace username and repository with the appropriate values.

### you can also get the appropriate url from github.
### Click the green "Code" button.
### Select "HTTPS".
### Copy the url from there.

### Direct Download as ZIP:
### ----------------

### Go to the GitHub repository in your web browser.
### Click the green "Code" button.
### Select "Download ZIP".
### This will download the repository as a zip file, which you can extract on your local machine.

### Using GitHub CLI:
### ----------------

### If you have the GitHub CLI installed, you can run:

### gh repo clone username/repository

# Licensing and contribution guidelines

### Copyright 2024 Anthon-Bäckström

### Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

### The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

### THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
