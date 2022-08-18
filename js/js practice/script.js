// var result = '';
// var i = 0;
// do {
//    i += 1;
//    result += i + ' ';
// }
// while (i > 0 && i < 5);
// // Despite i == 0 this will still loop as it starts off without the test

// console.log(result);



// let i = 0;
// do {
//   i += 1;
//   console.log(i);
// } while (i < 10);

//practice 1//
// for(let i=1; i<=10; i++){
//    console.log(i)
// }

// var i=1;  
// do{  
// console.log(i);  
// i++;  
// }while (i<=10);  


// var i=1;  
// while (i<=10)  
// {  
//    console.log(i); 
// i++;  
// }  

//practice 2//
// for(let i=10; i >=1; i--){
//    console.log(i);
// }




// var i=10;  
// do{  
// console.log(i);  
// i--;  
// }while (i>=1);  


// var i=10;  
// while (i>=1)  
// {  
//    console.log(i); 
// i--;  
// } 


// //practice3//

// let n=10;
// for(let i=1; i<=n; i++){
//    console.log(i);
// }


// //practice4//
// for(let i=1; i<=5; i++){
//    for(let j=1; j<=i; j++){
//       document.write('*');
//    }
//    document.write('<br/>')
// }


//practice 5//


let a = prompt ('Enter a number');
let range = prompt('enter a range');
for(let i=0; i<=range; i++){
   console.log(`${i} * ${i} = ${i * i}`)
}
