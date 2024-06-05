const arr = ["Chanchal","Rakesh","Simra"]

for (const index in arr) {
    console.log(index);
}

for (const value of arr) {
    console.log(value);
}

const arr1:number[] = [1,2,3,4,5]
let sum = 0;
function calculateAvg(arr1:number[]){
    for(const element of arr1){
        sum += element;
    }
    let n = arr1.length;
    return sum/n
}

console.log(calculateAvg(arr1));

const arr2:number[] = new Array(2,4,6,10);

// const name1:string[] = Array.of("Chanchal","Ruchika","Simran");
// const nameArray = Array.of(1,2,3);

// console.log(nameArray); // Output: ["Chanchal", "Ruchika", "Simran"]
/*
syntax forEach
array_name.forEach(function(){

})
*/

let maxVal = 0;
function calculateMax(arr1:number[]){
    arr1.forEach((curval)=>maxVal=Math.max(maxVal,curval));
}

console.log(calculateMax);

/*
Syntax for fat arrow function
(paramters)=>{}
Yes, when you declare a fat arrow function in JavaScript, you need to use the const, let, or var keyword to indicate the type of variable (constant, block-scoped, or function-scoped) that will store the function.

Here are examples using cons
*/
