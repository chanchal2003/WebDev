var greet = function (name, id) {
    if (id) {
        return "Welcome ".concat(name, ", your id is ").concat(id);
    }
    else {
        return "Welcome ".concat(name);
    }
};
var result1 = greet("Gautam");
console.log(result1);
var result2 = greet("Chanchal", 123);
console.log(result2);
