
const user = {
    username : "yashdeep",
    age :21,
    welcome : function() {
        // console.log(`${this.username},welcome to website`)
        // console.log(this)
    }
}
user.welcome()
user.username = "yash"
user.welcome()
// console.log(this)

// function one() {
//     const username = "Yashdeep"
//     console.log(this.username); // this -> only used in the objects not in the functions like this way
//     console.log(username);
// }
// one()

const two = function(){
    let username = "yashdeep"
    // console.log(this.username)
    // console.log(this)
}
two()

const three = ()=>{   // this is known as arrow function
    let username = "yashdeep"
    // console.log(this.username)
    // console.log(this)
}
three()

const addTwo = (num1,num2)=>{   //basic arrow function
    return num1+num2
}
console.log(addTwo(3,4))

const addthree = (num1,num2,num3) => num1+num2+num3  //implicit return
console.log(addthree(1,2,3)) 