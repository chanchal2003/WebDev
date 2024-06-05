console.log("Hello world")

/*this gives error when we use node where as it won't give error when we run on chrome browser. now this is because while node was getting formed using v8 engine and c++ they removed the components that we used to make ui that is the dom manipulation and ui objects
only core concepts required for server side programing we kept and new features such as cryptography and many other were added 

npm stands for node package manager
npm init -> makes a template or a files that helps to run file
package.json -> configuration file 

*/

// console.log(window) 

// this is one module
// you can split your code into different modules
//now as in js we use import in c++ we use #include in the similar way in nodejs we use require

// in require we need to write the file location, it has many in built packages that we can we for inbuilt pacakges we do not need tomention the path
// const math = require('./math'); //imports math file
// console.log(math.addFun(2,4));
// console.log(math.subFun(8,2));

//we can use destructing as well

// const {addFun,subFun} = require('./math')
// console.log(addFun(9,8));

const math = require('./math');
console.log(math.mult(3,4));

//nodejs has built.in modules 

//long story short
// modules,require and export
// require -> import
// module.export -> export
// in require -> ./ current working dir
// and if we directly start then we make use of inbuilt packages or external packages
 
