// Allows you to store fixed sized collection of elements of different types

//readonly -> In TypeScript, the readonly modifier is used to indicate that a property should not be modified after it is initially set. 
type PersonInfo  = readonly[string,number];
const per1 : PersonInfo = ["Chanchal",1];
console.log(per1);

per1.push("Gautam")
console.log(per1);

// per1.push(true);