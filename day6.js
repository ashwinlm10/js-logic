//! find the hcf

// function gcd(a,b){
//     let gcd = 1

//     for(let i = 1; i <= Math.min(a,b); i++){
//         if(a % i === 0 && b % i === 0){
//             gcd = i
//         }
//     }
//     return gcd
// }
// console.log(gcd(12,18));

//! lcm

// function lcm(a,b){

//     for(let i = Math.max(a,b); i++;){
//         if(i % a === 0 && i % b === 0){
//             return i
//         }
//     }
// }
// console.log(lcm(4,6));

//! reverse a number

// let number = 123
// let original = number
// let reverse = 0

// while(number > 0){
//     let lastDigit = number % 10
//     reverse = reverse * 10 + lastDigit
//     number = Math.floor(number / 10)
// }
// console.log(reverse);

//!sum of digits

// function sum(number){
//     let sum = 0

//     while(number > 0){
//         sum += number % 10
//         number = Math.floor(number / 10)
//     }
//     return sum
// }
// console.log(sum(1234));


//! count the digit

// function countDigit(number){
//     let count = 0

//     while(number > 0){
//         count = count + 1
//         number = Math.floor(number / 10)
//     }
//     return number
// }
// console.log(countDigit(12345));



let number1 = 10 
let number2 = 25
let number3 = 15

if(number1 > number2 && number1 > number3){
    console.log("number 1 is largest");
}else if(number2 > number3 && number2 > number1){
    console.log("nuber2 is largest");
} else{
    console.log("number 3 is greater");
    
}
