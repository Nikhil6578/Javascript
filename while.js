//while loop
// var j=1;
// while(j<10){
//     console.log("j value is ",j);
//     j++;
// }

// var k=15;
// while(k>0){
//     console.log("k value is ",k);
//     k=k-3;
// }

//do while  --> it can run atleast one 
// var d=5;
// do{
//     console.log("initial iteration");
//     d--;
// }while(d<0);

// var d=7;
// do{
//     console.log("value of d",d);
//     d--;
// }while(d>0);

// var isExist;

// for(let i=0; i<10; i++){
//     if(i==3){
//         isExist=true;
//         break;
//     }
//     console.log(i);
// }



var counter =10;
console.log("old  value",counter);
for(let i=0; i<10; i++){
    if(i==3){
        
        counter=counter+1;
    }
    console.log("valoe of i",i);
}
console.log("upadation value",counter);

// var counter =10;
// console.log("old  value",counter);
// for(let i=0; i<10; i++){
//     if(i==3){
//         continue;
//     }
//     counter=counter+1;
//     console.log("valoe of i",i);
// }
// console.log("upadation value",counter);

var counter =10;
console.log("old  value",counter);
for(let i=0; i<10; i++){
    if(i==3){
        break;
    }
    counter=counter+1;
    console.log("valoe of i",i);
}
console.log("upadation value",counter);