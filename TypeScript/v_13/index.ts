//Objects
//normal js
/*
const person = {
    name : "Chanchal Wadhwa",
    age : 24,
    isStudent : true,
    address : {
        city : "Pune",
        country : "India"
    }
}
console.log(person)
console.log(person.address.city="MUmbai");
// console.log(person.age=true) //this will throw error
*/
const person:{
    name:string,
    age:number,
    isStudent : boolean,
    address:{
        city : string,
        country : string
    }
}= {
    name : "Chanchal Wadhwa",
    age : 24,
    isStudent : true,
    address : {
        city : "Pune",
        country : "India"
    }
}
console.log(person)