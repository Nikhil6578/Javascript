console.log("Welcome to js one program")

var a =3;  //Global varaiable
console.log(a);
function test(){
    console.log("free function");
    let d=2; //Function varaiable
}
//console.log("Value of d is ", d)  // ye function k bhar print nahi hoga
//console.log("Value of a is ", a)  // ye bhar print hoga
test();

var c =3;
if(c==3){
    let w=3; // let block bhar print nahi hoga
    var r =3 // var block k bhar bhi print hoga
}
//console.log("Value of w is",w);
// console.log("Value of r is",r);
let w =4;  // isne w ki value ko override kr diya
console.log("Value of w is",w);

var value =23;
function aaa(){
    let ddd=34; // ye function k bhar print nahi hoga
    var dd=34; // ye function k bhar print nahi hoga (ye block level hi kaam in function)
    value=112;  // iski value update nahi hogi function k under
}
// console.log("Value of ddd is",ddd);
console.log(value);

//constant
const finalvalue =100;
//finalvalue=12;  // const ki value update nahi hogi na hi override hogi 
console.log(finalvalue);

// let,var
var f=4;
var f =5; // var apni value ko updation dono kr skta or re -declaration kr skte h
f=10;
console.log(f);

let u=9;
// let u=10;
u=10; // let apni value ko update kr skta  or re -declaration nahi kr skte h
console.log(u)

let y;
var o;
const j=10;//const ko value dena jureri h
