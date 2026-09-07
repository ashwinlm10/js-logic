// function secLargest(arr) {
//   let largest = arr[0];
//   let secondlargest = arr[1];
// //   let current = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let current = arr[i]
//     if (current > largest) {
//       secondlargest = largest;
//       largest = current;
//     }else if(current > secondlargest){
//         secondlargest = current
//     }
//   }
//   return secondlargest;
// }
// console.log(secLargest([5, 12, 7, 18, 25, 30, 11, 40]));

// function arrlargest(arr){
//     let largest = arr[0]
//     for(let i = 0; i < arr.length; i++){
//         let current = arr[i]
//         if(current < 20 && current > largest){
//             largest = current
//         }
//     }
//     return largest
// }
// console.log(arrlargest([4, 9, 2, 15, 7, 20, 11]));

// function largest(arr){
//     let largest = arr[0]

//     for(let i = 0; i < arr.length; i++){
//         let current = arr[i]

//         if(current < 20 && current > largest){
//             largest = current
//         }
//     }
//     return largest
// }
// console.log(largest([4, 9, 2, 15, 7, 20, 11]));

// function smallest(arr){
//     let smallest = arr[0]

//     for(let i = 0; i < arr.length; i++){
//         let current = arr[i]
//         if(current > 10 && current < smallest){
//              smallest = current
//         }
//     }
//     return smallest
// }
// console.log(smallest([12, 5, 18, 7, 25, 3, 20]));

// function even(arr){
//     let largst = arr[0]

//     for(let i = 0; i < arr.length; i++){
//         let current = arr[i]
//         if(current % 2 == 0 && current > largst){
//             largst = current
//         }
//     }
//     return largst
// }
// console.log(even([3, 17, 8, 25, 12, 30, 6]));

// function smallest(arr) {
//   let smallest = Infinity

//   for (let i = 0; i < arr.length; i++) {
//     let current = arr[i];
//     if (current > 10 && current % 2 == 0 && current < smallest) {
//       smallest = current;
//     }
//   }
//   return smallest;
// }
// console.log(smallest([5, 12, 7, 20, 15, 30, 8, 25]));

//! Reverse a string

// function stringreverse(str){
//     let reversed = ""

//     for(let i = str.length - 1; i >= 0; i--){
//         reversed += str[i]
//     }
//     return reversed
// }
// console.log(stringreverse("ashwin"));

//! even or odd

// function oddEven(num) {
//   if (num % 2 == 0) {
//     return "it is an even number";
//   } else {
//     return "it is an odd number";
//   }
// }
// console.log(oddEven(23));

//!Largest Number in an Array

// function largest(arr) {
//   let largest = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }
// console.log(largest([1, 2, 3, 4, 5, 7]));

//! count vowel

// function vowel(str) {
//   let vowel = "aeiouAEIOU";
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (vowel.includes(str[i])) count++;
//   }
//   return count;
// }
// console.log(vowel("kavyashreeGP"));

//! string is palindrome or not

// function palindrome(str) {
//   let reversed = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   if (str == reversed) {
//     console.log("it is an palindrome");
//   } else {
//     console.log("not an palindrome");
//   }
//   return reversed;
// }
// palindrome("ashin");

//! Sum of numbers from 1 to N.

// function sumofN(n) {
//   let sum = 0;

//   for (let i = 0; i <= n; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }
// console.log(sumofN(5));

//! remove duplicate from an array

function removedup(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (!result.includes(arr[i])) {
      result.push(current);
    }
  }
  return result;
}
console.log(removedup([1, 2, 3, 4, 4, 5, 6, 6, 7]));
