
for(let i =0; i<11; i++){
    // console.log(i);
}

//printing tables from 0 to 10

for(let i=0;i<11;i++){
    // console.log(`Printing table of ${i}`)
    for(let j=0;j<11;j++){
        // console.log(i+"*"+j+"="+i*j)
    }
}

const a = 5;
for(let i=1; i<=10; i++) {
    // console.log(`${a}*${i}=${a*i}`);
}

// for loop on arrays

const arr = ["Yash", "Yash", "Yash"]
for(let i=0; i<arr.length; i++){
    // console.log(arr[i])
}

// use of break and continue

for(let i=0; i<11; i++){
    if(i==5){
        // console.log("Detected error at 5");
        break;
    }
    // console.log(i);
}


for(let i=0; i<11; i++){
    if(i==5){
        // console.log("Detected error at 5");
        continue
    }
    // console.log(i);
}


// ------------******* While Loop ********--------------

let i=1;
while (i<11){
    // console.log(i)
    i = i+1;
}

myArray = ["Yashdeep", "Yashi","Yashu"]
let j = 0
while(j<myArray.length){
    // console.log(myArray[j]);
    j++
}

// do while loop

let score = 1
do{
    console.log(`Socre is ${score}`)
    score ++ 
} while(score<=5)
