console.log("Hi yashi")

const myArr = [1,2,3,4,5]
console.log(myArr);

const myHeroes = ['Yash','Gunjan','Puchu']
console.log(myHeroes);
myHeroes.push('Sumo')    //add the value in the array
console.log(myHeroes);
myArr.pop()              // removes the last value from the array
console.log(myArr);

myArr.unshift(10) // add the value at index 0 in the array
myArr.shift()   // removes the value from index 0 in the array
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));


console.log(myArr);
console.log(typeof myArr);
const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr,"\n");

//     --------------Slice and Splice concept------------------
console.log("Slice and splice concept\n");
const myn1 = myArr.slice(1,3)
console.log("A",myArr);
console.log(myn1);

const myn2 = myArr.splice(1,3)
console.log("B",myArr);
console.log(myn2);
