// Remove all punctuations from the texts

let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text.split(/[\W*\s]/))
console.log(text.length)


// In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if (shoppingCart.indexOf("Meat") < 0) {
  shoppingCart.unshift("Meat")
}
if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar")
}
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea" 
console.log(shoppingCart)


// Check if the season is Autumn, Winter, Spring or Summer
const season = prompt("Which month is this? ").toLowerCase()
switch(season) {
  case "september":
    console.log("The season is Autumn")
    break
  case  "october":
    console.log("The season is Autumn")
    break
  case "november":
    console.log("The season is Autumn")
    break
  case "december":
    console.log("The season is winter")
    break
  case "january":
    console.log("The season is winter")
    break
  case "february":
    console.log("The season is Winter")
    break
  case "march":
    console.log("The season is Spring")
    break
  case "april":
    console.log("The season is Spring")
    break
  case "may":
    console.log("The season is Spring")
    break
  case "june":
    console.log("The season is Summer")
    break
  case "july":
    console.log('The season is Summer')
    break
  case "august":
    console.log("The season is Summer")
    break
  default: 
    console.log(`'${season}' is not a month of the year`)
}