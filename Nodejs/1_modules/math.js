function add(a,b){
    return a+b;
}
//we need to export this function

function sub(a,b){
    return a-b;
}

//the scope of all elements with in a file is private
//using exports makesthe file public
// module.exports={
//     addFun : add,
//     subFun : sub,
// };


exports.mult = (a,b) => a*b;