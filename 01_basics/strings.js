const name = "Yash"
const repoCount = 9;

console.log(name + "deep" + repoCount); // this syntax is outdated

console.log(`My name is ${name+`deep`} and my repoCount is ${repoCount}`);

// declartion of string with new method or we can say modern or other method

const new_name = new String('Yashdeep')
console.log(new_name)
console.log("Length of string : ",new_name.length)
console.log(new_name.toUpperCase())
console.log("if we want to know the character at specific index : ",new_name.charAt(2));

console.log("If we want to print substring of the string : ",new_name.substring(0,4))

const hero = "    Yashi     "   ;
console.log("if we want to remove extra spaces from the string we use trim() :",hero.trim())