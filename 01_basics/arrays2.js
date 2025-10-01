const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]

// arr1.push(arr2)
// console.log(arr1);

const newArr = arr1.concat(arr2)
console.log(newArr);

const new_Arr = [...arr1,...arr2]
console.log(new_Arr)

const array = [1,2,3,[4,5,6],7,8,[9,10,[11,12]]] 
const array2 = array.flat(Infinity)
console.log(array2)

let num1 = 100
let num2 = 101
let num3 = 102

console.log(Array.of(num1,num2,num3))