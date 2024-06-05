// module for writing file, it helps in interacting with files
const fs = require("fs");

// creates file 

fs.writeFileSync("./file1.txt","sync files");
   
// Write content to the file, sync means it is a synchronous call 
// (path,content) 

// fs.writeFile("./file.txt", "Async", (err) => {
//     if (err) {
//       console.error("Error writing file:", err);
//     } else {
//       console.log("File written successfully.");
//     }
//   });

// this will override the same file
// fs.writeFile("./file.txt","the file has been overriden",(err)=>{
//     if(err){
//         console.log("Your code throws error",err);
//     }
//     else{
//         console.log("File overriden successfully.");
//     }
// })

//it gives you answer in one varaiable and it then returns it to you
// https://chat.openai.com/share/e9370099-9cb9-44c4-853c-e71792865f1c
const res = fs.readFileSync("./file1.txt","utf-8");
console.log(res);

fs.readFile("./file1.txt","utf-8",(err,res)=>{
    if(err){
        console.log("Error : ",err);
    }
    else{
        console.log(res); 
    }
})

fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
// // console.log(res2);

//copy the file
fs.cpSync("./test.txt","./copy.txt");

//delete the file : once the file is deleted it will show error 
// fs.unlinkSync('./copy.txt');

//this will give the properties of  the file
console.log(fs.statSync('./test.txt').isFile());

//this will only create one directory, once created if you run the same code again it will throw error
// fs.mkdirSync("my-docs1")

//using recursive it will create multiple folders recursively
fs.mkdirSync("my-docs2/a/b",{recursive:true})

// we cannot do this in normal js