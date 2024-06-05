/*
boolean type has only two datatype
*/
let isMyName:boolean = true;
function isDivisibleBy4and8(a:number):boolean{
    return (a%4==0 && a%8==0);
}
let num = 4;
console.log(isDivisibleBy4and8(4))

function isEven(num:number):boolean{
    return num%2==0;
}
let num1 = 6;
console.log(isEven(num));

/*
BigInt : it suports numbers that are larger than the range supported by th regular number 
*/

const maxNumber = Number.MAX_SAFE_INTEGER;
console.log(maxNumber)