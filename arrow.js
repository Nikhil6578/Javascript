//Regular function // in this function hoisting is possible
console.log("ouput is ",a);

function add(a){
    return a*10;
}

var a= add(5);
console.log("ouput is ",a);

//Arrow Function  // in this function hoisting is not possible
// console.log("ouput is" , GiveNum(2));
var GiveNum= (a)=>{
    return a*10;
}
console.log("ouput is" , GiveNum(2));

//Function Expression 
// console.log("Output is ",cc(4)); // in this function hoisting is not possible (it give error)
var cc = function(a){
   return a*10;
}
console.log("Output is ",cc(4));

