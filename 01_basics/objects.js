

const mySym = Symbol("key1")
const myObj = {
    name : "Yashdeep",
    age : 21,
    gender : "male",
    email : "yash@gmail.com",
    loggedIn : false,
    mySym : "mykey1",
    [mySym]: "mykey2"
}
console.log(myObj.name)
console.log(myObj["name"])
console.log(myObj.mySym)
console.log(typeof myObj.mySym)
console.log(myObj[mySym])
console.log(typeof myObj[mySym])

console.log(myObj);

Object.freeze(myObj.name)
myObj.name = "Yashu"
myObj.age = 20
console.log(myObj.name);
console.log(myObj.age);


//  methods to declare objects

const tinderUser = {}// first method
console.log(tinderUser);

const tinderUser2 = new Object() // second method
console.log(tinderUser2);

tinderUser.id = "123abc"
tinderUser.name = "Yash"
console.log(tinderUser);

const regularUser = {
    fullname : {
        userfullname : {
            firstname : "Yashdeep",
            lastname : "Dhankhar"
        }
        }
    }
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

// combining the arrays

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}

const obj3 = {obj1,obj2}
console.log(obj3);

const obj4 = Object.assign({},obj1,obj2)
console.log(obj4);

const obj5 = {...obj1,...obj2}
console.log(obj5);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))

const course = {
    course_name : "Gate course",
    price : "1999",
    instructor : "yashdeep"
}
const {instructor} = course
console.log(instructor);
