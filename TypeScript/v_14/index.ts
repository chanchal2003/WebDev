//Type Alias : name to a specific type or combination of types.
//allows you to reuse and refer to same type in different parts of your code
//better readability,organaization and abstraction of complex types

type Person = {
    name:string;
    age:number;
    isStudent : boolean;
    address:{
        city : string;
        country : string
    }
}

const person1 : Person = {
    name : "Chanchal Wadhwa",
    age : 24,
    isStudent : true,
    address : {
        city : "Pune",
        country : "India"
    }
}

const person2 : Person = {
    name : "Simran Wadhwa",
    age : 20,
    isStudent : false,
    address : {
        city : "Ahmednagar",
        country : "India"
    }
}