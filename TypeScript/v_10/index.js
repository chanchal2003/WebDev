var numbers = [1, 2, 3, 4, 5, 6];
//the mapmethod transforms each element and return a new array with transformed values
//https://www.freecodecamp.org/news/map-filter-reduce-in-javascript/
// Doubling each number
var doubleData = numbers.map(function (curVal) {
    return curVal * 2;
});
console.log(numbers);
console.log(doubleData);
//number to string
var conv = numbers.map(function (curval) {
    var converted = curval.toString();
    return converted;
});
console.log(conv);
//filter -> elminates valeues
var even = numbers.filter(function (curval) {
    return curval % 2 == 0;
});
console.log(even);
// The reduce() method reduces an array to a single value by performing the desired operation on the elements collectively.
//array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
var sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 15
