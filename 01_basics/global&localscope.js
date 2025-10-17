
// let a = 10
// const b = 20
// var c = 30

// the are global scope variables
// we can access them anywhere in the code

{
    let a = 10
    const b = 20
    var c = 30
}
// console.log(a)       //this is not accessible outside the scope
// console.log(b)      //this is also not accessible
// console.log(c)     //as var is a bad practice it can be accessible outside the scope

function one() {
    const username = "yashdeep"

    function two(){
        const website ="youtube"
        console.log(username);
    }
    // console.log(website)  //**  it is not accessible bcoz outside the scope
    two()
}
one ()

if(true){
    const username = "yashdeep" 
    if(true){
        const website = "youtube"
        console.log(username+website);
    }
}

function first(num) {
    return num+1
}
console.log(first(5));

const addtwo = function second(num){
    return num +2
}
addtwo(5)
console.log(addtwo(5))
// console.log(addtwo.second(5));
