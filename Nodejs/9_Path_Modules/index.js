/*
suppose in forms you want to upload files whose extension is .txt or .pdf
in such cses we can use this module
find root dir, extension
refer documentation
*/

const path = require("path");
// console.log(path);

console.log(path.dirname('C:/Users/chanc/OneDrive/Desktop/WebDev/Nodejs/9_Path_Modules/index.js'))

const myPath = path.parse("C:/Users/chanc/OneDrive/Desktop/WebDev/Nodejs/9_Path_Modules/index.js");
console.log(myPath.root);