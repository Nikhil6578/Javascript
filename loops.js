

// for(let i=0; i<6; i++){
//     console.log(i);
// }
// for(let i=8; i>0; i--){
//     console.log(i);
// }

// var arr = [2,4,6,8];
// for(var i in arr){
//     console.log("array",i);
// }
// for(var i of arr){
//     console.log("array",i);
//}

//values read method(for of)
var name1 = ["Web Devalopment", "Mobile Application", "card1","card2"];
for(let i of name1){
    console.log(i);
}

//index value
for(let i in name1){
    console.log(i);
}


//pattern

// for(let i=0; i<3; i++){
//     for(let j=0; j<5; j++){
        
//     }
// }

//Function
function fetchdata(){
    console.log("Nikhil Vashist");
    console.log("Nikhil Vashist");
}
fetchdata();

function add(a,b){
    var c=a+b;
    console.log("add is ",c);
}
function sub(a,b){
    var c=a-b;
    console.log("sub is ",c);
}
function pricecalculator(no,price){
   
    console.log("total bill ",no*price);
}

add(23,27);
sub(34,24);
pricecalculator(5,13);


