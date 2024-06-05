// tsc --init -> creates config file
//TYPE ANNOTATION-> way of explicity defining data type and return type of a variable or a function

let myFavNum = 10;
// myFavNum = "Chanchal"
console.log(myFavNum.toString())

// let myFavNum:any = 10  
// myFavNum = "Chanchal"

// // DAY 4 Ts

// // question 1
// const longText: string = "This is the long string of the longText variable";

// const shortText: string = longText.substring(0,10);

// console.log("shortText:" ,shortText);

// // question 2

// const str1: string = "hello";
// const str2: string = "hi";

// const areEqual: boolean = (str1 == str2) ;

// console.log("areEqual: ",areEqual);

// // question 3

// const product: string = "Biscut";
// const price: number = 34;

// console.log(`The product ${product} is priced at ${price} dollars.`)

// //question 4
let text = "pls be there,don't leave"
let upperCase = text.toUpperCase();
let lowerCase = text.toLowerCase();
console.log(upperCase);
console.log(lowerCase);