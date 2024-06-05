var arr = ["Chanchal", "Rakesh", "Simra"];
for (var index in arr) {
    console.log(index);
}
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var value = arr_1[_i];
    console.log(value);
}
var arr1 = [1, 2, 3, 4, 5];
var sum = 0;
function calculateAvg(arr1) {
    for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
        var element = arr1_1[_i];
        sum += element;
    }
    var n = arr1.length;
    return sum / n;
}
console.log(calculateAvg(arr1));
var arr2 = new Array(2, 4, 6, 10);
// const name1:string[] = Array.of("Chanchal","Ruchika","Simran");
// const nameArray = Array.of(1,2,3);
// console.log(nameArray); // Output: ["Chanchal", "Ruchika", "Simran"]
/*
syntax forEach
array_name.forEach(function(){

})
*/
var maxVal = 0;
function calculateMax(arr1) {
    arr1.forEach(function (curval) { return maxVal = Math.max(maxVal, curval); });
}
console.log(calculateMax);
/*
Syntax for fat arrow function
(paramters)=>{}
Yes, when you declare a fat arrow function in JavaScript, you need to use the const, let, or var keyword to indicate the type of variable (constant, block-scoped, or function-scoped) that will store the function.

Here are examples using cons
*/
