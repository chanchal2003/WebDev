//generics: Generics in TypeScript allow you to create reusable components or functions that can work with multiple data types
//  Generics play a important role in making our code more flexible and reusable, thus improve our programming efficiency. In this tutorial, we will see what generics are and how they address the limitations of the existing programming approach and how Generics goanna solve it. 
function logAndRetrun<Chanchal>(value:Chanchal):Chanchal{
    return value;
}
const val = logAndRetrun<number>(1);
console.log(val)
console.log(logAndRetrun("Chanchal"));
logAndRetrun(1);