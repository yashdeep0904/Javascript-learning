const score = 100
console.log(score)

const balance = new Number(100)
console.log(balance);

console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(3))  // toFixed is used for adding the zeroes after decimal points 
const otherNumber = 13.238
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In'))


// ---------------------------MATHS-------------------------------

console.log("\nStating maths from here ");
console.log(Math);

console.log(Math.abs(-5));
console.log("Rounding of the digit: ",Math.round(5.3));
console.log("Finding min value of the array : ",Math.min(2,4,2,1,5))
console.log((Math.random()*10).toFixed(0))

const min =50
const max = 200
console.log(Math.floor(Math.random()*100)+min)