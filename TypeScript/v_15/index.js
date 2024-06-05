//call Signature-> refers to declaration or defination of a function, which includes function name, parameters and return type.it defines structure and type of a function without including the function's body 
var student1 = {
    name: "Chanchal",
    age: 21,
    greet: function (country) {
        return "I live in ".concat(country);
    }
};
console.log(student1);
// console.log(student1.greet("India"));
var introduction = function (student1) {
    var name = student1.name, age = student1.age;
    return "Welcome My name is ".concat(name, " and age is ").concat(age, "yrs old");
};
