const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages)
const min = ages[0]
const max = ages[ages.length - 1]

// find the median Age
const sumOfTwo = ages[ages.length/2] + ages[ages.length/2 - 1]
const median = sumOfTwo/2
console.log(median)

// Average Age
const totalAge = ages.reduce((a, b) => a+b)
const averageAge = totalAge / ages.length
console.log("Average age: ", averageAge)

// Age range
const range = ages[ages.length - 1] - ages[0]
console.log(range)

// min - average
console.log("Min-Average", Math.abs(min - averageAge))
console.log("Max-Average", Math.abs(max - averageAge))
