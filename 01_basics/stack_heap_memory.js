// stack memory => in which a copy of code will be assigned or given to the value
//  let us take an example of stack memory

let name = "yash"
let org_name = name

console.log("Printing name before change : ", name);

org_name = "yashdeep"

console.log("Printing name after change : ", name,"\n");
console.log("These both are same because it makes copy of these not changing the value in original copy ")

console.log("printing org name after modification : ",org_name,"\n")

// heap memory => in which the reference of the object is given to the variable or changes made in the original copy
// example of heap memory

let myObj = {
    email : "yash@gmail.com",
    pass : "123456"
}
let myObj2 = myObj
myObj2.email = "yash0904@gmail.com"
console.log("Printing email address of myObj after modify: ",myObj.email);
console.log("Printing email address of myObj2 after modify: ",myObj2.email,"\n");
console.log("These both are same because in heap memory reference of the memory is assigned so changes in one copy make changes in another one ")