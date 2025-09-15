// two types 

/* 1. Primitive 
Sevem type : number , string , boolean , null , undefined , bigint, symbol
*/

/* 2. Reference ( Non-Primitive )
    array , objects, functions
    */

console.log("\n This is an array : ");
let heroes = ['Yash','Gunjan',"Diya"]
console.log(heroes,"\n");
console.log("Object list :");
let myObject =  {
    name : 'Yash',
    age : 21,
    gender : 'male'
}
console.log(myObject,"\n")

console.log("function called here");
const func = function(){
    console.log("Hello yash");
}
func();