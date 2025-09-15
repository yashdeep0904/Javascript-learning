let score = 33
console.log(typeof score) 
console.log("After converting no to string"); 
let value = String(score)
console.log(typeof value) 

let score1= "33abc"
console.log(typeof score1 )
console.log("After converting string to number"); 
let value1 = Number(score1)
console.log(typeof value1) 
console.log(value1)

/* "33" => 33
    "33abc" => nan
    true => 1; false => 0;
    null => 0;
*/ 
let loggedIn = 0
let userLoggedIn = Boolean(loggedIn)
console.log(userLoggedIn);

//  --------------------------OPERATIONS--------------------
console.log("Start learning operations from here ")

let a = 3
let neg_a = -a
console.log(neg_a);

console.log("Perfoming various algebric operations in below table")
console.table([2+3,3-2,2*3,3/2,2%3])

let str1 = "Yash"
let str2 = "deep"
console.log("After adding two strings : ")
console.log(str1+str2);

console.log("Some additon rules of string and number");
console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1+ 2 + "2")

console.log("Some operations on the boolean values : "); // these are bad practice just remember for knowledge not for use
console.log(true);
console.log(+true);
console.log(+"");

console.log("Prefix and post operators");
let gameCounter = 100
++gameCounter
console.log(gameCounter);
gameCounter++
console.log(gameCounter)