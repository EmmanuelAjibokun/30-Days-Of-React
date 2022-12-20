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


// Write a program which tells the number of days in a month
const month = prompt("Enter a month: ").toLowerCase()
switch(month) {
  case "september":
    console.log("September has 30 days.")
    break
  case "april":
    console.log("April has 30 days.")
    break
  case "june":
    console.log("June has 30 days.")
    break
  case "november":
    console.log("November has 30 days.")
    break
  case "february":
    console.log("February has 28 days.")
    break
  default: 
    console.log(`${month} has 31 days`)
  
}