//call Signature-> refers to declaration or defination of a function, which includes function name, parameters and return type.it defines structure and type of a function without including the function's body 

//creating an method inside object
type Student = {
    name:string;
    age:number;
    gender?:string;
    greet : (country:string) => string; //call signature  
}
const student1:Student={
    name:"Chanchal",
    age:21,
    greet : (country)=>{
        return `I live in ${country}`
    }
    // rollno : 24
}
console.log(student1)
console.log(student1.greet("India"))
// console.log(student1.greet("India"));

const introduction = (student1:Student):string=>{
    const{name,age} = student1;
    return `Welcome My name is ${name} and age is ${age}yrs old`
}
