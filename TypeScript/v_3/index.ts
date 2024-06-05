/* We want addition of two numbers */

// function sum(a,b){
//     return a+b
// }

// console.log(sum(5,10))
// console.log(sum(5,"Chanchal"))

/*
tsc filename.ts   # Compile TypeScript to JavaScript
node filename.js  # Run the compiled JavaScript file
*/

//ignores duplicates 
// @ts-ignore
function sum(a:number,b:number):number{
    return a+b
}

console.log(sum(5,10))
// console.log(sum(5,"Chanchal"))

//TS cnfiguration file
//we say that until ts file becomes eror free you won't create js file
/*
"noEmitOnError": true,                        
unccoment this in tsconfig.json file
*/
