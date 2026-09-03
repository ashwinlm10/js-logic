//! fibonacci series

// let a = 0
// let b = 1
// console.log(a);
// console.log(b);

// function fibonacci(n){
//     for(let i = 2; i < n; i++){
//         let c = a + b
//         console.log(c);

//         a = b
//         b = c
//     }
//     return n
// }
// fibonacci(7)

//!prime number

// let number = 17

// function prime(number){
//     if(number === 1 || number <= 1){
//         console.log("not a prime number");
//         return
//     }

//     let isPrime = true

//     for(let i = 2; i <= number / 2; i++){
//         if(number % i === 0){
//             isPrime = false
//             break
//         }
//     }
//     if(isPrime){
//         console.log("it is a prime number");
//     }else{
//         console.log("not a prime number");
//     }
// }
// prime(111)

//!palinfrome number

// let number = 123
// let original = number
// let reverse = 0

// while(number > 0){
//     let lastdigit =  number % 10 //divide the number

//     reverse = reverse * 10 + lastdigit //reverse the number

//     number = Math.floor(number / 10) //remove last digit

// }
// if(original == reverse){
//         console.log("it is a palindrome");
//     }else{
//         console.log("not a palindrome");

//     }
// console.log(reverse);

//!factorial of number

// function factorial(n){
//     let result = 1

//     for(let i = n; i >= 1; i--){
//         result *= i
//     }
//     return result
// }
// console.log(factorial(5));

//! amstrong number
let number = 153;
let original = number;
let result = 0;

while (number > 0) {
  let lastdigit = number % 10;

  let cube = lastdigit * lastdigit * lastdigit;

  result = result + cube;
  number = Math.floor(number / 10);
}
if (original == result) {
  console.log("it is amstrong number ");
} else {
  console.log("not an amstrong number");
}
