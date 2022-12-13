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