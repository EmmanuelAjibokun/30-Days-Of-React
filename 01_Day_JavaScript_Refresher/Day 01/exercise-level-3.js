const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages)
const min = ages[0]
const max = ages[-1]

// find the median Age
const sumOfTwo = ages[ages.length/2] + ages[ages.length/2 - 1]
const median = sumOfTwo/2
console.log(median)