const name = "Yashdeep"
for (const i of name) {
    // console.log(`Each char is ${i}`);   
}

const map = new Map() 
map.set('In',"India")
map.set('USA',"Unites States of America")
map.set('Fr',"France")

// console.log(map)
for (const [key,value] of map) {
    // console.log(key,"->",value)
}

const myObj = {
    game1 : "NFS",
    game2 : "Moto GP"
}

// for (const [key,value] of myObj) {
//     console.log(key,"->",value)            ---->>>>     // myObj is not iterable through this method
// }

const myObj2 = {
    js : "javascript",
    cpp : "C++", 
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObj2) {
    // console.log(`${key} is a shortcut of ${myObj2[key]}`)
        
}

const myArr = [1,2,3,4]

for (const key in myArr) {
    // console.log(key);
    // console.log(myArr[key])
}

for (const key in map) {
    // console.log(key);  // not iterable
    // console.log( );
}

//applying for each loop on this array

myArr.forEach(function (value){
    // console.log(value);         
}) 

// printing this function by arrow function
myArr.forEach((item)=>{
    // console.log(item);
})

const myCoding = [
    {
        languageName : "javascript",
        languageFile : "js"
    },
    {
        languageName : "java",
        languageFile : "java"
    },
    {
        languageName : "c++",
        languageFile :"cpp"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})



