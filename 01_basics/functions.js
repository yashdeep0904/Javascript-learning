function myName() {
    console.log(`Yashdeep ${`Dhankhar`}`)
}
myName()

// console.log(`Yashdeep ${`dhankhar`}`)

function add(num1,num2) {
    console.log(num1+num2);
}

// add(2,3)
// add(3,"4")
// add(2,null)

function add1(num1,num2){
    let ans = num1+num2
    return ans
}
const result = add1(1,2)
console.log("Result : ", result);


// function userLoggedIn(username){
//     return `${username} just logged in `
// }
// console.log(userLoggedIn("Yashdeep"))

function userLoggedIn(username){
    if(username === undefined){   //another way to code this ----->>>>    if(!username){}
        console.log("enter the username");
        return
    }
    return `${username} just logged in `
}
console.log(userLoggedIn())

function cartPrice(...num1){
    return num1
}
console.log(cartPrice(1,2,4,5,2,12));

const user = {
    Item : "Kurkure",
    price : 20
}
function handleObject(anyObject){
    console.log(`item is ${anyObject.Item} and its price is ${anyObject.price}`)
}
handleObject(user)